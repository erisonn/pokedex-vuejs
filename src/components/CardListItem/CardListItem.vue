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
    <div class="CardList-Item-ImgContainer">
      <img loading="lazy" :src="sprite" aria-label="pokémon sprite" />
    </div>
    <h3>{{ capitalizeFirstLetter(species) }}</h3>
    <div class="TagList">
      <TagListItem v-for="type in types" :key="type.name" :type="type" />
    </div>
  </div>
</template>

<style lang="scss">
.CardList-Item {
  width: 200px;
  margin: 0 30px;
  padding: 20px 5px;
  .CardList-Item-ImgContainer {
    img {
      border-radius: 4px;
      background-color: aliceblue;
      padding: 30px 30px;
      height: 150px;
      width: 150px;
    }
  }
  &:hover {
    cursor: pointer;
  }
  h3 {
    margin-bottom: 5px;
  }
  .TagList {
    display: flex;
  }
}
</style>
