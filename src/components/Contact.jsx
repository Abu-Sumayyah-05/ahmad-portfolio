import { useState } from 'react';
import { links, profile } from '../data/site';
import { useMagnetic } from '../hooks/useMagnetic';
import { cn } from '../lib/utils';
import { Reveal } from './Reveal';
import { Rosette } from './Rosette';
import { SectionLabel } from './SectionLabel';

const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;
const emailjsReady = Boolean(VITE_EMAILJS_SERVICE_ID && VITE_EMAILJS_TEMPLATE_ID && VITE_EMAILJS_PUBLIC_KEY);
const COOLDOWN_MS = 60_000;

// Underlined input whose line turns accent-coloured from the left on focus
const Field = ({ label, as: Tag = 'input', ...props }) => (
  <label className="group block">
    <span className="label-mono text-[.62rem] text-muted transition-colors group-focus-within:text-accent">{label}</span>
    <span className="relative mt-1 block">
      <Tag
        {...props}
        className="peer w-full resize-none border-b border-fg/20 bg-transparent py-3 text-lg outline-none placeholder:text-muted/60"
      />
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo peer-focus:scale-x-100" />
    </span>
  </label>
);

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | cooldown
  const [copied, setCopied] = useState(false);
  const emailRef = useMagnetic(0.15);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked: the mailto link still works
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    // Spam protection 1, the honeypot: a hidden "website" field people never see.
    // Bots fill in every field, so if it has a value we fake success and send nothing.
    if (e.target.elements.website.value) {
      setStatus('sent');
      return;
    }
    // Spam protection 2, the cooldown: at most one message per browser per minute.
    // Protects the free EmailJS quota (200 emails/month) from someone hammering the button.
    const last = Number(localStorage.getItem('contact-sent-at') || 0);
    if (Date.now() - last < COOLDOWN_MS) {
      setStatus('cooldown');
      return;
    }

    // Without EmailJS keys, hand the message to the visitor's email app
    if (!emailjsReady) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }
    setStatus('sending');
    try {
      // EmailJS is only downloaded when someone actually sends a message
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          message: form.message,
          // Names used by EmailJS's built-in "Contact Us" template
          name: form.name,
          email: form.email,
          title: 'Portfolio contact form',
          time: new Date().toLocaleString('en-NG', { dateStyle: 'medium', timeStyle: 'short' }),
          // Equivalent names, in case the template is customised later
          from_name: form.name,
          from_email: form.email,
          // Lets you hit Reply in Gmail and answer the visitor directly
          reply_to: form.email,
        },
        { publicKey: VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      try {
        localStorage.setItem('contact-sent-at', String(Date.now()));
      } catch {
        // Storage blocked: the cooldown just won't apply in this browser
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="defer-render relative isolate overflow-hidden py-24 lg:py-36">
      {/* Huge slow-turning rosette behind the section */}
      <Rosette
        withTraces={false}
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[.07] animate-[spin_120s_linear_infinite]"
      />

      <div className="wrap">
        <div className="text-center">
          <SectionLabel className="justify-center text-accent">05 — Contact</SectionLabel>
          <Reveal as="h2" className="mx-auto max-w-[14ch] font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] font-[350] tracking-[-.02em]">
            Got something worth <em className="shimmer font-light">building?</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mx-auto mt-5 max-w-lg text-lg text-muted">
            I'm open to full-stack and frontend roles, internships and freelance projects. The fastest way to reach me is email.
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              ref={emailRef}
              href={`mailto:${profile.email}`}
              className="border-b border-accent pb-1 font-serif text-[clamp(1.3rem,3.2vw,2.2rem)] text-accent transition-transform duration-300"
            >
              {profile.email}
            </a>
            <button
              onClick={copyEmail}
              className="label-mono rounded-full border border-line px-3 py-1.5 text-[.62rem] text-muted transition-colors hover:border-accent hover:text-accent"
              aria-live="polite"
            >
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </Reveal>

          <Reveal as="ul" delay={0.3} className="label-mono mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-muted">
            <li><a className="link-draw hover:text-fg" href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
            <li><a className="link-draw hover:text-fg" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
            <li><a className="link-draw hover:text-fg" href={profile.cv} download>Résumé ↓</a></li>
          </Reveal>
        </div>

        {/* Message form */}
        <Reveal delay={0.1} className="mx-auto mt-20 max-w-2xl">
          <form onSubmit={submit} className="grid gap-8 border border-line bg-bg/60 p-6 backdrop-blur-sm sm:grid-cols-2 sm:p-10">
            <p className="label-mono text-accent sm:col-span-2">Or send a message</p>
            {/* Honeypot: hidden from people and screen readers, but bots fill it in */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
            <Field label="Your name" name="name" required value={form.name} onChange={update} autoComplete="name" />
            <Field label="Your email" name="email" type="email" required value={form.email} onChange={update} autoComplete="email" />
            <div className="sm:col-span-2">
              <Field label="Message" as="textarea" name="message" rows={4} required value={form.message} onChange={update} />
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary inline-flex items-center gap-2.5 rounded-sm px-6 py-4 font-semibold disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'} <span aria-hidden="true">→</span>
              </button>
              <p role="status" className={cn('text-sm', status === 'error' ? 'text-accent' : 'text-muted')}>
                {status === 'sent' && "Thanks, it's sent. I'll reply soon."}
                {status === 'error' && `That didn't go through. Please email ${profile.email} directly.`}
                {status === 'cooldown' && 'Message received. Please give it a minute before sending another.'}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
