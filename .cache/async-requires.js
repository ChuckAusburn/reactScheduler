// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-tsx": () => import("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/templates/blog-post.tsx" /* webpackChunkName: "component---src-templates-blog-post-tsx" */),
  "component---src-templates-tags-page-tsx": () => import("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/templates/tags-page.tsx" /* webpackChunkName: "component---src-templates-tags-page-tsx" */),
  "component---src-templates-blog-page-tsx": () => import("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/templates/blog-page.tsx" /* webpackChunkName: "component---src-templates-blog-page-tsx" */),
  "component---cache-dev-404-page-js": () => import("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-about-tsx": () => import("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/pages/about.tsx" /* webpackChunkName: "component---src-pages-about-tsx" */),
  "component---src-pages-blog-tsx": () => import("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/pages/blog.tsx" /* webpackChunkName: "component---src-pages-blog-tsx" */),
  "component---src-pages-index-tsx": () => import("/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/aliciadimaccio/Documents/Coding-Bootcamp/code/React-Schedule/.cache/data.json")

