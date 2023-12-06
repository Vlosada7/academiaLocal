

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/modalities/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.30b68773.js","_app/immutable/chunks/scheduler.ebe8d4a2.js","_app/immutable/chunks/index.1c4d11cd.js","_app/immutable/chunks/stores.22ae66e2.js","_app/immutable/chunks/paths.7373a0f1.js","_app/immutable/chunks/Intro.1aa622e7.js","_app/immutable/chunks/index.3195dde1.js"];
export const stylesheets = ["_app/immutable/assets/4.d562d95e.css","_app/immutable/assets/stores.f9c8dcbf.css","_app/immutable/assets/Intro.6f085b6c.css"];
export const fonts = [];
