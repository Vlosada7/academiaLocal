

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0bc88ea6.js","_app/immutable/chunks/scheduler.ebe8d4a2.js","_app/immutable/chunks/index.1c4d11cd.js","_app/immutable/chunks/stores.77f5b632.js","_app/immutable/chunks/singletons.51ee56fa.js","_app/immutable/chunks/paths.7373a0f1.js"];
export const stylesheets = [];
export const fonts = [];
