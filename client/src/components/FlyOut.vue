<script setup lang="ts">

    const props=defineProps<{
        isOpen?: boolean
    }>()

</script>

<template>
    <div class="flyout" :class="{ open: isOpen }">

        <slot></slot>

    </div>
</template>

<style scoped>
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
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>