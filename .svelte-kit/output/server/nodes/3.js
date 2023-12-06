

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/aboutUs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9a71d6b7.js","_app/immutable/chunks/scheduler.ebe8d4a2.js","_app/immutable/chunks/index.1c4d11cd.js","_app/immutable/chunks/Intro.1aa622e7.js","_app/immutable/chunks/index.3195dde1.js","_app/immutable/chunks/index.944c308a.js"];
export const stylesheets = ["_app/immutable/assets/3.94f90ef7.css","_app/immutable/assets/Intro.6f085b6c.css"];
export const fonts = [];
