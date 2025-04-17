<template>
  <section id="tournament_score">
    <div class="bg">
      <div class="obj base"></div>
      <div class="obj main"></div>
      <div class="obj overlay"></div>
    </div>
    <div class="content">
      <div>
        <h2 class="title">
          TOURNAMENT <br>
          ประจำเดือนมีนาคม
        </h2>
        <p class="subtext text-white">
          ลำดับคะแนนทัวร์นาเมนท์ เดือน
           มีนาคม 
          แจก 500,000.  รับเงินสดเข้าบัญชี ถอนได้ทันที
           ไม่มีเงื่อนไข 
          อ่านรายละเอียด
        </p>
        <div class="due-date">
          สิ้นสุดการแข่งขันในอีก
          <strong class="value">12 วัน 23:33:04</strong>
        </div>
        <div class="score-board">
    <!-- Header -->
    <div class="header">
      <div class="rank">อันดับ</div>
      <div class="name">ยูสเซอร์</div>
      <div class="reward">รางวัล</div>
      <div class="points">คะแนน</div>
    </div>

    <!-- Score Table -->
    <div class="score-table" :class="{ 'fold': !showAll }" ref="scoreTableRef">
      <div v-for="score in displayedScores" :key="score.rank" class="row">
        <div class="rank">
          <span>{{ score.rank }}</span>
        </div>
        <div class="avatar">
          <img :src="`/images/Scoreboard/avatar/${score.avatar}.jpg`" :alt="score.name" loading="lazy">
        </div>
        <div class="name">{{ score.name }}</div>
        <div class="reward" :class="{ 'first': score.rank === 1 }">
          <span>{{ score.reward }}</span>
        </div>
        <div class="points">{{ score.points.toLocaleString() }}</div>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="load-more" @click="toggleShowAll">
      <span v-if="!showAll">ดูเพิ่มเติม</span>
      <span v-else>แสดงน้อยลง</span>
    </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

const showAll = ref(false)
const initialDisplayCount = 10
const loadMoreCount = 20
const scoreTableRef = ref(null)

const avatarImages = ['0', '3', '9'] // Available avatar images

const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * avatarImages.length)
  return avatarImages[randomIndex]
}

const scores = ref([
  { rank: 1, avatar: getRandomAvatar(), name: 'banp***', reward: '200,000.-', points: 3794585 },
  { rank: 2, avatar: getRandomAvatar(), name: 'boy0***', reward: '100,000.-', points: 2885087 },
  { rank: 3, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 4, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 5, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 6, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 7, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 8, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 9, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 10, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 11, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 12, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 13, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 14, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 15, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 16, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 17, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 18, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 19, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 20, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 21, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 22, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 23, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 24, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 25, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 26, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 27, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 28, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 29, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 30, avatar: getRandomAvatar(), name: 'akap***', reward: '50,000.-', points: 2526131 },
])

const displayedScores = computed(() => {
  return showAll.value ? scores.value.slice(0, initialDisplayCount + loadMoreCount) : scores.value.slice(0, initialDisplayCount)
})

const toggleShowAll = () => {
  const rows = scoreTableRef.value?.querySelectorAll('.row')
  const scoreBoard = document.querySelector('#tournament_score')
  if (!rows || !scoreBoard) return

  if (!showAll.value) {
    // Show more
    showAll.value = true
    gsap.fromTo(rows, 
      { opacity: 0, y: 15 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.3,
        stagger: 0.02,
        ease: 'power2.out'
      }
    )
  } else {
    // Show less
    const hiddenRows = Array.from(rows).slice(initialDisplayCount)
    const tl = gsap.timeline({
      onComplete: () => {
        showAll.value = false
      }
    })

    // Start scrolling to top with offset for header
    const offset = 80 // Header height
    const top = scoreBoard.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })

    tl.to(hiddenRows, {
      opacity: 0,
      y: -8,
      duration: 0.15,
      stagger: {
        each: 0.015,
        from: 'end'
      },
      ease: 'power1.in'
    })
    .to(hiddenRows, {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
      duration: 0.25,
      stagger: {
        each: 0.015,
        from: 'end'
      },
      ease: 'power1.inOut'
    }, '-=0.1')
  }
}


</script>

<style scoped>
/* Tournament Score Section */
#tournament_score {
  position: relative;
  isolation: isolate;
  max-width: 420px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 20px 0;
  max-width: 100vw;
}

#tournament_score .bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
}

#tournament_score .bg > * {
  pointer-events: none;
}

#tournament_score .bg .score-table {
  position: relative;
  margin-top: 30px;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
}

#tournament_score .bg .content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  #tournament_score .bg .content {
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  #tournament_score .bg .content {
    padding: 0 10px;
  }
}

#tournament_score .bg .main {
  position: absolute;
  width: 145px;
  height: 165px;
  top: 55px;
  right: 0;
  background: transparent url('/images/Scoreboard/tournament-bg.webp') no-repeat 100% 0;
  background-size: contain;
  z-index: -1;
}

@media (max-width: 768px) {
  #tournament_score .bg .main {
    width: 120px;
    height: 140px;
    right: 0;
  }
}

@media (max-width: 480px) {
  #tournament_score .bg .main {
    width: 90px;
    height: 110px;
    right: 0;
  }
}

