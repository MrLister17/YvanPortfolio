"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionTokens } from "@/config/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="route-frame"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : motionTokens.duration.normal,
        ease: motionTokens.easing.smooth,
      }}
    >
      {!reduceMotion && (
        <motion.div
          className="route-reveal"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: motionTokens.duration.slow,
            ease: motionTokens.easing.entrance,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
