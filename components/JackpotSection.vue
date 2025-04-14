<template>
  <section id="jackpot" class="jackpot">
    <h2 class="title">Jackpot : แจ็คพอทรางวัลใหญ่</h2>
    <div class="content">
      <div class="bg">
        <div 
          class="obj coin-blur-01" 
          data-type="parallax" 
          data-depth="0.1" 
          data-ref="#jackpot">
        </div>
      </div>
      <div class="fg">
        <div class="obj main"></div>
        <div 
          class="obj coin-focus-01" 
          data-type="parallax" 
          data-depth="0.2" 
          data-ref="#jackpot">
        </div>
        <div 
          class="obj coin-focus-02" 
          data-type="parallax" 
          data-depth="0.1" 
          data-ref="#jackpot">
        </div>
        <div 
          class="obj coin-blur-02" 
          data-type="parallax" 
          data-depth="0.2" 
          data-ref="#jackpot">
        </div>
        <div 
          class="obj coin-blur-01" 
          data-type="parallax" 
          data-depth="0.3" 
          data-ref="#jackpot">
        </div>
      </div>
      <div class="stat-box">
        <div class="top">
          <h2>JACKPOT</h2>
          รางวัลใหญ่รอคุณอยู่
        </div>
        <div class="bottom">1,542,129.53</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JackpotSection'
}
</script>

<style scoped>
.jackpot {
  margin-top: 40px;
  margin-bottom: 40px;
  min-height: 460px;
  display: grid;
  align-items: center;
  justify-items: center;
  place-items: center;
  position: relative;
  background: transparent url(/images/jackpot/swoosh-floor@2x.webp) no-repeat bottom;
  background-size: 400px auto;
  background-position: center bottom 20px;
}

@media(min-width: 340px) {
  .jackpot {
    background: transparent url(/images/jackpot/desktop-floor-swoosh@2x.webp) no-repeat bottom;
    background-size: 1200px auto;
    background-position: center bottom 0;
  }
}

.jackpot .title {
  display: none;
}

.jackpot .stat-box {
  width: 280px;
  max-width: 375px;
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  position: relative;
  top: -30px;
  z-index: 10;
}

.jackpot .stat-box .top {
  background-color: #3e54d2;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 400;
  border-radius: 10px 10px 0 0;
  color: #fff;
}

.jackpot .stat-box .top h2 {
  font-size: 26px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
}

.jackpot .stat-box .bottom {
  background: #fbd95d;
  background: linear-gradient(175deg, #fbd95d, #ff851c 75%, #ff9417);
  font-size: 30px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 0 0 10px 10px;
  box-shadow: inset 0 2px 1px #ffe284;
}

.jackpot .bg,
.jackpot .fg {
  position: absolute;
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  pointer-events: none;
}

.jackpot .bg .obj,
.jackpot .fg .obj {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.jackpot .content {
  width: 100%;
  max-width: 600px;
  min-height: 420px;
  margin: 0 auto;
  padding-top: 150px;
  position: relative;
}

.jackpot .bg {
  z-index: 5;
}

.jackpot .bg .coin-blur-01 {
  background: transparent url(/images/jackpot/coin-back-blur@2x.webp) no-repeat top;
  background-size: 29px 29px;
  background-position: top 135px left 130px;
}

@media(min-width: 600px) {
  .jackpot .bg .coin-blur-01 {
    background-position: top 125px left 280px;
  }
}

.jackpot .fg {
  z-index: 100;
}

.jackpot .fg .main {
  background: transparent url(/images/jackpot/captain-hook@2x.webp) no-repeat 100%;
  background-size: auto 415px;
  background-position: right -80px top 50px;
}

@media(min-width: 600px) {
  .jackpot .fg .main {
    background-position: right 50px bottom 0;
  }
}

.jackpot .fg .coin-focus-01 {
  background: transparent url(/images/jackpot/coin-fore-focus-01@2x.webp) no-repeat top;
  background-size: 47px 46px;
  background-position: top 185px right 100px;
}

@media(min-width: 600px) {
  .jackpot .fg .coin-focus-01 {
    background-position: top 185px right 230px;
  }
}

.jackpot .fg .coin-focus-02 {
  background: transparent url(/images/jackpot/coin-fore-focus-02@2x.webp) no-repeat top;
  background-size: 37px 36px;
  background-position: top 105px right 100px;
}

@media(min-width: 600px) {
  .jackpot .fg .coin-focus-02 {
    background-position: top 105px right 230px;
  }
}

.jackpot .fg .coin-blur-02 {
  background: transparent url(/images/jackpot/coin-fore-blur-03@2x.webp) no-repeat top;
  background-size: 45px 45px;
  background-position: top 245px right 50px;
}

@media(min-width: 600px) {
  .jackpot .fg .coin-blur-02 {
    background-position: top 245px right 170px;
  }
}

.jackpot .fg .coin-blur-01 {
  background: transparent url(/images/jackpot/coin-fore-blur-01@2x.webp) no-repeat top;
  background-size: 80px 81px;
  background-position: bottom 105px left -30px;
}

@media(min-width: 600px) {
  .jackpot .fg .coin-blur-01 {
    background-position: bottom 105px left 115px;
  }
}
</style>
