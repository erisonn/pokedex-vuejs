<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TagList from './TagList.vue'
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'

export interface Pokemon {
  sprite: string
  species: string
  key: string
  types: {
    name: string
  }[]
}

interface Props {
  pokemon: Pokemon
}

const props = defineProps<Props>()
const { sprite, species, types, key } = props.pokemon
</script>

<template>
  <RouterLink :to="'/pokemon/' + key" class="CardList-Item">
    <div class="CardList-Item-Container">
      <div class="CardList-Item-ImgContainer">
        <img loading="lazy" :src="sprite" aria-label="pokémon sprite" />
      </div>
      <h4>Nº001</h4>
      <h2>{{ capitalizeFirstLetter(species) }}</h2>
      <TagList :tags="types" />
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
@import '/src/assets/main.scss';
.CardList-Item {
  width: 300px;
  height: 200px;
  margin: 40px 10px;
  background-color: $color-white;
  border-radius: 20px;
  text-align: center;
  box-shadow: $box-shadow;
  text-decoration: none;
  .CardList-Item-Container {
    transform: translateY(-55px);
    .CardList-Item-ImgContainer {
      img {
        height: 85px;
        width: 85px;
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
