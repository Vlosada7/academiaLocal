<script>
  import Intro from "$lib/Intro.svelte"
	import Info from "$lib/Info.svelte";
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
    <Info 
      question = "How many days a week can I use?"
      answer = "The gym is open 24/7, the student can attend the gym as many times a week as they want, depending on the plan contracted."
    />
    <Info 
      question = "How many modalities are available at the gym?"
      answer = "5 modalities, including weight training, crossfit, stretching, group exercises and swimming."
    />
  </div>
</section>


<style>
  .faq {
    margin-top: 60px;
  }
  .faq__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>