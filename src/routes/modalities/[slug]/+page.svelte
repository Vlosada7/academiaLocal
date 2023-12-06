<script>
  import { page } from '$app/stores'
  import { modalities } from '$lib/stores'

  let modalitie = $page.params.slug
  
  let data = $modalities.find(e => e.slug === modalitie);
  console.log(data);
</script>

<h1>{data.name}</h1>

