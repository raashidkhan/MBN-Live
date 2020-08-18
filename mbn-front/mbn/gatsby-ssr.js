/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// exports.onRenderBody = ({ setBodyAttributes }) => {
//   setBodyAttributes({
//     className: "light",
//   })
// }

import { createElement } from "react"

const applyDarkModeClass = `
(function() {
  try {
    let mode = localStorage.getItem('jlmode');
    mode==="dark" ? 	document.body.classList.add('dark'):document.body.classList.add('light');
  } catch (e) {}
})();
`

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  })
  setPreBodyComponents([script])
}
