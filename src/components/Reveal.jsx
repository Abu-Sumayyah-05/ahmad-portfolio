import { useInView } from '../hooks/useInView';
import { cn } from '../lib/utils';

// Fades and lifts its children into place when scrolled into view.
// `delay` (seconds) staggers neighbouring items.
export const Reveal = ({ as: Tag = 'div', delay = 0, className, children, ...props }) => {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={cn('reveal', inView && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
};
