<template>
  <div class="game-grid">
    <GameCard
      v-for="game in games"
      :key="game.id"
      :id="game.id"
      :game="game"
      :is-active="game.id === activeGameId"
      :title="title"
      @mouseenter="activeGameId = game.id"
      @mouseleave="activeGameId = null"
    />
  </div>
</template>

<script>
import GameCard from './GameCard.vue'

export default {
  name: 'GameGrid',
  components: {
    GameCard
  },
  data() {
    return {
      activeGameId: null,
      games: [
        {
          id: 'game_1',
          title: 'ขุมทรัพย์แห่งแอซเท็ค',
          bgImage: '/images/games/1-treasures-of-aztec/bg.webp',
          characterImage: '/images/games/1-treasures-of-aztec/character.webp',
          logoImage: '/images/games/1-treasures-of-aztec/logo.webp',
          labelImage: '/images/games/1-treasures-of-aztec/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_2',
          title: 'เส้นทางมาจอง 2',
          bgImage: '/images/games/2-mahjong-ways-2/bg.webp',
          characterImage: '/images/games/2-mahjong-ways-2/character.webp',
          logoImage: '/images/games/2-mahjong-ways-2/logo.webp',
          labelImage: '/images/games/2-mahjong-ways-2/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_3',
          title: 'เนโกะนำโชค',
          bgImage: '/images/games/3-lucky-Neko/bg.webp',
          characterImage: '/images/games/3-lucky-Neko/Lucky-Neko-character.webp',
          logoImage: '/images/games/3-lucky-Neko/Lucky-Neko-logo.webp',
          labelImage: '/images/games/3-lucky-Neko/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_4',
          title: 'เส้นทางของมาจอง',
          bgImage: '/images/games/4-Mahjong-Ways/Mahjong-Ways-bg.webp',
          characterImage: '/images/games/4-Mahjong-Ways/Mahjong-Ways-character.webp',
          logoImage: '/images/games/4-Mahjong-Ways/Mahjong-Ways-logo.webp',
          labelImage: '/images/games/4-Mahjong-Ways/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_5',
          title: 'วิถีแห่งกิเลน',
          bgImage: '/images/games/5-Ways-of-the-Qilin/Ways-of-the-Qilin-bg.webp',
          characterImage: '/images/games/5-Ways-of-the-Qilin/Ways-of-the-Qilin-character.webp',
          logoImage: '/images/games/5-Ways-of-the-Qilin/Ways-of-the-Qilin-logo.webp',
          labelImage: '/images/games/5-Ways-of-the-Qilin/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_6',
          title: 'การดวลล่าค่าหัวสุดไวลด์',
          bgImage: '/images/games/6-Wild-Bounty-Showdown/Wild-Bounty-Showdown-bg.webp',
          characterImage: '/images/games/6-Wild-Bounty-Showdown/Wild-Bounty-Showdown-character.webp',
          logoImage: '/images/games/6-Wild-Bounty-Showdown/Wild-Bounty-Showdown-logo.webp',
          labelImage: '/images/games/6-Wild-Bounty-Showdown/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_7',
          title: 'ชนะรางวัล CaiShen',
          bgImage: '/images/games/7-Caishen-Wins/Caishen-Wins-bg.webp',
          characterImage: '/images/games/7-Caishen-Wins/Caishen-Wins-character.webp',
          logoImage: '/images/games/7-Caishen-Wins/Caishen-Wins-logo.webp',
          labelImage: '/images/games/7-Caishen-Wins/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_8',
          title: 'อาณาจักรจูราสสิค',
          bgImage: '/images/games/8-Jurassic-Kingdom/Jurassic-Kingdom-bg.webp',
          characterImage: '/images/games/8-Jurassic-Kingdom/Jurassic-Kingdom-character.webp',
          logoImage: '/images/games/8-Jurassic-Kingdom/Jurassic-Kingdom-logo.webp',
          labelImage: '/images/games/8-Jurassic-Kingdom/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_9',
          title: 'วัวแห่งโชคลาภ',
          bgImage: '/images/games/9-Fortune-Ox/Fortune-Ox-bg.webp',
          characterImage: '/images/games/9-Fortune-Ox/Fortune-Ox-character.webp',
          logoImage: '/images/games/9-Fortune-Ox/Fortune-Ox-logo.webp',
          labelImage: '/images/games/9-Fortune-Ox/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_10',
          title: 'การไล่ล่าของมนุษย์หมาป่า',
          bgImage: '/images/games/10-Werewolfs-Hunt/Werewolf_s-Hunt-bg.webp',
          characterImage: '/images/games/10-Werewolfs-Hunt/Werewolf_s-Hunt-character.webp',
          logoImage: '/images/games/10-Werewolfs-Hunt/Werewolf_s-Hunt-logo.webp',
          labelImage: '/images/games/10-Werewolfs-Hunt/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_11',
          title: 'กระต่ายแห่งโชคลาภ',
          bgImage: '/images/games/11-Fortune-Rabbit/Fortune-Rabbit-bg.webp',
          characterImage: '/images/games/11-Fortune-Rabbit/Fortune-Rabbit-character.webp',
          logoImage: '/images/games/11-Fortune-Rabbit/Fortune-Rabbit-logo.webp',
          labelImage: '/images/games/11-Fortune-Rabbit/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_12',
          title: 'มังกรแห่งโชคลาภ',
          bgImage: '/images/games/12-Fortune-Dragon/Fortune-Dragon-bg.webp',
          characterImage: '/images/games/12-Fortune-Dragon/Fortune-Dragon-character.webp',
          logoImage: '/images/games/12-Fortune-Dragon/Fortune-Dragon-logo.webp',
          labelImage: '/images/games/12-Fortune-Dragon/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_13',
          title: 'ค่ำคืนค็อกเทล',
          bgImage: '/images/games/13-Cocktail-Nights/Cocktail-Nights-bg.webp',
          characterImage: '/images/games/13-Cocktail-Nights/Cocktail-Nights-character.webp',
          logoImage: '/images/games/13-Cocktail-Nights/Cocktail-Nights-logo.webp',
          labelImage: '/images/games/13-Cocktail-Nights/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_14',
          title: 'ไวล์แบนดิโต',
          bgImage: '/images/games/14-Wild-Bandito/Wild-Bandito-bg.webp',
          characterImage: '/images/games/14-Wild-Bandito/Wild-Bandito-character.webp',
          logoImage: '/images/games/14-Wild-Bandito/Wild-Bandito-logo.webp',
          labelImage: '/images/games/14-Wild-Bandito/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_15',
          title: 'หายนะมาเฟีย',
          bgImage: '/images/games/15-Mafia-Mayhem/Mafia-Mayhem-bg.webp',
          characterImage: '/images/games/15-Mafia-Mayhem/Mafia-Mayhem-character.webp',
          logoImage: '/images/games/15-Mafia-Mayhem/Mafia-Mayhem-logo.webp',
          labelImage: '/images/games/15-Mafia-Mayhem/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_16',
          title: 'โชคลาภแห่งคเณศ',
          bgImage: '/images/games/16-Ganesha-Fortune/Ganesha-Fortune-bg.webp',
          characterImage: '/images/games/16-Ganesha-Fortune/Ganesha-Fortune-character.webp',
          logoImage: '/images/games/16-Ganesha-Fortune/Ganesha-Fortune-logo.webp',
          labelImage: '/images/games/16-Ganesha-Fortune/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_17',
          title: 'หมูนำโชค',
          bgImage: '/images/games/17-Lucky-Piggy/Lucky-Piggy-bg.webp',
          characterImage: '/images/games/17-Lucky-Piggy/Lucky-Piggy-character.webp',
          logoImage: '/images/games/17-Lucky-Piggy/Lucky-Piggy-logo.webp',
          labelImage: '/images/games/17-Lucky-Piggy/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_18',
          title: 'มหัศจรรย์แม่น้ำไทย',
          bgImage: '/images/games/18-Thai-River-Wonders/Thai-River-Wonders-bg.webp',
          characterImage: '/images/games/18-Thai-River-Wonders/Thai-River-Wonders-character.webp',
          logoImage: '/images/games/18-Thai-River-Wonders/Thai-River-Wonders-logo.webp',
          labelImage: '/images/games/18-Thai-River-Wonders/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_19',
          title: 'โชคลาภแห่งไมดัส',
          bgImage: '/images/games/19-Midas-Fortune/Midas-Fortune-bg.webp',
          characterImage: '/images/games/19-Midas-Fortune/Midas-Fortune-character.webp',
          logoImage: '/images/games/19-Midas-Fortune/Midas-Fortune-logo.webp',
          labelImage: '/images/games/19-Midas-Fortune/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        },
        {
          id: 'game_20',
          title: 'พยัคฆ์แห่งโชคลาภ',
          bgImage: '/images/games/20-Fortune-Tiger/Fortune-Tiger-bg.webp',
          characterImage: '/images/games/20-Fortune-Tiger/Fortune-Tiger-character.webp',
          logoImage: '/images/games/20-Fortune-Tiger/Fortune-Tiger-logo.webp',
          labelImage: '/images/games/20-Fortune-Tiger/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
.game-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}

@media (max-width: 1200px) {
  .game-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .game-grid {
    grid-template-columns: 1fr;
  }
}
</style>
