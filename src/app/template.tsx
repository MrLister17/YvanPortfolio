import { PageTransition } from "@/components/page-transition";
import { RevealObserver } from "@/components/reveal-observer";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}<RevealObserver /></PageTransition>;
}
