<template>
    <nav>
        <ul class="main-nav">
            <li>
                <router-link :to="{path: '/'}">Home</router-link>
            </li>
            <li v-if="isLoggedIn">
                <router-link :to="{path: '/dashboard'}">Dashboard</router-link>
            </li>
            <li v-if="isLoggedIn">
                <router-link :to="{path: '/create-race'}">Create Race</router-link>
            </li>
            <li>
                <router-link :to="{path: '/login'}" class="login-link">Log in</router-link>
            </li>
            <li>
                <router-link :to="{path: '/register'}" class="register-link">Register</router-link>
            </li>
            <li>
                <button @click="$store.dispatch('logout')">Logout</button>
            </li>
        </ul>
    </nav>
</template>

<script>
import { onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    data() {
        return {
            isLoggedIn: false
        }
    },
    setup() {
    const store = useStore()

    onBeforeUnmount(() => {
      store.dispatch('fetchUser')
    })

    return {
      user: store.state.user
    }
  },
  mounted() {
      this.isSignedIn()
  },    
  methods: {
    isSignedIn() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            } 
        })
      }
  }
}
</script>

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
