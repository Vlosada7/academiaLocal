import{s as _,h as v,n as w}from"./scheduler.ebe8d4a2.js";import{S as j,i as b,g as h,s as x,m as C,h as d,j as y,c as G,n as S,f,k as n,a as E,z as g,o as q}from"./index.1c4d11cd.js";import{w as T}from"./paths.7373a0f1.js";function M(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function A(t){let e,s,l,o,r,m=t[0].name+"",c,u;return{c(){e=h("a"),s=h("img"),o=x(),r=h("h2"),c=C(m),this.h()},l(i){e=d(i,"A",{href:!0,class:!0});var a=y(e);s=d(a,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),o=G(a),r=d(a,"H2",{class:!0});var p=y(r);c=S(p,m),p.forEach(f),a.forEach(f),this.h()},h(){v(s.src,l=t[0].img)||n(s,"src",l),n(s,"alt",""),n(s,"width","120"),n(s,"height","120"),n(s,"class","svelte-1vd2m8s"),n(r,"class","svelte-1vd2m8s"),n(e,"href",u="/modalities/"+t[0].slug),n(e,"class","card svelte-1vd2m8s")},m(i,a){E(i,e,a),g(e,s),g(e,o),g(e,r),g(r,c)},p(i,[a]){a&1&&!v(s.src,l=i[0].img)&&n(s,"src",l),a&1&&m!==(m=i[0].name+"")&&q(c,m),a&1&&u!==(u="/modalities/"+i[0].slug)&&n(e,"href",u)},i:w,o:w,d(i){i&&f(e)}}}function H(t,e,s){let{info:l}=e;return t.$$set=o=>{"info"in o&&s(0,l=o.info)},[l]}class W extends j{constructor(e){super(),b(this,e,H,A,_,{info:0})}}const D=T([{name:"Weight Training",slug:"weightTrain",img:"/musculacao.jpg",content:"Bodybuilding workouts guided by our experts"},{name:"Crossfit",slug:"crossfit",img:"/crossfit.jpg",content:"Group or individual functional training classes, with HIT and fully dynamic, guided by our highly qualified athletes."},{name:"Stretching",slug:"stretching",img:"/alongamento.jpg",content:"Group training, ideal for loosening muscles and improving performance both in sports and in everyday life."},{name:"Group Exercise",slug:"groupExe",img:"/exercicios.jpg",content:"Guided exercise class aimed at improving your performance and stamina."},{name:"Swimming",slug:"swimming",img:"/natacao.jpg",content:"Swimming lessons for all ages, whether to achieve your goals in the lane or to learn how to swim."}]);export{W as C,M as e,D as m};
