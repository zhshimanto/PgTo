<template>
  <section class="hero-section py-10 md:py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="w-full md:w-1/2 text-white text-center md:text-left">
          <div class="flex justify-center md:justify-start w-full">
            <img src="/pgto.webp" alt="PG SLOT TO Logo" class="w-48 h-auto mb-8">
          </div>
          <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#eadb20] to-[#ffffff] bg-clip-text text-transparent leading-tight">
            PG SLOT TO เว็บตรงลิขสิทธิ์แท้ค่ายพีจีสล็อต PG สีชมพู แตกง่ายฝากถอนไวโอนจริง<br>
            <span class="text-white"></span>
          </h1>
          <p class="text-base md:text-lg mb-6 md:mb-8 text-white px-4 md:px-0">
            กลับมาอีกครั้งกับตัวจริงของวงการสล็อตออนไลน์! นี่คือคำตอบของนักเดิมพันที่ต้องการมากกว่าแค่เว็บสล็อตทั่วไป เพราะ PG SLOT TO ไม่ใช่เว็บที่เอาเกมมาแปะแล้วจบ แต่คือ เว็บลิขสิทธิ์แท้ที่มีคุณภาพจริง ระบบจริง เกมจริง และจ่ายเงินจริง ทุกยอด ทุกบาท<br>
            ไม่ว่าจะเป็นเรื่องของความน่าเชื่อถือ ระบบความปลอดภัย เกมที่อัปเดตไว โปรโมชั่นที่แจกจริง หรือบริการหลังบ้านที่ดูแลแบบมืออาชีพ PG SLOT TO จึงกลายเป็นชื่อที่ผู้เล่นทั้งใหม่และเก่าเลือกใช้เป็นเว็บหลักของตัวเอง
          </p>
          <div class="flex flex-col gap-4 justify-center">
            <a class="btn-register text-center" href="https://playpgslot.to/register?hid=P2P1F1G4EQ">
              สมัครสมาชิก
            </a>
            <a class="btn-login text-center" href="https://playpgslot.to/register?hid=P2P1F1G4EQ">
              เข้าสู่ระบบ
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/2 mt-8 md:mt-0">
          <ScoreBoard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ScoreBoard from './ScoreBoard.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const buttonAnimation = (element) => {
    // Initial state
    gsap.set(element, {
      rotateY: 0,
      rotateX: 0,
      transformPerspective: 1000,
      transformOrigin: 'center'
    })

    // Add subtle floating animation
    gsap.to(element, {
      y: '-4px',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    element?.addEventListener('mouseenter', () => {
      // Kill any existing hover animations
      gsap.killTweensOf(element, { scale: true, rotateY: true, rotateX: true })
      
      // Create hover timeline
      const tl = gsap.timeline()
      tl.to(element, {
        scale: 1.1,
        rotateY: 15,
        rotateX: -5,
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.2)',
        duration: 0.4,
        ease: 'power3.out'
      }).to(element, {
        scale: 1.05,
        rotateY: 5,
        rotateX: 0,
        duration: 0.15,
        ease: 'power2.out'
      })
    })

    element?.addEventListener('mouseleave', () => {
      gsap.killTweensOf(element, { scale: true, rotateY: true, rotateX: true })
      gsap.to(element, {
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        duration: 0.5,
        ease: 'elastic.out(1, 0.75)'
      })
    })
  }

  // Register button animation
  buttonAnimation(document.querySelector('.btn-register'))

  // Login button animation
  buttonAnimation(document.querySelector('.btn-login'))
})
</script>

<style scoped>
.btn-register,
.btn-login {
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 15px;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  transition: background 0.5s ease-out;
  transform-origin: center;
  will-change: transform, box-shadow;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

@media (min-width: 768px) {
  .btn-register,
  .btn-login {
    margin-left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.btn-register {
  background: linear-gradient(to bottom, #ffa223, rgb(255, 142, 35));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-register:active {
  transform: translateY(2px);
  box-shadow: none;
}

.btn-login {
  background: linear-gradient(to bottom, #5c7fff, #486bff);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-login:active {
  transform: translateY(2px);
  box-shadow: none;
}
</style>