#tournament_score .bg .base {
  position: relative;
  display: flex;
  align-items: center;
  height: 400px;
  top: 20px;
  right: 0;
  background: transparent url('/images/Scoreboard/tm-02.webp') no-repeat 100% 0;
  background-size: contain;
  z-index: -1;
  max-width: 100%;
}

@media (max-width: 768px) {
  #tournament_score .bg .base {
    height: 300px;
    right: 0;
  }
}

@media (max-width: 480px) {
  #tournament_score .bg .base {
    height: 250px;
    right: 0;
  }
}

#tournament_score .bg .overlay {
  position: absolute;
  width: 100%;
  height: 450px;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent url('/images/Scoreboard/tm-01.webp') no-repeat top;
  background-size: contain;
  opacity: 0.8;
  z-index: 1000;
}

@media (max-width: 768px) {
  #tournament_score .bg .overlay {
    height: 350px;
  }
}

@media (max-width: 480px) {
  #tournament_score .bg .overlay {
    height: 300px;
  }
}

#tournament_score .content {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

#tournament_score .content .title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 10px;
  text-align: left;
  color: #fff;
}

@media (max-width: 768px) {
  .title {
    font-size: 24px;
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 20px;
    margin-bottom: 12px;
  }
  .title br {
    display: none;
  }
}

#tournament_score .content .subtext {
  margin-right: 25px;
  margin-bottom: 5px;
  font-size: 13px;
  line-height: 1.4;
  font-weight: 300;
}

#tournament_score .content .subtext b {
  font-weight: 500;
}

#tournament_score .content .due-date {
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: 15px;
  font-weight: 300;
}

#tournament_score .content .due-date .value {
  font-weight: 500;
}



.score-board {
  margin-top: 10px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
}


.header {
  display: grid;
  grid-template-columns: 30px 30px 1fr 40px 90px;
  grid-template-areas: "rank rank name reward points";
  grid-gap: 10px;
  padding: 15px 20px 5px;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

.header .rank,
.header .name,
.header .reward,
.header .points {
  font-size: 13px;
  line-height: 1.2;
  align-self: center;
}

.header .rank { grid-area: rank; }
.header .name { grid-area: name; }
.header .points { 
  grid-area: points; 
  text-align: right;
}

.score-table {
  overflow: hidden;
  position: relative;
  max-height: 2000px;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.row {
  padding: 15px 20px;
  display: grid;
  grid-template-columns: 30px 30px 1fr 40px 90px;
  grid-template-areas: "rank avatar name reward points";
  grid-gap: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: brightness(110%) blur(20px);
  position: relative;
  min-height: 55px;
}

.row:nth-child(-n+3) {
  margin-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.05);
}

.row:nth-child(-n+3) .rank > span:first-child {
  background-color: #ff8900;
}

.row:nth-child(4) {
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}

.row:nth-child(50) {
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.05);
}

.row .rank {
  grid-area: rank;
  position: relative;
  display: flex;
  align-items: center;
}

.row .rank > span:first-child {
  width: 22px;
  height: 22px;
  display: grid;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: background-color 0.3s ease;
}

.row .avatar {
  grid-area: avatar;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.row .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.row .name {
  grid-area: name;
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}

.row .points {
  grid-area: points;
  text-align: right;
  font-weight: 400;
}

.row .reward {
  grid-area: reward;
}

.row .reward span {
  font-size: 10px;
  padding: 3px 7px;
  background-color: #fff;
  border-radius: 6px;
  color: #5168e7;
  font-weight: 700;
}

.row .reward.first span {
  background-color: #ffba00;
  color: #000;
}

.score-table.fold {
  max-height: 550px;
}

.load-more {
  margin-top: 15px;
  text-align: center;
  cursor: pointer;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .load-more {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .load-more {
    padding: 12px;
  }
  .load-more span {
    font-size: 13px;
  }
}

.load-more:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.load-more:active {
  transform: translateY(0);
}

.load-more span {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
}

.load-more:hover span {
  color: rgba(255, 255, 255, 1);
}

.score-table.fold:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: transparent;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.score-table.fold:after {
  opacity: 1;
}

.row {
  padding: 15px 20px;
  display: grid;
  grid-template-columns: 30px 30px 1fr 80px 90px;
  grid-template-areas: "rank avatar name reward points";
  grid-gap: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: brightness(110%) blur(20px);
  position: relative;
  min-height: 55px;
  opacity: 1;
  transform: translateY(0);
  height: auto;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

@media (max-width: 768px) {
  .row {
    grid-template-columns: 25px 25px 1fr 60px 70px;
    padding: 12px 15px;
    grid-gap: 8px;
  }

  .row .avatar {
    width: 25px;
    height: 25px;
  }

  .row .rank > span:first-child {
    width: 20px;
    height: 20px;
    font-size: 11px;
  }

  .row .name {
    font-size: 13px;
  }

  .row .reward,
  .row .points {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .row {
    grid-template-columns: 25px 25px 1fr 50px 60px;
    padding: 10px;
    grid-gap: 6px;
  }

  .title {
    font-size: 24px;
    line-height: 1.3;
  }

  .subtext {
    font-size: 13px;
    line-height: 1.4;
  }

  .due-date {
    font-size: 12px;
  }
}

.row:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.rank {
  color: rgba(255, 255, 255, 0.5);
}

.avatar img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.name {
  color: #fff;
}

.reward {
  color: #ffc424;
}

.reward.first {
  color: #ff6b6b;
}

.points {
  text-align: right;
  color: #fff;
}


</style>
