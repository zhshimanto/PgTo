<template>
  <div class="pt-[72px] flex-grow">
    <section class="px-5 md:px-0 py-12 mb-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="text-4xl md:text-3xl font-bold mb-8 text-center text-white">
          เครดิตฟรี แค่สมัครสมาชิก ยืนยันเบอร์ กดรับเองได้เลย ถอนได้จริง 100%
        </h1>
        <p class="text-white max-w-2xl mx-auto mb-8 text-center">
          อยากเริ่มเล่นสล็อตแต่ไม่อยากควักเงินก่อน? มาถูกที่แล้ว!<br />
          PGSLOT TO จัดโปร "สล็อตเครดิตฟรี" แจกให้สมาชิกใหม่แบบจุก ๆ<br />
          เพียงลงทะเบียน เสร็จ รับเครดิตฟรีทันที ไม่ต้องรอแอดมิน!
        </p>

        <div
          class="max-w-3xl mx-auto bg-[#ff80b7]/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-white/10 mb-12"
        >
          <div class="space-y-4">
            <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="border border-white/20 rounded-lg overflow-hidden"
            >
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
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div v-show="activeIndex === index" class="px-6 py-4 bg-black/20">
                <p
                  class="text-white/90 leading-relaxed"
                  v-html="item.answer"
                ></p>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-6xl">
          <div class="max-w-2xl mx-auto space-y-10 text-white">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold mb-4">
                🚀 วิธีรับเครดิตฟรีล่าสุดแบบ
              </h2>
              <ul class="list-disc text-white space-y-2 pl-5">
                <li>
                  สมัครสมาชิกผ่านเว็บตรง
                  <a href="/" class="underline font-semibold">PGSLOT1.TO</a>
                  ไม่ผ่านเอเยนต์
                </li>
                <li>ยืนยันเบอร์โทรด้วยรหัส OTP ระบบจะปลดล็อกสิทธิ์ให้ทันที</li>
                <li>
                  เข้าหน้า
                  <a
                    href="/promotions"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline font-semibold"
                  >
                    โปรโมชั่น
                  </a>
                  เลือกรับโปรที่ชอบ
                </li>
                <li>
                  ทำตามเงื่อนไข รับเครดิตฟรีล่าสุด กดรับเอง ง่ายในคลิกเดียว!
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl md:text-3xl font-bold mb-4">
                🎯 เงื่อนไขง่าย ๆ ในการรับเครดิตฟรี
              </h2>
              <ul class="list-disc pl-5 space-y-2">
                <li>ต้องเป็นสมาชิกใหม่เท่านั้น</li>
                <li>
                  กรอกข้อมูลส่วนตัวให้ครบ (ชื่อจริง, เบอร์, บัญชีธนาคาร/True
                  Wallet)
                </li>
                <li>ฝากเงินขั้นต่ำตามโปร เช่น ฝาก 29 รับ 100</li>
                <li>รับโบนัสทันทีผ่านระบบอัตโนมัติ ถอนได้จริงใน 1 นาที</li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl md:text-3xl font-bold mb-4">
                💥 จุดเด่นของการรับ เครดิตฟรี มีอะไรบ้าง?
              </h2>
              <ul class="list-disc pl-5 space-y-4">
                <li>
                  <strong>✅ อยู่ในเกมได้นานขึ้น:</strong> มีทุนสำรองเพิ่ม
                  โอกาสเข้าฟีเจอร์ใหญ่สูงขึ้น
                </li>
                <li>
                  <strong>✅ ลดความเสี่ยง:</strong> ทุนฟรีช่วยเซฟ
                  ไม่ต้องควักเงินเพิ่ม
                </li>
                <li>
                  <strong>✅ เพิ่มความสนุก:</strong> ทุนเยอะ กดหนัก
                  ลุ้นมันแบบเต็มแม็กซ์!
                </li>
              </ul>
              <p class="mt-2">
                ตัวอย่าง: ฝาก 300 ได้เพิ่ม 300 รวม 600 เล่นได้ยาวขึ้น 2 เท่า
              </p>
            </div>

            <div>
              <h2 class="text-2xl md:text-3xl font-bold mb-4">
                🔍 ประเภทของ “เครดิตฟรี” ที่คุณควรรู้
              </h2>
              <ul class="list-disc pl-5 space-y-2">
                <li>
                  <strong>🆕 เครดิตฟรีสมาชิกใหม่:</strong> โค้ดเครดิตฟรี 50
                  กดใช้ได้ทันทีหลังสมัคร
                </li>
                <li>
                  <strong>💸 จากยอดฝาก:</strong> โปรฝาก 80 รับ 200 / ฝาก 40 รับ
                  100
                </li>
                <li>
                  <strong>🤝 แนะนำเพื่อน:</strong> รับ 0.3% จากยอดเดิมพันเพื่อน
                </li>
                <li>
                  <strong>🔄 คืนยอดเสีย:</strong> รับคืน 10% ไม่ต้องทำเทิร์น!
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl md:text-3xl font-bold mb-4">
                💡 วิธีใช้ เครดิตฟรี ให้คุ้มที่สุด
              </h2>
              <ol class="list-decimal pl-5 space-y-2">
                <li>
                  <strong>เลือกเกม RTP สูง:</strong> โอกาสชนะสูงกว่า
                  เหมาะใช้กับเครดิตฟรี 50
                </li>
                <li>
                  <strong>เลือกเว็บแท้:</strong> PGTO เว็บตรงไม่ล็อกยูส ถอนได้
                  100%
                </li>
                <li>
                  <strong>อ่านเงื่อนไขทุกครั้ง:</strong>
                  เพื่อเลือกโปรที่เหมาะกับสไตล์คุณ
                </li>
              </ol>
            </div>

            <div>
              <h2 class="text-2xl md:text-3xl font-bold mb-4">
                📌 เครดิตฟรีล่าสุดกดรับเองได้เลยที่ PG SLOT TO
              </h2>
              <ul class="list-disc pl-5 space-y-2">
                <li>เลือกโปรได้มากกว่า 17 รูปแบบ</li>
                <li>รับได้ทุกยูสใหม่ ยืนยันเบอร์เสร็จ รับเลย!</li>
                <li>ถอนได้จริงผ่านระบบอัตโนมัติ</li>
                <li>รองรับทุกธนาคาร + TrueMoney Wallet</li>
                <li>ไม่ต้องรอแอดมิน ไม่ต้องแชร์ ไม่ต้องโพสต์!</li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl md:text-3xl font-bold mb-4">
                ❓ FAQ คำถามที่พบบ่อย
              </h2>
              <ul class="space-y-3">
                <li>
                  <strong>💬 สมัครแล้วรับเครดิตฟรีได้เลยไหม?</strong> ได้ทันที!
                  แค่สมัคร → ยืนยันเบอร์ → เลือกรับโปร → ฝากขั้นต่ำ →
                  รับเครดิตฟรีทันที
                </li>
                <li>
                  <strong>💬 ต้องทำเทิร์นไหม?</strong> บางโปรต้องทำเทิร์น เช่น 3
                  เท่า, 5 เท่า / บางโปรไม่ต้อง เช่น โปรคืนยอดเสีย
                </li>
                <li>
                  <strong>💬 ใช้เครดิตฟรีเล่นเกมอะไรได้บ้าง?</strong>
                  เล่นได้ทุกเกมจากค่าย PG บนเว็บ PGSLOTTO
                </li>
                <li>
                  <strong>💬 ถอนออกมาได้จริงไหม?</strong> ถอนได้จริง 100%
                  ผ่านระบบออโต้
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqItems = [
  {
    question: "เครดิตฟรี 50 ทำ 600 ถอนได้ 50",
    answer: "รหัสคูปอง : PGSLOTTOFREE50",
  },
  {
    question: "เครดิตฟรีสมาชิกเก่า 100 ทำ 500 ถอน 200 🔥",
    answer:
      "รหัสคูปอง : PGSLOTTOFREE100 <br> (เฉพาะสมาชิกเก่าที่เคยมียอดฝาก 100 ขึ้นไป)",
  },
  {
    question: "เครดิตฟรีฝาก 100 รับ 50",
    answer: "รหัสคูปอง : QGQ5V2XJT6INNBS1",
  },
  {
    question: "เครดิตฟรีสมาชิกใหม่ 300 รับ 100",
    answer: "รหัสคูปอง : PGSLOTTONEWS100",
  },
  {
    question: "ฝากบิล 100 รับฟรี 50 ถอนได้ 50",
    answer: "โค้ด : W6V97HTCFWUV5SBY",
  },
  {
    question: "ฝากบิล 500 รับฟรี 100 ถอนได้ 100",
    answer: "โค้ด : IAHARWNN6ZJOXQT4",
  },
  {
    question: "ฝากบิล 1,000 รับฟรี 300 ถอนได้ 300 ",
    answer: "โค้ด : 2QOME5IKF7DFH0UJ",
  },
  {
    question: "รับเพชร Roadmap Google",
    answer: "รหัสคูปอง : PGSLOTTOGOOGLE",
  },
];

