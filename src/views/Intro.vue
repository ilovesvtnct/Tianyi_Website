<template>
  <div class="home">

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-text">
        <h1>Hello, I am Tianyi!</h1>
        <h2>Business Analytics Undergraduate & Digital Creative</h2>
        <p>
          I’m a penultimate Business Analytics undergraduate with a Minor in Communications & New Media at the National University of Singapore. I explore both creative and technical fields, ranging from <strong>product development and data analytics to digital marketing, CRM, visual design, and content creation</strong>.
        </p>
        <p>
          As a curious and multidisciplinary learner, I enjoy being exposed to diverse environments and constantly seek opportunities to grow both personally and professionally.
        </p>

        <button class="cta" @click="openContactMenu">Contact me</button>

      </div>

      <div class="hero-image">
        <img src="@/assets/your-photo.png" alt="Tianyi" />
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section class="skills">
      <h2 class="section-title">My Skills</h2>

      <div class="skill">
        <span>Web Development</span>
        <div class="bar">
          <div class="fill" style="width: 70%"></div>
        </div>
      </div>

      <div class="skill">
        <span>Data Analytics</span>
        <div class="bar">
          <div class="fill" style="width: 75%"></div>
        </div>
      </div>

      <div class="skill">
        <span>CRM & Digital Marketing</span>
        <div class="bar">
          <div class="fill" style="width: 75%"></div>
        </div>
      </div>

      <div class="skill">
        <span>UI/UX Design</span>
        <div class="bar">
          <div class="fill" style="width: 60%"></div>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "Intro",

  methods: {
    openContactMenu() {
      // Click the floating plus icon to open the contact menu
      const btn = document.getElementById("contact-toggle-button");
      if (btn) btn.click();
    }
  }

};
</script>

<style scoped>
/* Entire page wrapper */
.home {
  width: 100%;
  padding: 0;
  color: #6d4624;
}

/* HERO SECTION */
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 6rem;
  background: #fff8eb;
}

.hero-text {
  max-width: 50%;
  font-family: 'Montserrat', sans-serif;
}

.hero-text h1 {
  font-size: 3rem;
  margin: 0;
  color: #6d4624;
;
}

.hero-text h2 {
  font-size: 2rem;
  margin: 0.5rem 0 1rem;
  color: #c08a42;
}

.hero-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 500px;
  margin-bottom: 1.5rem;
}

.hero-text strong {
  font-weight: 700;
}

.cta {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  border: none;
  background: #c08a42;
  color: white;
  cursor: pointer;
  transition: 0.25s;
}

.cta:hover {
  background: #9a6a35;
}

  .hero-image img {
  width: 340px;
  border-radius: 10px;
  object-fit: cover;
}

/* SKILLS SECTION */
.skills {
  padding: 4rem 6rem;
  background: #fff;
  font-family: 'Montserrat', sans-serif;
}

.skills .section-title {
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #a36633;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  position: relative;
}

.skills .section-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.45rem;
  width: 65%;
  height: 6px;
  background: linear-gradient(90deg, #c08a42, #e7c89a);
  border-radius: 999px;
  opacity: 0.95;
}

.skill {
  margin-bottom: 1.5rem;
}

.skill span {
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

.bar {
  width: 100%;
  height: 12px;
  background: #ddd;
  border-radius: 6px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: linear-gradient(90deg, #c08a42, #e1b56b);
  border-radius: 6px;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    padding: 2.2rem 1.2rem 2.8rem;
    gap: 1.25rem;
    background: #fff8eb;
  }

  .hero-text {
    max-width: 100%;
    width: 100%;
  }

  .hero-text h1 {
    font-size: clamp(1.8rem, 7vw, 2.4rem);
    line-height: 1.15;
  }

  .hero-text h2 {
    font-size: clamp(1.2rem, 5vw, 1.5rem);
    line-height: 1.3;
    margin-top: 0.2rem;
  }

  .hero-text p {
    font-size: 0.98rem;
    max-width: none;
    margin-bottom: 1rem;
  }

  .hero-image img {
    width: 85vw;
    max-width: 320px;
    max-height: 50vh;
    margin: 0 auto;
    object-fit: cover;
  }

  .skills {
    padding: 2.5rem 1.2rem 3rem;
  }

  .skills .section-title {
    font-size: 1.5rem;
  }

  .skill span {
    font-size: 0.95rem;
  }
}
</style>

  
