<template>
    <nav>
        <ul class="main-nav">
            <li>
                <router-link :to="{path: '/'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{path: '/login'}" class="login-link">Log in</router-link>
            </li>
            <li>
                <router-link :to="{path: '/register'}" class="register-link">Register</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .main-nav {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        li {
            a {
                padding: .5rem 1rem;
            }
        }
    }
</style>
