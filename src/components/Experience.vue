<template>
  <div class="experience-page">

    <!-- LEFT CATEGORY LIST -->
    <div class="sidebar">
      <div 
        v-for="section in sections" 
        :key="section.name"
        class="sidebar-item"
        :class="{ active: activeSection === section.name }"
        @click="toggleSection(section.name)"
      >
        {{ section.name }}
      </div>
    </div>

    <!-- RIGHT CONTENT PANEL -->
    <div class="content">

      <transition name="fade">
        <div v-if="activeSection" class="section-block">

          <!-- Loop items inside selected section -->
          <div 
            v-for="(item, index) in selectedItems" 
            :key="item.title" 
            class="entry"
          >

            <!-- Clickable header -->
            <div 
              class="entry-header"
              @click="toggleItem(index)"
            >
              <div>
                <div class="date">{{ item.date }}</div>
                <div class="title-text">{{ item.title }}</div>
                <div class="place" v-html="item.place"></div>
                <div class="project-images" v-if="item.images"><img v-for="(img, i) in item.images" :key="i":src="img" alt="Project Screenshot" @click.stop="enlargeImage(img)" /></div>
              </div>

              <!-- Rotating arrow -->
              <span class="arrow" :class="{ rotate: openItems.includes(index) }">▲</span>
            </div>

            <!-- EXPANDABLE DETAILS -->
            <transition name="expand">
              <div v-if="openItems.includes(index)" class="entry-details">

              <!-- SUB-HEADER -->
              <p v-if="item.subheader" class="subheader">{{ item.subheader }}</p>

              <!-- BULLET LIST -->
              <ul class="description-list">
                <li v-for="point in item.bullets" v-html="point"></li>
              </ul>
            </div>
            </transition>


          </div>

        </div>
      </transition>

    </div>

<!-- IMAGE MODAL -->
<div v-if="showImageModal" class="image-modal" @click="closeImage">
  <img :src="activeImage" class="modal-image" />
</div>

  </div>
</template>

