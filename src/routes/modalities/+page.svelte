<script>
  import Intro from "$lib/Intro.svelte";
	import Card from "../../lib/Card.svelte";
  import { modalities } from "$lib/stores"
</script>

<Intro
  title = "We have the right modality<br> for you"
  content = "Discover the different modalities at our academy"
  icon = "weight"
  img = 'alongamento'
/>

<section class="modalitites">
  <div class="modalities__wrapper wrap">
    {#each $modalities as modalitie}
    <Card info={modalitie}/>
    {/each}
  </div>
</section>