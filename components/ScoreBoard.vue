<template>
  <div class="score-board">
    <!-- Header -->
    <div class="header">
      <div class="rank">อันดับ</div>
      <div class="name">ยูสเซอร์</div>
      <div class="reward">รางวัล</div>
      <div class="points">คะแนน</div>
    </div>

    <!-- Score Table -->
    <div class="score-table" :class="{ fold: !showAll }">
      <div v-for="(item, index) in displayedScores" 
           :key="index" 
           :index="index"
           :data-rank="item.rank"
           class="row">
        <div class="rank">
          <span>{{ item.rank }}</span>
        </div>
        <div class="avatar">
          <img :src="'/images/avatar/' + item.avatar + '.jpg'" alt="">
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="reward" :class="{ first: index === 0 }">
          <span>{{ item.reward }}</span>
        </div>
        <div class="points">
          <div>{{ formatNumber(item.points) }}</div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="row table-foot" v-if="hasMoreScores">
        <div class="error">
          <a href="#" class="button compact" @click.prevent="loadMore">แสดงผลเพิ่ม</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showAll = ref(false)
const initialDisplayCount = 10

const scores = ref([
  { rank: 1, avatar: '3', name: 'banp***', reward: '200,000.-', points: 3794585 },
  { rank: 2, avatar: '0', name: 'boy0***', reward: '100,000.-', points: 2885087 },
  { rank: 3, avatar: '9', name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 4, avatar: '9', name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 5, avatar: '9', name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 6, avatar: '9', name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 7, avatar: '9', name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 8, avatar: '9', name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 9, avatar: '9', name: 'akap***', reward: '50,000.-', points: 2526131 },
  { rank: 10, avatar: '9', name: 'akap***', reward: '50,000.-', points: 2526131 },
  // Add more scores as needed
])

const displayedScores = computed(() => {
  return showAll.value ? scores.value : scores.value.slice(0, initialDisplayCount)
})

const hasMoreScores = computed(() => {
  return !showAll.value && scores.value.length > initialDisplayCount
})

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const loadMore = () => {
  showAll.value = true
}
</script>

<style scoped>
.score-board {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  margin: 20px 0;
  max-width: 100%;
}

.header {
  display: grid;
  grid-template-columns: 60px 1fr 100px 100px;
  padding: 15px 20px;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.score-table {
  max-height: 500px;
  overflow-y: auto;
  transition: max-height 0.5s ease-in-out;
}

.score-table.fold {
  max-height: 500px;
}

.row {
  display: grid;
  grid-template-columns: 60px 40px 1fr 100px 100px;
  padding: 10px 20px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.row:hover {
  background: rgba(255, 255, 255, 0.05);
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

.button.compact {
  padding: 8px 12px;
  border-radius: 7px;
  font-weight: 500;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  color: #4f65e5;
  font-size: 12px;
  text-decoration: none;
  display: inline-block;
}

.table-foot {
  justify-content: center;
  padding: 20px;
}
</style>
