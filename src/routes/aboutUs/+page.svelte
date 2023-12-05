<script>
  import Intro from "$lib/Intro.svelte"
	import Info from "../../lib/Info.svelte";
</script>

<Intro 
  title = "Discover the fastest growing gym in the city!"
  content = "Check out some of the frequently asked questions"
  icon = "weight"
  img = "exercicios"
  btn = 'Modalities'
  href = '/modalities'
/>
<section class="faq">
  <div class="faq__wrapper wrap">
    <Info 
      question = "How much is the monthly fee?"
      answer = "The monthly fee will vary between 40 and 100 euros, depending on the number of days the student will attend the gym during the week."
    />
  </div>
</section>


<style>
  .faq {
    margin-top: 60px;
  }
</style>