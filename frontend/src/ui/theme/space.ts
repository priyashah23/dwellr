const EM_BASE = 16;

export const rem = (value: number) => `${value / EM_BASE}rem`;

const space = {
  1: rem(4),
  2: rem(8),
  3: rem(12),
  4: rem(16),
  5: rem(24),
  6: rem(32),
  7: rem(40),
  8: rem(48),
  9: rem(56),
  10: rem(64)
};

export default space;
