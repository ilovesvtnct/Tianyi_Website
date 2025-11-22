<template>
  <div class="intro-screen">

  <!-- BOX stays visible even during explosion -->
  <div class="box-wrapper" @click="startExplosion">
    <img src="@/assets/box-logo.png" class="box" ref="boxImage" />
    <p v-if="!explode" class="click-hint">Click to open</p>
  </div>

    <!-- EXPLODING TY LETTERS -->
    <div v-if="explode" class="ty-explosion">
      <div
        v-for="(logo, index) in letters"
        :key="index"
        class="ty-letter"
        :style="logo.style"
      >
        <img :src="logo.src" alt="burst logo" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      explode: false,
      letters: [],
      interval: null,
      boxCenter: { x: 0, y: 0 }, // new
      logosPool: [
        "/media/logos/CRM.png",
        "/media/logos/Market.png",
        "/media/logos/Computer.png",
        "/media/logos/Pen.png",
        "/media/logos/Data.png"
      ]
    };
  },

  methods: {
    startExplosion() {
      this.explode = true;
      this.computeBoxCenter();
      this.generateLettersGradually();

      // Redirect a bit later so animation finishes
      setTimeout(() => {
        this.$router.push("/home");
      }, 3000);
    },

    computeBoxCenter() {
      // Find the on-screen position of your box image
      const box = this.$refs.boxImage;
      if (!box) return;

      const rect = box.getBoundingClientRect();
      this.boxCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * 0.35 // about the open top of the box
      };
    },

    generateLettersGradually() {
      // Kick off with one of each logo
      this.logosPool.forEach((logo, idx) => {
        this.letters.push(this.randomStyle(logo, idx * 0.08));
      });

      let count = this.logosPool.length;
      this.interval = setInterval(() => {
        if (count >= 90) {
          clearInterval(this.interval);
          return;
        }
        this.letters.push(this.randomStyle());
        count++;
      }, 20); // every 20ms, one new TY appears
    },

    randomStyle(forcedLogo = null, extraDelay = 0) {
      const angle = Math.random() * 360;
      const distance = 140 + Math.random() * 420; // push logos farther for more spacing
      const tx = Math.cos(angle * Math.PI / 180) * distance;
      const ty = Math.sin(angle * Math.PI / 180) * distance * -1;

      const randomDelay = extraDelay + Math.random() * 0.35;
      const randomScale = 0.8 + Math.random() * 0.9;
      const randomRotate = Math.random() * 180 - 90;
      const size = 28 + Math.random() * 18; // larger logos while keeping burst readable
      const logo = forcedLogo || this.logosPool[Math.floor(Math.random() * this.logosPool.length)];

      return {
        src: logo,
        style: `
        --tx: ${tx}px;
        --ty: ${ty}px;
        --rot: ${randomRotate}deg;
        --logo-size: ${size}px;
        --start-scale: ${randomScale};
        left: ${this.boxCenter.x}px;
        top: ${this.boxCenter.y}px;
        animation-delay: ${randomDelay}s;
      `
      };
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
.intro-screen {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  margin: 0 !important;
  padding: 0 !important;
  background: #d0d7bc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 9999;
}

/* BOX */
.box-wrapper {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.box-wrapper:hover {
  transform: scale(1.05);
}

.box {
  width: 260px;
}

.click-hint {
  margin-top: 15px;
  font-size: 1.2rem;
  color: #b07239;
  animation: blink 1.4s infinite;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}

/* Explosion container */
.ty-explosion {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: visible;
  pointer-events: none;
}


/* Each TY letter */
.ty-letter {
  position: absolute;
  width: var(--logo-size, 40px);
  height: var(--logo-size, 40px);
  opacity: 0;
  animation: burst 2.5s forwards ease-out;
  pointer-events: none;
}

.ty-letter img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

@keyframes burst {
  0% {
    opacity: 0.8;
    transform: translate(0, 0) scale(var(--start-scale, 1));
  }
  80% {
    opacity: 1;
    transform: translate(var(--tx), var(--ty)) scale(calc(var(--start-scale, 1) * 2)) rotate(var(--rot));
  }
  100% {
    opacity: 0;
    transform: translate(var(--tx), var(--ty)) scale(calc(var(--start-scale, 1) * 2.8)) rotate(var(--rot));
  }
}

</style>
