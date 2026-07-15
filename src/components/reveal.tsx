"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionTokens } from "@/config/motion";

export function Reveal({ children, className = "", variant = "rise" }: { children: React.ReactNode; className?: string; variant?: "rise" | "fade" | "mask" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={`reveal reveal-${variant} ${className}`}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduceMotion ? 0 : motionTokens.duration.slow, ease: motionTokens.easing.smooth }}
    >
      {children}
    </motion.div>
  );
}
