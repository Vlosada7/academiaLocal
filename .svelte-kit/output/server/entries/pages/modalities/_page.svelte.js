import { c as create_ssr_component, a as subscribe, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { I as Intro } from "../../../chunks/Intro.js";
import { m as modalities, C as Card } from "../../../chunks/stores2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modalitites.svelte-1otv4u5{margin-top:60px}.modalities__wrapper.svelte-1otv4u5{display:flex;flex-wrap:wrap;gap:20px;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalities, $$unsubscribe_modalities;
  $$unsubscribe_modalities = subscribe(modalities, (value) => $modalities = value);
  $$result.css.add(css);
  $$unsubscribe_modalities();
  return `${validate_component(Intro, "Intro").$$render(
    $$result,
    {
      title: "We have the right modality<br> for you",
      content: "Discover the different modalities at our academy",
      icon: "weight",
      img: "alongamento"
    },
    {},
    {}
  )} <section class="modalitites svelte-1otv4u5"><div class="modalities__wrapper wrap svelte-1otv4u5">${each($modalities, (modalitie) => {
    return `${validate_component(Card, "Card").$$render($$result, { info: modalitie }, {}, {})}`;
  })}</div> </section>`;
});
export {
  Page as default
};
