<script setup lang="ts">
import { refCart, addToCart, total } from '@/viewModel/cart';
    const cart = refCart;
</script>

<template>
    <div>
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



    </div>
</template>

<style scoped>
.cart li{
        display: flex;
        align-items: center;
        margin: 1rem;
    }

    .cart img{
        margin-right: 1rem;
        size: 5px;
    }
</style>