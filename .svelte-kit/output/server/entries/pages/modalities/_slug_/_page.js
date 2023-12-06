let modalities = [
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
];
function load({ params }) {
  let data = modalities.find((e) => e.slug === params.slug);
  return data;
}
export {
  load
};
