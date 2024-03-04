<script setup lang="ts">
    import { ref } from 'vue';
    import { type Product, getProducts } from "@/model/products";
    const products = ref([] as Product[]);

    products.value = getProducts();

</script>



<template>
    <div class="product-list">
                <div v-for="product in products" :key="product.id" class="card">
        <div class="card-image">
                <img :src="product.thumbnail" :alt="product.title">
                <div class="card-content">

                <h3>{{ product.title }}</h3>
                <h3>{{ product.description }}</h3>
                <h3>{{ product.price }}</h3>
            </div>
        </div>
    </div>
    </div>    
</template>

<style scoped>

    .card {

        flex-basis: 15rem;
        flex-grow: 1;
        margin: .5rem;

    }

    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }


</style>