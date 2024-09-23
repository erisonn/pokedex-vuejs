<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TagList from './TagList.vue'
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'
import { addLeadingZerosToNumber } from '@/helpers/addLeadingZerosToNumber'

export interface Pokemon {
  sprite: string
  species: string
  key: string
  num: number
  types: {
    name: string
  }[]
}

interface Props {
  pokemon: Pokemon
}

const { pokemon } = defineProps<Props>()
const { sprite, species, types, key, num } = pokemon
</script>

<template>
  <RouterLink :to="'/pokemon/' + key" class="CardListItem">
    <div class="Container">
      <div class="ImgContainer">
        <img loading="lazy" :src="sprite" aria-label="pokémon sprite" />
      </div>
      <h6>{{ 'Nº' + addLeadingZerosToNumber(num, 4) }}</h6>
      <h4>{{ capitalizeFirstLetter(species) }}</h4>
      <TagList :tags="types" />
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.CardListItem {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 230px;
  margin: 0 10px 20px 10px;
  background-color: $card-bg-color;
  border: 1px solid $color-grey-transparent;
  border-radius: 8px;
  text-align: center;
  box-shadow: $box-shadow;
  text-decoration: none;
  .Container {
    .ImgContainer {
      img {
        height: 75px;
        width: 75px;
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
