<template>
  <section class="px-5 md:px-0 mb-24">
    <div class="mx-auto featured-container">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" ref="gameGrid">
        <a v-for="game in featuredGames" 
           :key="game.id" 
           :href="game.buttonLink"
           class="game-card rounded-lg block">
          <div class="hover:scale-105 transition-transform duration-300">
            <div class="w-full overflow-hidden rounded-lg">
              <img :src="game.image" :alt="game.name" class="w-full object-cover" />
            </div>
            <h3 class="text-xl font-bold mb-2 text-white text-center">{{ game.name }}</h3>
          </div>
        </a>
      </div>
      <h2 class="text-3xl font-bold mb-4 text-white mt-8"> 🔥 5 เหตุผลที่ต้องเลือก สล็อตพีจีสีชมพู</h2>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-white">✅ 1. เว็บแท้ ลิขสิทธิ์จริง ได้ใบเซอร์ครบ</h3>
      <p>ถ้าคุณเคยเจอเว็บที่บอกว่า "เว็บตรง" แต่ไม่มีหลักฐาน อย่าเพิ่งเชื่อ!
 SLOTPG TO มี ใบรับรองจากองค์กรระดับโลก ที่ตรวจสอบได้ว่าเป็นเว็บที่เปิดให้บริการอย่างถูกต้อง เช่น:</p>
<ul class="list-disc text-white pl-6">
    <li>MGA: ควบคุมคุณภาพเกมออนไลน์ในยุโรป</li>
    <li>BMM Testlabs: ห้องแล็บตรวจสอบเกมจากอเมริกา</li>
    <li>Gambling Commission (UK): องค์กรควบคุมคาสิโนของรัฐบาลอังกฤษ</li>
</ul>
<h3 class="text-xl font-semibold mt-4 mb-2 text-white">✅ 2. สล็อต RTP สูงทุกเกม แตกง่ายตั้งแต่ไม้แรก</h3>
<p>เกมของเรา มีค่า RTP เฉลี่ย 96.9–98.5% สูงที่สุดในไทยตอนนี้
 RTP (Return to Player) คือ อัตราการคืนกำไรให้ผู้เล่น ยิ่งสูงเท่าไหร่ ยิ่งมีโอกาสแตกไวเท่านั้น
บางเกมที่ได้รับความนิยมสูง เช่น:</p>
<ul class="list-disc text-white pl-6">
    <li>Fortune Rabbit: RTP 97.75%</li>
    <li>Lucky Piggy: RTP 98.03%</li>
    <li>Treasures of Aztec: RTP 96.88%</li>
</ul>
<h3 class="text-xl font-semibold mb-2 text-white mt-4">✅ 3. โปรโมชั่นแบบแจกจริง ไม่ล็อกเงื่อนไข</h3>
<p>โบนัสเครดิตฟรีของเราคือ "แจกจริง" ไม่ใช่แค่ตัวเลขหลอกสายตา</p>
<ul class="list-none text-white">
    <li>✅ สมัครใหม่รับโบนัส 100%</li>
    <li>✅ ฝากแรกของวันรับเพิ่ม 20%</li>
    <li>✅ โปรฝาก 29 รับ 100 สำหรับทุนน้อย</li>
    <li>✅ ทุกยอดฝากรับเพิ่มอีก 10%</li>
    <li>✅ คืนยอดเสียสูงสุด 1,000 บาท / วัน</li>
    <li>✅ วงล้อรับเครดิตฟรีได้ทุกวัน หมุนฟรีไม่มีขั้นต่ำ</li>
</ul>
<p>ทุกโปรรับได้ง่าย ๆ แค่คลิก ไม่ต้องแชร์ ไม่ต้องทักแอดมิน</p>
<h3 class="text-xl font-semibold mt-4 mb-2 text-white">✅ 4. ระบบออโต้เต็มรูปแบบ ฝาก–ถอนเร็วใน 10 วินาที
</h3>
<p>PG TO ใช้ระบบ Auto Wallet เต็มรูปแบบ รองรับ:</p>
<ul class="list-disc text-white pl-6">
    <li>ธนาคารชั้นนำทุกเจ้า</li>
    <li>พร้อมเพย์ (เบอร์โทร 10 หลัก)</li>
    <li>TrueMoney Wallet</li>
</ul>
<p>ไม่มีขั้นต่ำในการฝากหรือถอน
  จะถอน 1 บาท หรือ 1 แสน เราก็จ่ายจริง ไม่มีการยื้อ ไม่มีค่าธรรมเนียม</p>


<h3 class="text-xl font-semibold mt-4 mb-2 text-white">✅ 5. รองรับทุกอุปกรณ์ ลื่นไหลไม่มีสะดุด</h3>
<p>เล่นได้ทั้งมือถือ, แท็บเล็ต, คอมพิวเตอร์, หรือแม้แต่ Smart TV
  ระบบรองรับ iOS / Android / Windows / macOS ทุกเบราว์เซอร์</p>
<p>ไม่ต้องโหลดแอปให้เปลืองพื้นที่ แค่เข้าผ่านเว็บ PG SLOT TO แล้วล็อกอิน ก็เล่นได้ทันทีแบบลื่นหัวแตก
</p>

    </div>
    
    
  </section>
</template>

<script setup>
import { ref } from 'vue'

const featuredTitle = ref(null)
const gameGrid = ref(null)

const featuredGames = ref([
  {
    id: 1,
    name: 'ทุกยอดฝาก 10%',
    image: '/images/games/1.webp',
    buttonLink: '#'
  },
  {
    id: 2,
    name: 'ฝากแรก 20%',
    image: '/images/games/2.webp',
    buttonLink: '#'
  },
  {
    id: 3,
    name: 'ฝาก 80 รับ 240',
    image: '/images/games/3.webp',
    buttonLink: '#'
  },
  {
    id: 4,
    name: 'คืนยอดเสียสูง',
    image: '/images/games/4.webp',
    buttonLink: '#'
  },
  {
    id: 5,
    name: 'ฝาก 29 รับ 100',
    image: '/images/games/5.webp',
    buttonLink: '#'
  },
  {
    id: 6,
    name: 'สมาชิกใหม่ 100%',
    image: '/images/games/6.webp',
    buttonLink: '#'
  }
])
</script>

<style scoped>
.featured-container {
  max-width: 620px;
}


</style>
