<script setup lang="ts">
export interface Pokemon {
  sprite: string
  species: string
  key: string
}

interface Props {
  pokemon: Pokemon
}

const props = defineProps<Props>()
const { sprite, species } = props.pokemon
</script>

<template>
  <div class="CardList-Item">
    <div class="CardList-Item-ImgContainer">
      <img :src="sprite" />
    </div>
    <h3>{{ species }}</h3>
  </div>
</template>

<style lang="scss">
.CardList-Item {
  width: 150px;
  margin: 50px;
  text-align: center;
  .CardList-Item-ImgContainer {
    img {
      height: 100px;
      width: 100px;
    }
  }
}
</style>