useHead({
  htmlAttrs: {
    lang: "th",
  },
  title: "เครดิตฟรีกดรับเองแจกทุกวันอัปเดตล่าสุด 2025",
  meta: [
    {
      name: "description",
      content:
        "เครดิตฟรีสิทธิพิเศษเอาใจนักเดิมพัน PG Slot ยกระดับความมันอย่างไม่มีที่สิ้นสุดไปพร้อมกับสล็อตเครดิตฟรีที่จะเพิ่มจำนวนเครดิตและลดความเสี่ยงการเสียทุนหลัก",
    },
    {
      name: "keywords",
      content:
        "สล็อตเครดิตฟรี,เครดิตฟรีล่าสุด,ลงทะเบียน เสร็จ รับเครดิตฟรี,เครดิตฟรี50,แจกเครดิตฟรี,เครดิตฟรี ยืนยันเบอร์,โค้ดเครดิตฟรี 50 ล่าสุดวันนี้,เครดิตฟรีล่าสุด กดรับเอง",
    },
    {
      property: "og:title",
      content: "เครดิตฟรีกดรับเองแจกทุกวันอัปเดตล่าสุด 2025",
    },
    {
      property: "og:description",
      content:
        "เครดิตฟรีสิทธิพิเศษเอาใจนักเดิมพัน PG Slot ยกระดับความมันอย่างไม่มีที่สิ้นสุดไปพร้อมกับสล็อตเครดิตฟรีที่จะเพิ่มจำนวนเครดิตและลดความเสี่ยงการเสียทุนหลัก",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://pgslot1.to/free-credit" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "เครดิตฟรีกดรับเองแจกทุกวันอัปเดตล่าสุด 2025",
    },
    {
      name: "twitter:description",
      content:
        "เครดิตฟรีสิทธิพิเศษเอาใจนักเดิมพัน PG Slot ยกระดับความมันอย่างไม่มีที่สิ้นสุดไปพร้อมกับสล็อตเครดิตฟรีที่จะเพิ่มจำนวนเครดิตและลดความเสี่ยงการเสียทุนหลัก",
    },
  ],
});
</script>
