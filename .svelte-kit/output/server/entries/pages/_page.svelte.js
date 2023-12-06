import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { I as Intro } from "../../chunks/Intro.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Intro, "Intro").$$render(
    $$result,
    {
      title: "Are you ready<br> for the challenge?",
      content: "The Local Gym is ready to help you achieve your goals.",
      btn: "About us",
      href: "/aboutUs",
      icon: "muscle",
      img: "musculacao"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
