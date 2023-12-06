export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["alongamento.jpg","crossfit.jpg","exercicios.jpg","favicon.png","musculacao.jpg","natacao.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b71d5a12.js","app":"_app/immutable/entry/app.689eecfa.js","imports":["_app/immutable/entry/start.b71d5a12.js","_app/immutable/chunks/scheduler.ebe8d4a2.js","_app/immutable/chunks/singletons.51ee56fa.js","_app/immutable/chunks/paths.7373a0f1.js","_app/immutable/entry/app.689eecfa.js","_app/immutable/chunks/scheduler.ebe8d4a2.js","_app/immutable/chunks/index.1c4d11cd.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/aboutUs",
				pattern: /^\/aboutUs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/modalities",
				pattern: /^\/modalities\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/modalities/[slug]",
				pattern: /^\/modalities\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
