<script>
  import { page } from '$app/stores'
  import { modalities } from '$lib/stores'
	import IntroSingle from '$lib/IntroSingle.svelte';

  let modalitie = $page.params.slug
  
  let data = $modalities.find(e => e.slug === modalitie);
  console.log(data);
</script>

<IntroSingle data={data}/>