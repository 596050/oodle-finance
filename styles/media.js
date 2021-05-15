export const breakpoints = {
  sm: 768,
  md: 1024,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
