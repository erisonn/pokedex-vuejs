<script setup lang="ts">
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'
import TagListItem from '../TagListItem/TagListItem.vue'

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
const { sprite, species, types } = props.pokemon
</script>

<template>
  <div class="CardList-Item">
    <div class="CardList-Item-Container">
      <div class="CardList-Item-ImgContainer">
        <img loading="lazy" :src="sprite" aria-label="pokémon sprite" />
      </div>
      <h4>Nº001</h4>
      <h2>{{ capitalizeFirstLetter(species) }}</h2>
      <div class="TagList">
        <TagListItem v-for="type in types" :key="type.name" :type="type" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/main.scss';
.CardList-Item {
  width: 300px;
  height: 200px;
  margin: 40px 10px;
  background-color: $color-white;
  border-radius: 20px;
  text-align: center;
  box-shadow: $box-shadow;
  .CardList-Item-Container {
    transform: translateY(-55px);
    h4 {
      margin-bottom: 10px;
      color: $color-grey-light;
    }
    h2 {
      margin-top: 5px;
      margin-bottom: 15px;
    }
    .CardList-Item-ImgContainer {
      img {
        height: 85px;
        width: 85px;
      }
    }
    .TagList {
      display: flex;
      justify-content: center;
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
