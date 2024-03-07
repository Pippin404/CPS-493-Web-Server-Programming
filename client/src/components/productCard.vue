<script setup lang="ts">
import type { Product } from '@/model/products';



const props = defineProps<{
    product: Product;
}>()

const emit=defineEmits<{
    addToCart: [product: Product]
}>()

</script>

<template>
    <div  class="card">
    <div class="card-image">
        <img :src="product.thumbnail" :alt="product.title">
        <div class="card-content">

        <h3>{{ product.title }}</h3>
        <h3>{{ product.description }}</h3>
        <h3>{{ product.price }}</h3>

        <button @click="emit('addToCart',product) "class="button is-primary">Add to cart</button>

        </div>
    </div>




</div>
</template>

<style scoped>






</style>