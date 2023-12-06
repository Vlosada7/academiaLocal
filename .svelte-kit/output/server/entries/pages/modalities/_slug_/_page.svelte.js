import { c as create_ssr_component, e as escape, b as add_attribute, a as subscribe, v as validate_component, d as each } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { m as modalities, C as Card } from "../../../../chunks/stores2.js";
import "@formkit/auto-animate";
const IntroSingle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".intro__wrapper.svelte-1l7s2uh{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center}.intro__img.svelte-1l7s2uh{margin-right:-20px;position:relative}.intro__img.svelte-1l7s2uh::before{content:'';display:block;position:absolute;inset:0;background-color:var(--overlay);border-radius:0 0 0 8px}img.svelte-1l7s2uh{border-radius:0 0 0 8px;height:360px;object-fit:cover}p.svelte-1l7s2uh{font-size:calc(18/ 16 * 1rem);margin-top:8px}@media(max-width: 800px){.intro__wrapper.svelte-1l7s2uh{grid-template-columns:1fr}.intro__img.svelte-1l7s2uh{grid-row:1;margin-left:-20px}img.svelte-1l7s2uh{height:240px;width:100%;object-position:center}}",
  map: null
};
const IntroSingle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="intro"><div class="intro__wrapper wrap svelte-1l7s2uh"><div class="intro__info"><h1>${escape(data.name)}</h1> <p class="svelte-1l7s2uh">${escape(data.content)}</p></div> <div class="intro__img svelte-1l7s2uh"><img${add_attribute("src", data.img, 0)} alt="" class="svelte-1l7s2uh"></div></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".related.svelte-1dvnin3{margin-top:40px}.list.svelte-1dvnin3{display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin-top:16px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalities, $$unsubscribe_modalities;
  let $page, $$unsubscribe_page;
  $$unsubscribe_modalities = subscribe(modalities, (value) => $modalities = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_modalities();
  $$unsubscribe_page();
  return `${validate_component(IntroSingle, "IntroSingle").$$render($$result, { data }, {}, {})} <section class="related svelte-1dvnin3"><div class="related__wrapper wrap"><h3 data-svelte-h="svelte-lu0kq1">Other modalities:</h3> <div class="list svelte-1dvnin3">${each($modalities, (info) => {
    return `${info.slug !== $page.params.slug ? `${validate_component(Card, "Card").$$render($$result, { info }, {}, {})}` : ``}`;
  })}</div></div> </section>`;
});
export {
  Page as default
};
