<template>
  <section id="signupInvite" class="singup-invite pop-box">
    <div class="content">
      <div class="bg">
        <div class="obj main"></div>
        <div 
          class="obj coin-blur-01" 
          data-type="parallax" 
          data-depth="0.1" 
          data-ref="#signupInvite">
        </div>
      </div>
      <div class="fg">
        <div 
          class="obj coin-focus-01" 
          data-type="parallax" 
          data-depth="0.2" 
          data-ref="#signupInvite">
        </div>
        <div 
          class="obj coin-focus-02" 
          data-type="parallax" 
          data-depth="0.2" 
          data-ref="#signupInvite">
        </div>
        <div 
          class="obj coin-focus-03" 
          data-type="parallax" 
          data-depth="0.4" 
          data-ref="#signupInvite">
        </div>
      </div>
      <div class="glass-box">
        <h2>สมัครสมาชิกใหม่ รับฟรีเกม 200 บาททันทีโดยไม่ต้องฝากเงินก่อน</h2>
        <p>
          สมัครสมาชิกกับ PG SLOT VEGAS ผู้ให้บริการเกมสล็อตออนไลน์ เว็บตรงจาก PG
          SOFT รับสิทธิประโยชน์มากมาย ทั้งโบนัสแรกเข้า, โบนัสรายวัน,
          โบนัสเล่นเกมฟรี (มีเฉพาะในเว็บตรงเท่านั้น) และอื่นๆอีกมามาย.
          สมัครง่ายๆ รับฟรีเกม 200 บาท ทันทีโดยไม่ต้องฝากยอดแรก
          ไม่ต้องวัดดวงทำเทิร์น การันตีเงินรางวัลที่เล่นได้ ลุ้นแจ๊คพอตใหญ่
          ที่สะสมรางวัลจากทุกเกมมารวมกันไว้รอแตกใหญ่เดือนละครั้ง โอกาสทอง
          ที่ท่านต้องคว้าไว้
        </p>
        <p>
          มีเกมให้เล่นเยอะ ชนะง่าย แตกบ่อย, เกมสวยงาม กราฟฟิคทันสมัย
          มีฟีเจอร์ช่วยเหลือผู้เล่นมากมาย ทั้งฟรีเกม ที่ให้ผู้เล่นเล่นเกมได้ฟรีๆ
          แต่ได้รับเงินจริง, ฟีเจอร์ฟรีสปิน ที่แจกเงินรางวัลระดับเมกะโบนัส,
          ฟีเจอร์รีสปิน ที่คอยช่วยผู้เล่นที่พลาดโอกาสชนะ ให้ได้ลุ้นอีกครั้ง
          เพราะฉะนั้น อย่าพลาด กับโอกาสที่สุดแสนพิเศษนี้
        </p>
        <div class="actions">
          <button class="btn-gradient px-8 py-3 rounded-full font-semibold text-[#12000a]">
              Play Now
            </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignupInvite',
  mounted() {
    // Initialize parallax effect
    const parallaxElements = document.querySelectorAll('[data-type="parallax"]');
    window.addEventListener('scroll', () => {
      parallaxElements.forEach(element => {
        const depth = element.getAttribute('data-depth');
        const refElement = document.querySelector(element.getAttribute('data-ref'));
        if (refElement) {
          const rect = refElement.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          element.setAttribute('data-offset-top', offsetTop);
          const translateY = (window.pageYOffset - offsetTop) * depth;
          element.style.transform = `translateY(${translateY}px)`;
        }
      });
    });
  }
}
</script>

<style scoped>
.pop-box {
  background: transparent url(/images/signupInvite/mini-swoosh@2x.webp) no-repeat top;
  background-size: 400px auto;
  margin-bottom: 40px;
  position: relative;
}

@media(min-width: 400px) {
  .pop-box {
    background: transparent url(/images/signupInvite/desktop-mini-swoosh@2x.webp) no-repeat center top 70px;
    background-size: 1200px auto;
  }
}

.pop-box .content {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 150px;
  position: relative;
}

.pop-box .bg,
.pop-box .fg {
  position: absolute;
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  pointer-events: none;
}

.pop-box .bg .obj,
.pop-box .fg .obj {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.pop-box .bg {
  z-index: 5;
}

.pop-box .bg .main {
  background: transparent url(/images/signupInvite/king.webp) no-repeat top;
  background-size: 190px;
  background-position: left 60px top 30px;
}

@media(min-width: 1000px) {
  .pop-box .bg .main {
    background-position: left 60px top 30px;
  }
}

.pop-box .bg .coin-blur-01 {
  background: transparent url(/images/signupInvite/coin-back-blur@2x.webp) no-repeat top;
  background-size: 29px 29px;
  background-position: top 155px left 280px;
}

.pop-box .fg {
  z-index: 100;
  overflow: visible;
}

.pop-box .fg .coin-focus-01 {
  background: transparent url(/images/signupInvite/coin-fore-focus-01@2x.webp) no-repeat top;
  background-size: 33px 34px;
  background-position: top 155px left 40px;
}

.pop-box .fg .coin-focus-02 {
  background: transparent url(/images/signupInvite/coin-fore-focus-02@2x.webp) no-repeat top;
  background-size: 33px 34px;
  background-position: top 85px left 280px;
}

@media(min-width: 1000px) {
  .pop-box .fg .coin-focus-02 {
    background-position: top 45px left 320px;
  }
}

.pop-box .fg .coin-focus-03 {
  overflow: visible;
  background: transparent url(/images/signupInvite/coin-fore-focus-02@2x.webp) no-repeat top;
  background-size: 32px 31px;
  background-position: top 300px right 2px;
}

@media(min-width: 1000px) {
  .pop-box .fg .coin-focus-03 {
    background-position: top 205px right 2px;
  }
}

.pop-box .glass-box {
  position: relative;
  z-index: 10;
  padding: 20px 20px 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  min-height: 200px;
  background-color: #ff98ba;
  box-shadow: 0 20px 30px -20px rgba(8, 7, 7, 0.1);
}

.pop-box .glass-box h2 {
  margin-bottom: 20px;
}

.pop-box .glass-box .actions {
  width: 240px;
  margin: 40px auto -55px;
  text-align: center;
}

.button-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px 30px;
  background: linear-gradient(to right, #b94d00, #e05d00);
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(185, 52, 0, 0.3);
  border: none;
  position: relative;
  overflow: hidden;
}

.button-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(185, 52, 0, 0.4);
}

.button-link:active {
  transform: translateY(1px);
}
</style>
