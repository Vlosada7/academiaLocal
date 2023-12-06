import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { I as Intro } from "../../../chunks/Intro.js";
import "@formkit/auto-animate";
const IconPlus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.51472 10H18.4853M10 18.4853V1.51473" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Info_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".info.svelte-x0j86q{cursor:pointer}.question.svelte-x0j86q{display:flex;align-items:center;border:1px solid var(--subtle);padding:17px 16px;height:80px;transition:250ms}.question.active.svelte-x0j86q{border-color:#fff;transition:125ms}.question.svelte-x0j86q svg{margin-left:auto;margin-right:8px;flex-shrink:0;transition:250ms}.question.active.svelte-x0j86q svg{transform:rotate(45deg);transition:125ms}.answer.svelte-x0j86q{padding:0 16px;border-left:1px solid var(--feat);margin-top:16px;margin-bottom:16px}",
  map: null
};
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  let { answer } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  $$result.css.add(css$1);
  return `<div class="info svelte-x0j86q" role="button" tabindex="0"><div class="${["question svelte-x0j86q", ""].join(" ").trim()}"><h3>${escape(question)}</h3> ${validate_component(IconPlus, "IconPlus").$$render($$result, {}, {}, {})}</div> ${``} </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".faq.svelte-1snzvy9{margin-top:60px}.faq__wrapper.svelte-1snzvy9{display:grid;grid-template-columns:1fr 1fr;gap:20px}@media(max-width: 800px){.faq__wrapper.svelte-1snzvy9{grid-template-columns:1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Intro, "Intro").$$render(
    $$result,
    {
      title: "Discover the fastest growing gym in the city!",
      content: "Check out some of the frequently asked questions",
      icon: "weight",
      img: "exercicios",
      btn: "Modalities",
      href: "/modalities"
    },
    {},
    {}
  )} <section class="faq svelte-1snzvy9"><div class="faq__wrapper wrap svelte-1snzvy9">${validate_component(Info, "Info").$$render(
    $$result,
    {
      question: "How much is the monthly fee?",
      answer: "The monthly fee will vary between 40 and 100 euros, depending on the number of days the student will attend the gym during the week."
    },
    {},
    {}
  )} ${validate_component(Info, "Info").$$render(
    $$result,
    {
      question: "How many days a week can I use?",
      answer: "The gym is open 24/7, the student can attend the gym as many times a week as they want, depending on the plan contracted."
    },
    {},
    {}
  )} ${validate_component(Info, "Info").$$render(
    $$result,
    {
      question: "How many modalities are available at the gym?",
      answer: "5 modalities, including weight training, crossfit, stretching, group exercises and swimming."
    },
    {},
    {}
  )}</div> </section>`;
});
export {
  Page as default
};
