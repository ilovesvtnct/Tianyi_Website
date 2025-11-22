<template>
  <div class="activities-page">

    <!-- YOUTUBE SECTION -->
    <section class="youtube-section">
      <h2 class="section-title">YouTube Videos</h2>
      <div class="video-grid">
        <iframe
          v-for="video in youtubeVideos"
          :key="video"
          width="320"
          height="180"
          :src="`https://www.youtube.com/embed/${video}`"
          frameborder="0"
        
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- ACTIVITIES SECTION -->
    <section class="activities-section">
      <h2 class="section-title">Activities & Interests</h2>

      <p class="subheader">Dancing & Performances</p>

      <div class="gallery">
        <img src="/media/activities/IMG_2.JPG" alt="Activity 1" width="300" />
        <img src="/media/activities/IMG_3.JPG" alt="Activity 2" width="300" />
        <img src="/media/activities/IMG_4.JPEG" alt="Activity 3" width="300" />
        <img src="/media/activities/IMG_5.jpg" alt="Activity 4" width="300" />
        <img src="/media/activities/IMG_6.JPEG" alt="Activity 5" width="300" />
        <img src="/media/activities/IMG_7.JPEG" alt="Activity 6" width="300" />
      </div>

      <p class="subheader">Running & Fitness</p>

      <div class="gallery run-gallery">
        <iframe
          class="tiktok-frame"
          src="https://www.tiktok.com/embed/v2/7551832959968398600"
          width="320"
          height="400"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div class="placeholder-card">
          <h3 class="placeholder-title">Singapore Marathon 2025</h3>
          <div class="placeholder-img">
            <span>Race photo coming soon</span>
          </div>
        </div>
        <div class="placeholder-card">
          <h3 class="placeholder-title">Surfing</h3>
            <img
              class="activity-photo"
              src="/media/activities/Surfing.png"
              alt="Surfing"
              width="320"
              height="200"
          />
        </div>
        <div class="placeholder-card crossfit-card">
          <h3 class="placeholder-title">CrossFit Training</h3>
            <img
              class="activity-photo"
              src="/media/activities/CrossFit.png"
              alt="CrossFit"
              width="320"
              height="200"
          />
        </div>
        <div class="placeholder-card bouldering-card">
          <h3 class="placeholder-title">Bouldering</h3>
            <img
              class="activity-photo"
              src="/media/activities/Bouldering.png"
              alt="Bouldering"
              width="320"
              height="200"
          />
        </div>
      </div>
    </section>
  
    <!-- YOUTUBE SECTION -->
    <section class="volunteer-section">
      <h2 class="section-title">Volunteerism</h2>

      <div class="placeholder-card volunteer-card">
        <h3 class="placeholder-title">Silver Generation Amassador</h3>
        <div class="volunteer-gallery">
            <img
              class="activity-photo"
              src="/media/activities/SGA_1.png"
              alt="Silver Generation Amassador"
              width="320"
              height="200"
            />
            <img
              class="activity-photo"
              src="/media/activities/SGA_2.png"
              alt="Silver Generation Amassador"
              width="320"
              height="200"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Activities",
  data() {
    return {
      youtubeVideos: [
        "bY8vhQlPla8",
        "QseF1CRv8T4",
        "-_WjAwaK6rE",
        "wIUYajV3Cqs",
        "BdArzpZ9K_I",
      ],
    };
  },
};
</script>

<style scoped>
.activities-page {
  padding: 2rem;
  background: #fff8eb;
  color: #6d4624;
}

.section-title {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #a36633; /* matches Experience headings */
  margin: 0 0 1.6rem;
  letter-spacing: 0.02em;
  display: inline-block;
  position: relative;
}

.section-title::after {
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

.subheader {
  font-weight: 700;
  margin: 1.2rem 0 0.6rem;
  color: #6d4624;
  font-size: 1.3rem;
  font-family: "Montserrat", sans-serif;
}

/* Title spacing */
section {
  margin-bottom: 3rem;
}

.video-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.youtube-section iframe {
  border-radius: 5px;
  overflow: hidden;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-start;
}

.run-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, max-content));
  grid-auto-flow: dense;
  align-items: start;
  justify-items: start;
  justify-content: flex-start;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
}

.crossfit-card {
  grid-column: 2;
  grid-row: 2;
}

.placeholder-card {
  width: 320px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  font-family: "Montserrat", sans-serif;
}

.placeholder-title {
  font-size: 1rem;
  font-weight: 700;
  color: #6d4624;
  margin: 0;
}

.placeholder-img {
  height: 200px;
  border-radius: 5px;
  background: linear-gradient(135deg, #f6e5c7, #e2c18f);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6d4624;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.activity-photo {
  width: 320px;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.tiktok-frame {
  border: none;
  border-radius: 5px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  width: 320px;
  max-width: 320px;
  height: 300px;
}

.gallery img {
  width: 320px;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

.volunteer-card {
  width: 100%;
  max-width: 100%;
}

.volunteer-gallery {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: flex-start;
}

@media (max-width: 960px) {
  .crossfit-card {
    grid-column: auto;
    grid-row: auto;
    margin-top: 0;
  }
}
</style>

  
