import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const global = "";
const index$1 = "";
const _700 = "";
const index = "";
const Logo = "/_app/immutable/assets/logo.b309469b.png";
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".header__btn.svelte-9mw2v3{border-color:var(--feat)}.header__btn.svelte-9mw2v3:hover{border-color:#fff}.header__wrapper.svelte-9mw2v3{display:flex;align-items:center;min-height:120px}.logo.svelte-9mw2v3{max-width:277px}nav.svelte-9mw2v3{margin-left:auto}ul.svelte-9mw2v3{display:flex;align-items:center;gap:24px}a.svelte-9mw2v3{color:white}a.svelte-9mw2v3:not(.btn):hover{text-decoration:underline}a.active.svelte-9mw2v3,a.active.svelte-9mw2v3:hover{text-decoration:underline;text-decoration-color:var(--feat)}@media(max-width: 800px){.header__wrapper.svelte-9mw2v3{flex-direction:column;justify-content:center}nav.svelte-9mw2v3{margin-left:unset}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$3);
  current = $page.route.id;
  $$unsubscribe_page();
  return `<header class="header"><div class="header__wrapper wrap svelte-9mw2v3"><a href="/" class="logo svelte-9mw2v3" data-svelte-h="svelte-b21mp9"><img${add_attribute("src", Logo, 0)} alt="Local Gym Logo"></a> <nav class="svelte-9mw2v3"><ul class="svelte-9mw2v3"><li><a href="/" class="${["svelte-9mw2v3", current === "/" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1db2r8u">Home</a></li> <li><a href="/aboutUs" class="${["svelte-9mw2v3", current === "/aboutUs" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1kk83nq">About Us</a></li> <li><a href="/modalities" class="${[
    "svelte-9mw2v3",
    current === "/modalities" || current === "/modalities/[slug]" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1e2fqze">Modalities</a></li> <li data-svelte-h="svelte-irt5ei"><a class="btn header__btn svelte-9mw2v3" href="#contact">Contact Us</a></li></ul></nav></div> </header>`;
});
const crossfit = "/_app/immutable/assets/crossfit.74248218.jpg";
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".footer.svelte-1fnglyx{margin-top:90px}.footer__wrapper.svelte-1fnglyx{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center}.footer__img.svelte-1fnglyx{position:relative}.footer__img.svelte-1fnglyx::after{content:'';position:absolute;inset:0;background-color:var(--overlay);border-radius:16px}img.svelte-1fnglyx{border-radius:16px}p.svelte-1fnglyx{margin-top:16px;max-width:360px}h2.svelte-1fnglyx{font-size:calc(36 /16 * 1rem)}.footer__btns.svelte-1fnglyx{margin-top:24px;display:flex;gap:8px}@media(max-width: 800px){.footer__wrapper.svelte-1fnglyx{grid-template-columns:1fr}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="footer svelte-1fnglyx" id="contact" data-svelte-h="svelte-ellm5w"><div class="footer__wrapper wrap svelte-1fnglyx"><div class="footer__img svelte-1fnglyx"><img${add_attribute("src", crossfit, 0)} alt="" class="svelte-1fnglyx"></div> <div class="footer__info"><h2 class="svelte-1fnglyx">Come get your<br> first free workout</h2> <p class="svelte-1fnglyx">Get in touch via WhatsApp or email and speak to a specialist team coach</p> <div class="footer__btns svelte-1fnglyx"><a class="btn" href="https://api.whatsapp.com/send?phone=5513991578990">WhatsApp</a> <a class="btn" href="mailto:teste@teste.com.br">E-mail</a></div></div></div> </footer>`;
});
const Credits_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".credits.svelte-1fmv856{margin-top:60px}.credits__wrapper.svelte-1fmv856::before{content:'';display:block;width:100%;height:1px;background-color:var(--subtle)}span.svelte-1fmv856{display:inline-block;font-size:calc(14 / 16 * 1rem);padding-top:24px;padding-bottom:24px}",
  map: null
};
const Credits = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="credits svelte-1fmv856" data-svelte-h="svelte-s9it9p"><div class="credits__wrapper wrap svelte-1fmv856"><span class="svelte-1fmv856">© Local Gym, 2023</span></div> </div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-ybsszh{display:flex;flex-direction:column;height:100%}.footer__container.svelte-ybsszh{margin-bottom:auto}.credits__container.svelte-ybsszh{margin-bottom:-70px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="layout svelte-ybsszh">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="main">${slots.default ? slots.default({}) : ``}</main> <div class="footer__container svelte-ybsszh">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> <div class="credits__container svelte-ybsszh">${validate_component(Credits, "Credits").$$render($$result, {}, {}, {})}</div> </div>`;
});
export {
  Layout as default
};
