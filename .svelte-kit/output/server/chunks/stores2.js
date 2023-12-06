import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
import { w as writable } from "./index.js";
const Card_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1vd2m8s{object-fit:cover;border-radius:4px}h2.svelte-1vd2m8s{padding:8px 16px}.card.svelte-1vd2m8s{border:solid 1px var(--subtle);padding:4px;display:flex;align-items:center;border-radius:8px;flex-basis:calc(50% - 10px)}a.svelte-1vd2m8s{color:white;transition:250ms}a.svelte-1vd2m8s:hover{border-color:#fff;transition:125ms}@media(max-width: 800px){.card.svelte-1vd2m8s{flex-basis:100%}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { info } = $$props;
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  $$result.css.add(css);
  return `<a href="${"/modalities/" + escape(info.slug, true)}" class="card svelte-1vd2m8s"><img${add_attribute("src", info.img, 0)} alt="" width="120" height="120" class="svelte-1vd2m8s"> <h2 class="svelte-1vd2m8s">${escape(info.name)}</h2> </a>`;
});
const modalities = writable([
  {
    name: "Weight Training",
    slug: "weightTrain",
    img: "/musculacao.jpg",
    content: "Bodybuilding workouts guided by our experts"
  },
  {
    name: "Crossfit",
    slug: "crossfit",
    img: "/crossfit.jpg",
    content: "Group or individual functional training classes, with HIT and fully dynamic, guided by our highly qualified athletes."
  },
  {
    name: "Stretching",
    slug: "stretching",
    img: "/alongamento.jpg",
    content: "Group training, ideal for loosening muscles and improving performance both in sports and in everyday life."
  },
  {
    name: "Group Exercise",
    slug: "groupExe",
    img: "/exercicios.jpg",
    content: "Guided exercise class aimed at improving your performance and stamina."
  },
  {
    name: "Swimming",
    slug: "swimming",
    img: "/natacao.jpg",
    content: "Swimming lessons for all ages, whether to achieve your goals in the lane or to learn how to swim."
  }
]);
export {
  Card as C,
  modalities as m
};
