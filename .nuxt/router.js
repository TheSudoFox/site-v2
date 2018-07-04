import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4f0725db = () => import('../pages/work.vue' /* webpackChunkName: "pages/work" */).then(m => m.default || m)
const _03a44133 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _e8937922 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _7f1b7a0c = () => import('../pages/skills.vue' /* webpackChunkName: "pages/skills" */).then(m => m.default || m)
const _2222e5ad = () => import('../pages/blog/_content.vue' /* webpackChunkName: "pages/blog/_content" */).then(m => m.default || m)
const _235c1bf8 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/work",
			component: _4f0725db,
			name: "work"
		},
		{
			path: "/about",
			component: _03a44133,
			name: "about"
		},
		{
			path: "/blog",
			component: _e8937922,
			name: "blog"
		},
		{
			path: "/skills",
			component: _7f1b7a0c,
			name: "skills"
		},
		{
			path: "/:section/:year/:month/:day/:slug",
			component: _2222e5ad,
			name: "blog-content"
		},
		{
			path: "/",
			component: _235c1bf8,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
