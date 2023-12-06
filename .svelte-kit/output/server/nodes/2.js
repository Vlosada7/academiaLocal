

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9b6d496b.js","_app/immutable/chunks/scheduler.ebe8d4a2.js","_app/immutable/chunks/index.1c4d11cd.js","_app/immutable/chunks/Intro.1aa622e7.js","_app/immutable/chunks/index.3195dde1.js"];
export const stylesheets = ["_app/immutable/assets/Intro.6f085b6c.css"];
export const fonts = [];
