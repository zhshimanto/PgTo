<template>
  <div class="pt-[72px] flex-grow">
    <section class="px-5 md:px-0 py-12 mb-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
          เครดิตฟรี
        </h1>
        
        <div class="max-w-3xl mx-auto bg-[#ff80b7]/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-white/10">
          <p class="text-white/90 text-lg md:text-xl text-center mb-8 leading-relaxed">
            รับเครดิตฟรีจาก PG SLOT VEGAS ง่ายๆ เพียงทำตามเงื่อนไขที่กำหนด สมัครสมาชิกวันนี้ รับโบนัสและเครดิตฟรีมากมาย พร้อมลุ้นรับรางวัลใหญ่
          </p>

          <div class="space-y-4">
            <div v-for="(item, index) in faqItems" :key="index" class="border border-white/20 rounded-lg overflow-hidden">
              <button 
                @click="toggleAccordion(index)"
                class="w-full px-6 py-4 flex justify-between items-center text-white hover:bg-white/10 transition-colors"
              >
                <span class="text-lg font-medium">{{ item.question }}</span>
                <svg 
                  class="w-6 h-6 transition-transform duration-300"
                  :class="{ 'rotate-180': activeIndex === index }"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                v-show="activeIndex === index"
                class="px-6 py-4 bg-black/20"
              >
                <p class="text-white/90 leading-relaxed" v-html="item.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqItems = [
  {
    question: 'วิธีรับเครดิตฟรี',
    answer: 'สมัครสมาชิกใหม่วันนี้ รับเครดิตฟรีทันที 100 บาท เพียงทำตามขั้นตอนง่ายๆ:<br>1. สมัครสมาชิกผ่านหน้าเว็บไซต์<br>2. ยืนยันเบอร์โทรศัพท์<br>3. ทำการฝากเงินขั้นต่ำ 100 บาท<br>4. รับเครดิตฟรีทันที'
  },
  {
    question: 'เงื่อนไขการรับเครดิตฟรี',
    answer: '• สำหรับสมาชิกใหม่เท่านั้น<br>• จำกัด 1 สิทธิ์ต่อ 1 เบอร์โทรศัพท์<br>• ต้องทำเทิร์นโอเวอร์ 3 เท่าก่อนถอน<br>• โปรโมชั่นนี้ไม่สามารถใช้ร่วมกับโปรโมชั่นอื่นได้'
  },
  {
    question: 'ระยะเวลาโปรโมชั่น',
    answer: 'โปรโมชั่นเครดิตฟรีนี้มีระยะเวลาตั้งแต่วันที่ 1 - 30 เมษายน 2025 เท่านั้น รีบสมัครและรับสิทธิ์ก่อนหมดเขต!'
  },
  {
    question: 'วิธีเช็คเครดิตฟรี',
    answer: '1. เข้าสู่ระบบที่เว็บไซต์ PG SLOT VEGAS<br>2. ไปที่หน้า "โปรไฟล์"<br>3. ดูที่ยอดเครดิตคงเหลือ<br>4. หากมีข้อสงสัย สามารถติดต่อเจ้าหน้าที่ได้ตลอด 24 ชม.'
  },
  {
    question: 'เกมที่ร่วมรายการ',
    answer: 'สามารถใช้เครดิตฟรีได้กับเกมที่ร่วมรายการดังนี้:<br>• Fortune Ox<br>• Candy Bonanza<br>• Treasures of Aztec<br>• Lucky Neko<br>และเกมอื่นๆ อีกมากมาย'
  }
]

useHead({
  title: 'Free Credit - PG SLOT VEGAS',
  meta: [
    { name: 'description', content: 'รับเครดิตฟรีจาก PG SLOT VEGAS สมัครสมาชิกใหม่วันนี้ รับโบนัส 100 บาท พร้อมโปรโมชั่นพิเศษมากมาย' },
    { name: 'keywords', content: 'Free Credit PG SLOT VEGAS, slot credit free, bonus slot, pg slot free credit' },
    { property: 'og:title', content: 'Free Credit - PG SLOT VEGAS' },
    { property: 'og:description', content: 'รับเครดิตฟรีจาก PG SLOT VEGAS สมัครสมาชิกใหม่วันนี้ รับโบนัส 100 บาท พร้อมโปรโมชั่นพิเศษมากมาย' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pg-vegas.com/free-credit' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Free Credit - PG SLOT VEGAS' },
    { name: 'twitter:description', content: 'Free Credit from PG SLOT VEGAS สมัครสมาชิกใหม่วันนี้ รับโบนัส 100 บาท พร้อมโปรโมชั่นพิเศษมากมาย' }
  ]
})
</script>
