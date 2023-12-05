<script>
  import imageHome from '../assets/musculacao.jpg'
</script>


<section class="intro" style="background-image: url({imageHome});">
  <div class="intro__wrapper wrap">
    <h1>Are you ready for the challenge?</h1>
    <p>The Local Gym is ready to help you achieve your goals.</p>
    <a href="/sobre">About us</a>
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
  }
</style>