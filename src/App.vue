<template>
  <div id="app">

    <!-- Modern Top Navbar -->
    <header class="navbar" v-if="showNavbar">
      <div class="nav-left">
        <img alt="Logo" src="@/assets/box-logo.png" class="logo" />
        <span class="brand">Tianyi</span>
      </div>

      <nav class="nav-center">
        <router-link to="/home">Introduction</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/activities">Activities & Interests</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
      </nav>

    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© Created by Tianyi @ 2025.</p>
    </footer>
  </div>
  
  <div
    v-if="showNavbar"
    class="contact-floating"
    :class="{ open: contactOpen }"
    @mouseleave="contactOpen = false"
  >
    <div id="contact-toggle-button" class="contact-btn" @click="toggleContact">
      <i class="fa-solid fa-plus"></i>
    </div>

    <div class="contact-icons">

      <!-- Email -->
      <a href="mailto:tianyixie@u.nus.edu">
        <i class="fa-solid fa-envelope"></i>
      </a>

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/tianyi-xie-919a02272" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <!-- WhatsApp -->
      <a
        href="https://wa.me/6591327836"
        target="_blank"
        aria-label="WhatsApp: +65 9132 7836"
        title="+65 9132 7836"
      >
        <i class="fa-brands fa-whatsapp"></i>
      </a>

      <!-- GitHub -->
      <a href="https://github.com/ilovesvtnct" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>

      <!-- TikTok -->
      <a href="https://www.tiktok.com/@tianyixiety" target="_blank">
        <i class="fa-brands fa-tiktok"></i>
      </a>

      <!-- YouTube -->
      <a href="https://youtube.com/@nottytrack" target="_blank">
        <i class="fa-brands fa-youtube"></i>
      </a>

    </div>
  </div>

</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      contactOpen: false,
    };
  },

  computed: {
    showNavbar() {
      // hide navbar ONLY on intro screen
      return this.$route.path !== "/intro";
    }
  },

  methods: {
    toggleContact() {
      this.contactOpen = !this.contactOpen;
    }
  }
};
</script>

<style>
/* NAVBAR — Modern & Clean */
.navbar {
  position: sticky;
  top: 0;
  padding-top: 0;
  z-index: 20;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.8rem 2rem;
  background: #FFF8EB;
  backdrop-filter: blur(10px);

  border-radius: 0 0 12px 12px;
  box-shadow: 0 2px 10px #6D4624;

  margin: 0;
}

/* Logo + Title */
.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 45px;
  height: auto;
}

.brand {
  font-size: 1.3rem;
  font-weight: 700;
  color: #6D4624;
  font-family: "Poppins", sans-serif;
}

/* Navigation Links */
/* NAVBAR LAYOUT */
.navbar {
  position: sticky;
  top: 0;
  z-index: 20;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.8rem 2rem;
  background: #FFF8EB;
  backdrop-filter: blur(10px);

  border-radius: 0 0 12px 12px;
  box-shadow: 0 2px 10px #6D4624;

  margin: 0;
}

/* LEFT SECTION */
.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto; /* keep logo/title left */
}

.logo {
  width: 38px;
  height: 38px;
  object-fit: contain;
  display: block;
  margin: 0;
}

.brand {
  font-size: 1.3rem;
  font-weight: 700;
  color: #6D4624;
  font-family: "Poppins", sans-serif;
  line-height: 1.1;
}

/* CENTER NAVIGATION */
.nav-center {
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.nav-center a {
  color: #6d4624; /* brown base */
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: 0.2s ease;
  padding-bottom: 4px;
}

/* Active tab */
.nav-center a.router-link-exact-active {
  border-bottom: 3px solid #abb591;
  color: #abb591; /* green on active */
}

/* Hover */
.nav-center a:hover {
  color: #abb591; /* green on hover */
}

/* RIGHT SECTION (contact icons) */
.nav-right {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 0 0 auto;
  justify-content: flex-end;
}

.icon-btn {
  font-size: 1.2rem;
  color: #6D4624;
  text-decoration: none;
  transition: 0.2s ease;
}

.icon-btn:hover {
  color: #bf874a;
}

main {
  margin-top: 0;
  min-height: 60vh;
  margin: 3rem 0;
}

footer {
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  color: #ABB591;
}

/* Custom cursor */
body {
  margin-top: 0!important;
  padding: 0;
  cursor: url('/ui/cursor-1.png'), auto;
}

/* Floating container */
.contact-floating {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 60px;
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 12px;
  z-index: 9999;
}

/* Main button */
.contact-btn {
  width: 60px;
  height: 60px;
  background: #fff;
  border: 2px solid #6D4624;
  color: #6D4624;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  cursor: pointer;

  transition: 0.3s ease;
}

.contact-btn:hover {
  background: #F5E8D0;
}

/* Icons container (hidden until hover) */
.contact-icons {
  display: flex;
  flex-direction: column;
  gap: 12px;

  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  transition: 0.35s ease;
}

/* Hover on the whole container reveals icons */
.contact-floating:hover .contact-icons,
.contact-floating.open .contact-icons {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

/* Individual icon bubble */
.contact-icons a {
  width: 42px;
  height: 42px;
  background: #fff;
  border: 2px solid #6D4624;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  color: #6D4624;
  text-decoration: none;

  transition: 0.25s ease;
}

/* Hover effect */
.contact-icons a:hover {
  background: #F5E8D0;
  color: #bf874a;
  transform: scale(1.12);
}
</style>
