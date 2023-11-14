import { createGlobalStyle } from 'styled-components';
import { QUERIES } from '@/app/constants';

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


.profile.desktop {
  position: absolute;
  top: 0px;
  right: 0px;
}


.profile.tablet {
  display: none;
  position: absolute;
  top: 0px;
  right: 0px;
}


.profile.mobile {
  display: none;
  position: absolute;
  top: 0px;
  right: 0px;
}

@media ${QUERIES.tabletAndDown} {

  .profile.desktop {
    display: none;
  }

  .profile.tablet {
  display: block;
  position: absolute;
  top: -30px;
  right: -30px;
}

}

.circle.pattern {
  position: absolute;
  right: 380px;
  bottom: 170px
}

@media ${QUERIES.tabletAndDown} {
  .circle.pattern {
    right: -90px;
    bottom: 75px;
  }
}


.rings.header {
  position: absolute;
  left: -300px;
  top: 100px;
}

@media ${QUERIES.tabletAndDown} {
  .rings.header {
    left: -300px;
    top: 80px;
  }
}

.rings.experience {
  position: absolute;
  right: -380px;
  bottom: -50px;
}

@media ${QUERIES.tabletAndDown} {
  .rings.experience {
    right: -380px;
    bottom: -65px;
  }
}

.rings.contactform {
  position: absolute;
  left: -200px;
  bottom: 50px;
}

@media ${QUERIES.tabletAndDown} {
  .rings.contactform {
    left: -360px;
    bottom: 25px;
  }
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
