<template>
  <div class="game-grid">
    <GameCard
      v-for="game in games"
      :key="game.id"
      :id="game.id"
      :game="game"
      :is-active="game.id === activeGameId"
      :title="game.thaiTitle || game.englishTitle"
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
          title: 'กราฟิตีด่วน',
          bgImage: '/images/games/game1/bg.webp',
          characterImage: '/images/games/game1/character.webp',
          logoImage: '/images/games/game1/logo.webp',
          labelImage: '/images/games/game1/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '/games/graffiti-rush'
        },
        // Duplicate the same game for demo purposes
        {
          id: 'game_2',
          title: 'กราฟิตีด่วน',
          bgImage: '/images/games/game1/bg.webp',
          characterImage: '/images/games/game1/character.webp',
          logoImage: '/images/games/game1/logo.webp',
          labelImage: '/images/games/game1/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '/games/graffiti-rush-2'
        },
        {
          id: 'game_3',
          title: 'กราฟิตีด่วน',
          bgImage: '/images/games/game1/bg.webp',
          characterImage: '/images/games/game1/character.webp',
          logoImage: '/images/games/game1/logo.webp',
          labelImage: '/images/games/game1/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '/games/graffiti-rush-3'
        },
        {
          id: 'game_4',
          title: 'กราฟิตีด่วน',
          bgImage: '/images/games/game1/bg.webp',
          characterImage: '/images/games/game1/character.webp',
          logoImage: '/images/games/game1/logo.webp',
          labelImage: '/images/games/game1/label_en.webp',
          graphicsLevel: 5,
          minBet: '1.00',
          hasFreeSpins: true,
          link: '/games/graffiti-rush-4'
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