<script>
export default {
  name: "Experience",

  data() {
    return {
      activeSection: null,
      openItems: [], // expanded item index
      showImageModal: false,
      activeImage: null,

      sections: [
        {
          name: "Internships",
          items: [
            {
              date: "Aug 2025 – Mar 2026",
              title: "Customer Relationship Management • Digital Marketing Intern",
              place: "miHoYo / COGNOSPHERE PTE. LTD.",
              bullets: [
                "<b>Launched and optimised global CRM campaigns</b> across WhatsApp, Facebook Messenger, and SMS for Genshin Impact, Honkai: Star Rail and Zenless Zone Zero.",
                "Enhance <b>data dashboard visualisation</b> and assist with the automation of project data collection process.",
                "Supported the technical exploration of <b>webpage push notifications</b> to enhance CRM messaging capabilities.",
                "<b>Analysed IM channel performance and implemented A/B testing</b> to improve engagement and retention across key markets.",
              ]
            },

            {
              date: "Jun 2025 – Aug 2025",
              title: "Corp Comm-CSR • Public Relations Intern",
              place: "CapitaLand Development (Vietnam)",
              bullets: [
                "Supported <b>content creation for social media campaigns</b> across Facebook, LinkedIn, and Instagram.",
                "<b>Analysed social media performance data</b> to identify audience interests and <b>optimise content strategy</b>.",
                "<b>Assisted in planning and executing corporate events</b>, coordinating with internal and external stakeholders.",
              ]
            },
            {
              date: "Jan 2025 – Jun 2025",
              title: "Product Development Intern",
              place: "SingHealth Health Services Research Centre",
              bullets: [
                "<b>Developed a full-stack healthcare assessment web application</b> using Plotly Dash, Python.",
                "<b>Applying Agile and Design Thinking methodologies</b> to enhance user experience and functionality.",
                "<b>Conducted full user-cycle activities</b>, from requirement gathering to UAT with healthcare professionals.",
              ]
            },
          ]
        },

        {
          name: "Education",
          items: [
            {
              date: "Aug 2022 – May 2026",
              title: "Bachelor of Business Analytics (Hons)\nMinor in Communications and New Media",
              place: "National University of Singapore",
              bullets: ["Specialising in marketing analytcis"],
              subheader: "Relevant Courses:",
              bullets: [
                "CS2030 Programming Methodology II",
                "CS2040 Data Structures and Algorithms",
                "BT2101 Econometrics Modeling for Business Analytics",
                "BT2102 Data Management and Visualisation",
                "IS3107 Data Engineering",
                "BT3103 Application Systems Development for Business Analytics",
                "BT4211 Data-Driven Marketing",
                "BT4212 Search Engine Optimization and Analytics",
                "IS3150 Digital Media Marketing",
                "NM3217 Principles of Visual Communication Design"
              ]
            }
          ]
        },

        {
          name: "Projects",
          items: [
            {
              date: "Apr 2025",
              title: "Financial Stock Sentiment Analysis System",
              place: `<a href="https://github.com/ilovesvtnct/FinSum-Dashboard/", 
                      target="_blank",
                      class="project-link">
                      🐱 GitHub Repo
              </a>`,
              bullets: [
                "<b>Built an end-to-end ELT pipeline</b> to scrape, preprocess, and analyse Reddit and Yahoo Finance data for all S&P 500 tickers, generating daily sentiment, volatility, and mention-based signals.",
                "<b>Automated LLM-powered summarisation</b> (Ollama, deepseek-r1) to deliver concise, ticker-level market insights combining social sentiment and financial news.",
                "<b>Developed a BigQuery-backed Streamlit dashboard</b> that visualises sentiment trends and key indicators, enabling faster, data-driven investment decisions for retail users."
              ],
              images: ["/media/experience/finsum/FinSum_1.png", 
                      "/media/experience/finsum/FinSum_2.png",
                      "/media/experience/finsum/FinSum_3.png",
                      "/media/experience/finsum/FinSum_4.png",
                      "/media/experience/finsum/FinSum_5.png",
                      "/media/experience/finsum/FinSum_6.png"],
            },
            {
              date: "Oct 2024",
              title: "Volunteering Tracking System",
              place: `<a href="https://github.com/ilovesvtnct/VOLUNTRAC-Volunteering-System-Website/", 
                      target="_blank",
                      class="project-link">
                      🐱 GitHub Repo
              </a>`,
              bullets: [
                "<b>Designed and developed a full-stack volunteer management platform</b> using HTML, CSS, JavaScript, and Firebase for Social Support Agencies in Singapore.",
                "<b>Developed volunteer and admin workflows</b>, including task creation, sign-ups, attendance tracking, and user onboarding.",
                "<b>Implemented Firebase authentication and real-time data updates</b> for managing volunteer profiles and service hours efficiently."
              ],
              images: ["/media/portfolio/volunteer/Volunteer_6.png", 
                      "/media/portfolio/volunteer/Volunteer_1.png",
                      "/media/portfolio/volunteer/Volunteer_4.png",
                      "/media/portfolio/volunteer/Volunteer_3.png",
                      "/media/portfolio/volunteer/Volunteer_2.png",
                      "/media/portfolio/volunteer/Volunteer_5.png"],                                          
            },
            {
              date: "Nov 2025",
              title: "Analysis on Impact of Optimized Images on Google Search Ranking",
              place: `<a href="https://github.com/ilovesvtnct/https://github.com/ilovesvtnct/Impact-of-Optimized-Images-on-Google-Search-Ranking/", 
                      target="_blank",
                      class="project-link">
                      🐱 GitHub Repo
              </a>`,
              bullets: [
                "Designed and executed a <b>controlled SEO experiment</b> using a randomized block design to test whether adding keyword-rich alt text to images improves Google search visibility.",
                "Implemented and monitored <b>performance metrics</b> (CTR, dwell time, page views, bounce rate) over a 14-day period using Google Search Console and GA4.",
                "Analysed <b>treatment vs. control outcomes</b> using paired t-tests, concluding that image-alt-text optimisation showed positive directional trends but no statistically significant short-term effects."
              ],                                
            },
            {
              date: "Nov 2024",
              title: "CraftBeast Handmade Digital Marketing Project",              
              bullets: [
                "Led end-to-end digital marketing execution (SEO, SEM, Meta Ads), achieving 57.5% more clicks, 31.2% more impressions, and 19.5% growth in workshop bookings during the campaign.",
                "Optimised the brand’s website through structural improvements, new content (Our Story + Blog), and keyword-focused SEO updates, increasing organic visibility and relevance.",
                "Designed and launched multi-channel paid campaigns (Instagram Reels, Google Search & Display), reaching 9,910+ users and strengthening top-of-funnel awareness and user engagement."
              ],   
              images: ["/media/experience/craftbeast/CB_1.png", 
                      "/media/experience/craftbeast/CB_2.png",
                      "/media/experience/craftbeast/CB_3.png",
                      "/media/experience/craftbeast/CB_4.png",
                      "/media/experience/craftbeast/CB_5.png",
                      "/media/experience/craftbeast/CB_6.png"],   
            }
          ]
        }
      ]
    };
  },

    mounted() {
    // Automatically open the first section when the page loads
    this.activeSection = this.sections[0].name;
  },

  computed: {
    selectedItems() {
      const section = this.sections.find(s => s.name === this.activeSection);
      return section ? section.items : [];
    }
  },

  methods: {
    toggleSection(name) {
      this.activeSection = this.activeSection === name ? null : name;
      this.openItem = null; // reset item expansion
    },
    toggleItem(i) {
      if (this.openItems.includes(i)) {
        // collapse if already open
        this.openItems = this.openItems.filter(index => index !== i);
      } else {
        // expand if not open
        this.openItems.push(i);
      }
    },

    enlargeImage (img) {
      this.activeImage = img;
      this.showImageModal = true;
    },

    closeImage () {
      this.showImageModal = false;
      this.activeImage = null;
    }

  }
};

