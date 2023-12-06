import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const imgMusculacao = "/_app/immutable/assets/musculacao.5208e85e.jpg";
const imgExercicios = "/_app/immutable/assets/exercicios.a7a97bcc.jpg";
const imgAlongamento = "/_app/immutable/assets/alongamento.c5249d3f.jpg";
const iconMuscle = "/_app/immutable/assets/icon-muscle.1faaaa3b.png";
const iconWeight = "/_app/immutable/assets/icon-weight.8d2301d8.png";
const Intro_svelte_svelte_type_style_lang = "";
const css = {
  code: ".intro.svelte-1vc6tgu{min-height:360px;background-size:cover;background-position:center;display:grid;align-content:center;justify-content:start;position:relative}.intro.svelte-1vc6tgu::after{content:'';position:absolute;inset:0;background-color:var(--overlay)}.intro__wrapper.svelte-1vc6tgu{z-index:1;max-width:450px}.btn.svelte-1vc6tgu{margin-top:24px}p.svelte-1vc6tgu{font-size:calc(18 / 16 * 1rem);margin-top:16px}img.svelte-1vc6tgu{display:inline;max-width:36px}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { content } = $$props;
  let { btn = false } = $$props;
  let { href = false } = $$props;
  let { img } = $$props;
  if (img === "musculacao")
    img = imgMusculacao;
  if (img === "exercicios")
    img = imgExercicios;
  if (img === "alongamento")
    img = imgAlongamento;
  let { icon } = $$props;
  if (icon === "muscle")
    icon = iconMuscle;
  if (icon === "weight")
    icon = iconWeight;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.btn === void 0 && $$bindings.btn && btn !== void 0)
    $$bindings.btn(btn);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  $$result.css.add(css);
  return `<section class="intro svelte-1vc6tgu" style="${"background-image: url(" + escape(img, true) + ");"}"><div class="intro__wrapper wrap svelte-1vc6tgu"><h1><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --> <img${add_attribute("src", icon, 0)} alt="" class="svelte-1vc6tgu"></h1> <p class="svelte-1vc6tgu">${escape(content)}</p> ${btn && href ? `<a class="btn svelte-1vc6tgu"${add_attribute("href", href, 0)}>${escape(btn)}</a>` : ``}</div> </section>`;
});
export {
  Intro as I
};
