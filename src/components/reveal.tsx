/**
 * Marks content for a scroll-triggered entrance. RevealObserver (mounted in the route
 * template) flips it on when it enters the viewport; CSS in globals.css does the motion.
 * Without JavaScript or with reduced motion the content is simply visible.
 */
export function Reveal({ children, className = "", variant = "rise" }: { children: React.ReactNode; className?: string; variant?: "rise" | "fade" | "mask" }) {
  return <div className={className} data-reveal={variant}>{children}</div>;
}
