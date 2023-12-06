<script>
  import { page } from '$app/stores'
  import { modalities } from '$lib/stores'
	import IntroSingle from '$lib/IntroSingle.svelte';
	import Card from '../../../lib/Card.svelte';

  let modalitie = $page.params.slug
  
  // let data = $modalities.find(e => e.slug === modalitie);
  export let data;
</script>

<IntroSingle data={data}/>

<section class="related">
  <div class="related__wrapper wrap">
    <h3>Other modalities:</h3>
    <div class="list">
      {#each $modalities as info}
      <Card info={info}/>
      {/each}
    </div>
  </div>
</section>

<style>
  .related {
    margin-top: 40px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 16px;
  }
</style>