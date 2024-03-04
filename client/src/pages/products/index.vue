<script setup lang="ts">
    import { ref } from 'vue';
    import { type Product, getProducts } from "@/model/products";
    const products = ref([] as Product[]);

    type CartItem = {
        product: Product;
        quantity: number;
    };

    const cart = ref([] as CartItem[]);

    function addToCart(product: Product) {
        const item = cart.value.find((item) => item.product.id === product.id);
        if (item) {
            item.quantity++;
        } else {
            cart.value.push({ product, quantity: 1 });
        }
    }


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

                <button @click="addToCart(product) "class="button is-primary">Add to cart</button>

            </div>
        </div>
    </div>
    </div>    

    <div class="flyout">
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
                {{ cart.length }} items totalling ${{ cart.reduce((total, item) => total + item.product.price * item.quantity, 0) }}
            </h1>


        </h1>

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


    .flyout{
        position: fixed;
        top: 0;
        right: 0;
        width: 300px;
        height: 100%;
        background-color: #ffffff;
        border-color: aquamarine;
        z-index: 100;
        box-shadow: -1px 0 5px rgba(0, 0, 0, 0.1);
        transform: translateX(80%);
        transition: transform 1s ease-in-out;
    }

    .flyout.open, .flyout:hover{

        transform: translateX(0);
    }

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