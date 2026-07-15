export const motionTokens = {
  duration: {
    instant: 0.12,
    fast: 0.18,
    normal: 0.32,
    slow: 0.55,
    cinematic: 0.8,
  },
  easing: {
    smooth: [0.22, 1, 0.36, 1] as const,
    entrance: [0.16, 1, 0.3, 1] as const,
    exit: [0.7, 0, 0.84, 0] as const,
  },
  spring: {
    soft: { type: "spring" as const, stiffness: 170, damping: 24 },
    responsive: { type: "spring" as const, stiffness: 320, damping: 30 },
  },
} as const;
