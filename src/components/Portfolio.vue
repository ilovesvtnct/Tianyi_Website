<template>
  <section class="portfolio-section">
    <h2 class="section-title">Portfolio</h2>

    <!-- Carousel Wrapper -->
    <div class="carousel">

      <!-- Left Button -->
      <button class="nav-btn left" @click="prevSlide">◂</button>

      <!-- Slide Container -->
      <div class="carousel-window">
        <div class="carousel-track" :style="trackStyle">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="slide"
          >
            <!-- Scrollable image panel -->
            <div class="scroll-panel">
              <img 
                v-for="(img, i) in item.images" 
                :key="i"
                :src="img"
                alt=""
              />
            </div>
            <p class="caption">{{ item.title }}</p>
          </div>
        s</div>

      </div>

      <!-- Right Button -->
      <button class="nav-btn right" @click="nextSlide">▸</button>
    </div>

    <!-- Small Dots -->
    <div class="dots">
      <span
        v-for="(item, index) in items"
        :key="index"
        class="dot"
        :class="{ active: index === current }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",

  data() {
    return {
      current: 0,
      items: [
        {
          title: "TY Brand Style Guide",
          images: [
            "/media/portfolio/brands/Brand_4.png",
            "/media/portfolio/brands/Brand_1.png",
            "/media/portfolio/brands/Brand_2.png",
            "/media/portfolio/brands/Brand_3.png"
          ]
        },
        {
          title: "Healthcare Assessment Web Application",
          images: [
            "/media/portfolio/pecset/PECSET_1.png",
            "/media/portfolio/pecset/PECSET_3.png",
            "/media/portfolio/pecset/PECSET_4.png",
            "/media/portfolio/pecset/PECSET_5.png"
          ]
        },
        {
          title: "VOLUNTRAC Volunteering Tracking System",
          images: [
            "/media/portfolio/volunteer/Volunteer_6.png",
            "/media/portfolio/volunteer/Volunteer_1.png",
            "/media/portfolio/volunteer/Volunteer_2.png",
            "/media/portfolio/volunteer/Volunteer_3.png",
            "/media/portfolio/volunteer/Volunteer_4.png",
            "/media/portfolio/volunteer/Volunteer_5.png",
          ]
        },
        {
          title: "K-Pop Ablum Evolution Poster",
          images: [
            "/media/portfolio/posters/Poster_1.png"
          ]
        },
      ],

    };
  },

  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.current * 100}%)`,
      };
    },
  },

  methods: {
    nextSlide() {
      this.current = (this.current + 1) % this.items.length;
    },
    prevSlide() {
      this.current =
        this.current === 0 ? this.items.length - 1 : this.current - 1;
    },
    goToSlide(i) {
      this.current = i;
    },
  },
};
</script>

<style scoped>
.portfolio-section {
  padding: 3rem 2rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  background: #fff8eb;
}

.section-title {
  font-family: "Montserrat", sans-serif;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #a36633;
  letter-spacing: 0.02em;
  font-weight: 700;
  display: inline-block;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.5rem;
  width: 65%;
  height: 6px;
  background: linear-gradient(90deg, #c08a42, #e7c89a);
  border-radius: 999px;
  opacity: 0.95;
}

/* --- CAROUSEL --- */
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.carousel-window {
  width: 750px;     /* adjust width */
  overflow: hidden;
  border-radius: 12px;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
}

.slide {
  min-width: 100%;
}

.slide img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.caption {
  margin-top: 0.6rem;
  font-weight: 600;
  color: #6d4624;
}

/* Buttons */
.nav-btn {
  border: none;
  background: #fff1dc;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.3rem;
  color: #6d4624;
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
  transition: 0.2s;
}

.nav-btn:hover {
  background: #efdcc0;
  transform: scale(1.05);
}

/* Dots */
.dots {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  background: #d8c9b2;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}

.dot.active {
  background: #a36633;
  width: 22px;
  border-radius: 6px;
}

.scroll-panel {
  height: 420px;                /* visible area height */
  overflow-y: auto;             /* vertical scroll only */
  overflow-x: hidden;
  border-radius: 12px;
  padding-right: 6px;
  scroll-behavior: smooth;
}

.scroll-panel img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 12px;
  object-fit: contain;
  background: #f3f3f3;
}
</style>

  
