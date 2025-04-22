<template>
  <div :id="id" class="game-card" :class="{ active: isActive }" @click="$emit('click', game)">
    <div class="avatar" :class="{ active: isActive }">
      <div class="bg" :style="{ backgroundImage: `url(${game.bgImage})` }"></div>
      <div class="character" :style="{ backgroundImage: `url(${game.characterImage})` }"></div>
      <div class="logo" :style="{ backgroundImage: `url(${game.logoImage})` }"></div>
      <div class="label" :style="{ backgroundImage: `url(${game.labelImage})` }"></div>
    </div>
    <div class="title">
      {{ title || game.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    id: {
      type: String,
      required: true
    },
    game: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.game-card { width:100%; color:#fff; display:block; margin:10px 0; -webkit-touch-callout:none; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none; }
.game-card .avatar { padding:50%; position:relative; isolation:isolate; cursor:pointer; display:block; }
@media(min-width:820px) { .game-card .avatar { padding:50%; } }
.game-card .avatar.active .bg { background-size:160% auto; background-position:bottom -40px; }
.game-card .avatar.active .character { transform:scale(1.2); }
@media(max-width:340px) { .game-card .avatar.active .character { transform:scale(1.1); } }
@media(min-width:340px) { .game-card .avatar.active .character { transform:scale(1.1) translateY(-20px); } }
.game-card .avatar.active .logo { transform:scale(1.1) translateY(-10px); }
.game-card .avatar.active .label { transform:scale(1.05); }
.game-card .avatar .bg, .game-card .avatar .character, .game-card .avatar .label, .game-card .avatar .logo { position:absolute; top:0; right:0; bottom:0; left:0; transition:all .4s ease-in-out; }
.game-card .avatar .bg { top:25px; border-radius:10px; background:#FEACCB url(/img/blank.webp) no-repeat bottom; background-size:140% auto; transform-origin:center bottom; }
@media(max-width:340px) { .game-card .avatar .bg { top:30px; } }
@media(min-width:340px) { .game-card .avatar .bg { top:20px; } }
@media(min-width:600px) { .game-card .avatar .bg { top:35px; } }
@media(min-width:820px) { .game-card .avatar .bg { top:35px; } }
.game-card .avatar .bg:before { content:""; position:absolute; z-index:-1; top:15px; bottom:-15px; left:15px; right:15px; background-color:#000; border-radius:inherit; filter:blur(10px); opacity:.2; }
.game-card .avatar .character { background:transparent url(/img/blank.webp) no-repeat bottom; background-size:contain; transform-origin:center bottom; transform:scale(1); }
@media(min-width:340px) { .game-card .avatar .character { transform:scale(1) translateY(-20px); } }
.game-card .avatar .logo { transform-origin:center bottom; }
.game-card .avatar .label, .game-card .avatar .logo { background:transparent url(/img/blank.webp) no-repeat 50%; background-size:contain; }
.game-card .avatar .label { transform-origin:center center; }
.game-card>.title { margin-top:10px; font-size:16px; font-weight:500; color:#fff; text-align:center; line-height:1.15; text-wrap:balance; display:flex; align-items:center; justify-content:center; gap:8px; }
.game-card>.title .thai-title { color:#fff; }
.game-card>.title .sub-title { color:#ff4e9b; font-size:14px; }
</style>
