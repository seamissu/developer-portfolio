import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html,
body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

:root {
  --black: hsl(0deg 0% 8%);
  --green: hsl(153deg 71% 59%);
  --dark-gray: hsl(0deg 0% 14%);
  --gray: hsl(0deg 0% 85%);
  --white: hsl(0deg 0% 100%);

  --font-weight-bold: 700;
  --font-weight-medium: 500;

  --font-size-heading-extra-large: 88px;
  --font-size-heading-large: 48px;
  --font-size-heading-medium: 24px;

  --font-size-text-large: 18px;
  --font-size-text-medium: 16px;
}`;

export default GlobalStyles;