</script>

<style>
.project-link {
  color: #a36633;
  font-weight: 600;
  text-decoration: none;
}

.project-link:hover {
  color: #abb591;
  text-decoration: underline;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
.experience-page {
  display: flex;
  gap: 3rem;
  padding: 3rem;
  background: #fff8eb;
}

/* LEFT SIDE */
.sidebar {
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.sidebar-item {
  font-size: 2rem;
  cursor: pointer;
  transition: 0.2s;
  color: #a36633;
  transition: transform 0.25s ease, color 0.25s ease;
  position: relative;
  padding-bottom: 0.25rem;
}

.sidebar-item:hover {
  transform: scale(1.08);
  color: #abb591;            /* hover green */
}

.sidebar-item.active {
  color: #abb591;
  font-weight: 700;
}

.sidebar-item.active::after,
.sidebar-item:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 65%;
  height: 6px;
  background: linear-gradient(90deg, #abb591, #8da46f);
  border-radius: 999px;
  opacity: 0.95;
}

/* RIGHT SIDE CONTENT */
.content {
  flex: 1;
  color: #6d4624;
  font-family: 'Montserrat', sans-serif;
}

/* Item container */
.entry {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.15);
}

/* Clickable item header */
.entry-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.6rem 0;
  transition: transform 0.25s ease;
  font-weight: bold;
}

/* Hover enlarge */
.entry-header:hover .title-text {
  transform: scale(1.1);
  font-weight: bold;
}

.title-text {
  margin: 0.2rem 0;
  transition: transform 0.25s ease;
  font-weight: bold;
  white-space: pre-line;
}

.description-list {
  margin-left: 1.5rem;
  padding-left: 1rem;
  list-style-type: disc;
  color: #6d4624;
}

.description-list li {
  margin-bottom: 0.4rem;
  line-height: 1.6;
}

.subheader {
  font-weight: bold;
  margin: 0.4rem 0 0.2rem 0;
  color: #6d4624;
  font-size: 1.0rem;
}

.project-images {
  display: flex;
  gap: 1rem;
  margin: 0.8rem 0;
  flex-wrap: wrap; /* allows images to wrap to next line */
}

.project-images img {
  width: 260px;           /* Adjust size */
  height: 130px;  
  border-radius: 5px;    
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  object-fit: cover;
  width: calc(33% - 1rem);
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  animation: zoomIn 0.2s ease;
}

@keyframes zoomIn {
  from { transform: scale(0.85); opacity: 0 }
  to { transform: scale(1); opacity: 1 }
}


/* Arrow animation */
.arrow {
  transition: transform 0.3s ease;
}

.arrow.rotate {
  transform: rotate(180deg);
}

/* Expand animation */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.entry-details {
  padding-left: 1rem;
  margin-top: 0.6rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

::v-deep b {
  font-weight: 700 !important;
}

@media (max-width: 900px) {
  .experience-page {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.8rem 1.4rem 2.4rem;
  }

  .sidebar {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.9rem 1.2rem;
  }

  .sidebar-item {
    font-size: 1.25rem;
  }

  .sidebar-item.active::after,
  .sidebar-item:hover::after {
    height: 4px;
    width: 45%;
  }

  .content {
    width: 100%;
  }

  .entry {
    margin-bottom: 1rem;
  }

  .entry-header {
    gap: 0.6rem;
  }

  .date {
    font-size: 0.9rem;
  }

  .title-text {
    font-size: 1.05rem;
    line-height: 1.3;
  }

  .place {
    font-size: 0.95rem;
  }

  .description-list {
    margin-left: 1rem;
    padding-left: 0.4rem;
    font-size: 0.95rem;
  }

  .project-images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0.8rem;
  }

  .project-images img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
}

@media (max-width: 600px) {
  .experience-page {
    padding: 1.4rem 1rem 2rem;
  }

  .sidebar-item {
    font-size: 1.05rem;
    padding-bottom: 0.15rem;
  }

  .entry-header {
    align-items: flex-start;
  }

  .title-text {
    font-size: 1rem;
  }

  .place {
    font-size: 0.9rem;
  }

  .project-images {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .project-images img {
    height: 150px;
  }
}

</style>

  
