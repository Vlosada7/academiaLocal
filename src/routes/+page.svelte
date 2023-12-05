<script>
  import imageHome from '$lib/assets/musculacao.jpg'
  import muscleIcon from '$lib/assets/icon-muscle.png'
</script>


<section class="intro" style="background-image: url({imageHome});">
  <div class="intro__wrapper wrap">
    <h1>Are you ready <br>for the challenge? <img src="{muscleIcon}" alt="Muscle emoji"></h1>
    <p>The Local Gym is ready to help you achieve your goals.</p>
    <a class="btn" href="/sobre">About us</a>
  </div>
</section>

<style>
  .intro{
    min-height: 360px;
    background-size: cover;
    background-position: center;
    display: grid;
    align-content: center;
    justify-content: start;
    position: relative;
  }
  .intro::after {
    content:'';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.55);
  }
  .intro__wrapper {
    z-index: 1;
    max-width: 450px;
  }
  .btn{
    margin-top: 24px;

  }
  p{
    font-size: calc(18 / 16 * 1rem);
    margin-top: 16px;
  }
  img {
    display: inline;
    max-width: 36px;
  }
</style>