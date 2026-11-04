import { Rosette } from '../components/Rosette';

export const NotFound = () => {
    return (
        <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
            <Rosette withTraces={false} className="pointer-events-none absolute size-[700px] opacity-10" />
            <p className="label-mono text-accent">Error 404</p>
            <h1 className="mt-4 font-serif text-5xl font-[350] md:text-7xl">
                This page <em className="shimmer">doesn't exist.</em>
            </h1>
            <p className="mt-5 max-w-md text-muted">It may have moved, or the link might be wrong.</p>
            <a href="/" className="btn-primary mt-10 inline-flex items-center gap-2 rounded-sm px-6 py-4 font-semibold">
                <span aria-hidden="true">←</span> Back home
            </a>
        </main>
    );
};
