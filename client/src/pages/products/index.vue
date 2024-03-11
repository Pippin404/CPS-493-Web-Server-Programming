<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { type Product, getProducts } from "@/model/products";
    import productCard from '@/components/productCard.vue';
    import FlyOut from '@/components/FlyOut.vue';
    import {  addToCart } from '@/viewModel/cart';

    const products = ref([] as Product[]);

    products.value = getProducts();

</script>



<template>

    <!--IMPORTANT SHIT!!-->
    <div class="product-list">
        <productCard    v-for="product in products" :key="product.id" :product="product"
                        :products="product" @addToCart="addToCart"
        />
    </div>
    

    <Flyout>
        <h1 class="title">
            <p>add to cart</p>
            <h1>
                <p>cart</p>
                <ul>
                    <li v-for="item in cart" :key="item.product.id">
                        <img :src="item.product.thumbnail" :alt="item.product.title" width="50">
                        {{ item.product.title }} x {{ item.quantity }}
                    </li>
                </ul>
                {{ cart.length }} items totalling ${{ total }}
            </h1>

        </h1>
    </Flyout>




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