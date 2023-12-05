<script>
  import crossfit from '$lib/assets/crossfit.jpg'
</script>

<footer class="footer">
  <div class="footer__wrapper wrap">
    <div class="footer__img">
      <img src="{crossfit}" alt="">
    </div>
    <div class="footer__info">
      <h2>Come get your<br> first free workout</h2>
      <p>Get in touch via WhatsApp or email and speak to a specialist team coach</p>
      <div class="footer__btns">
        <a class="btn" href="https://api.whatsapp.com/send?phone=5513991578990">WhatsApp</a>
        <a class="btn" href="mailto:teste@teste.com.br">E-mail</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    margin-top: 90px;
  }
  .footer__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
  }
  .footer__img {
    position: relative;
  }
  .footer__img::after{
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--overlay);
  }
  img {
    border-radius: 16px;
  }
  p {
    margin-top: 16px;
    max-width: 360px;
  }
  h2 {
    font-size: calc(36 /16 * 1rem);
  }
  .footer__btns {
    margin-top: 24px;
    display: flex;
    gap: 8px; 
  }

</style>