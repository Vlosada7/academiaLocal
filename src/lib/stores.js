import { writable } from "svelte/store";

export const modalities = writable([
	{
		name: "Weight Training",
		slug: "weightTrain",
		img: "/musculacao.jpg",
	},
	{
		name: "Crossfit",
		slug: "crossfit",
		img: "/crossfit.jpg",
	},
  {
    name: 'Stretching',
    slug: 'stretching',
    img: '/alongamento.jpg'
  },
  {
    name: 'Group Exercise',
    slug: 'groupExe',
    img: '/exercicios.jpg'
  },
  {
    name: 'Swimming',
    slug: 'swimming',
    img: '/natacao.jpg'
  }
]);
