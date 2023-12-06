import * as universal from '../entries/pages/modalities/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/modalities/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/modalities/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.8c205610.js","_app/immutable/chunks/scheduler.ebe8d4a2.js","_app/immutable/chunks/index.1c4d11cd.js","_app/immutable/chunks/stores.22ae66e2.js","_app/immutable/chunks/paths.7373a0f1.js","_app/immutable/chunks/stores.77f5b632.js","_app/immutable/chunks/singletons.51ee56fa.js","_app/immutable/chunks/index.3195dde1.js","_app/immutable/chunks/index.944c308a.js"];
export const stylesheets = ["_app/immutable/assets/5.9b399432.css","_app/immutable/assets/stores.f9c8dcbf.css"];
export const fonts = [];
