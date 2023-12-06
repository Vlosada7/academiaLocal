<script>
  import Logo from "$lib/assets/logo.png"
  import { page } from '$app/stores'

  $: current = $page.route.id;
</script>

<header class="header">
  <div class="header__wrapper wrap">
    <a href="/" class="logo"><img src="{Logo}" alt="Local Gym Logo"></a>
    <nav>
      <ul>
        <li><a href='/' class:active={current === '/'}>Home</a></li>
        <li><a href='/aboutUs' class:active={current === '/aboutUs'}>About Us</a></li>
        <li><a href='/modalities' class:active={current === '/modalities' || current === '/modalities/[slug]'}>Modalities</a></li>
        <li><a class="btn header__btn" href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .header__btn {
    border-color: var(--feat);
  }

  .header__btn:hover{
    border-color: #fff;
  }

  .header__wrapper {
    display: flex;
    align-items: center;
    min-height: 120px;
  }

  .logo {
    max-width: 277px;
  }

  nav {
    margin-left: auto;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  a {
    color: white;
  }

  a:not(.btn):hover {
    text-decoration: underline;
  }
  a.active,
  a.active:hover {
    text-decoration: underline;
    text-decoration-color: var(--feat);
  }

  @media (max-width: 800px) {
    .header__wrapper {
      flex-direction: column;
      justify-content: center;
    }
    nav {
      margin-left: unset;
    }
  }
</style>