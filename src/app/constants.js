// Desktop-first

const BREAKPOINTS = {
  tabletMax: 1100,
  mobileMax: 550,
};

export const QUERIES = {
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
  mobileAndDown: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
};
