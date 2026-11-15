"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionTokens } from "@/config/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="route-frame">
      {/* Always rendered so server and client markup match; CSS hides it for reduced motion. */}
      <motion.div
        className="route-reveal"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: reduceMotion ? 0 : [0, 1, 0] }}
        transition={{ duration: motionTokens.duration.slow, ease: motionTokens.easing.entrance }}
      />
      {children}
    </div>
  );
}
