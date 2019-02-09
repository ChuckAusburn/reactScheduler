const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/templates/blog-post.tsx"))),
  "component---src-templates-tags-page-tsx": hot(preferDefault(require("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/templates/tags-page.tsx"))),
  "component---src-templates-blog-page-tsx": hot(preferDefault(require("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/templates/blog-page.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/pages/about.tsx"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/pages/blog.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/pages/index.tsx")))
}

