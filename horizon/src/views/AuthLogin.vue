<template>
  <main class="login">
    <section class="forms">
      <h1> This is Login</h1>
      <form class="form form__login" @submit.prevent="login">
        <ul>
          <li>
            <input 
              type="email"
              placeholder="Email Address"
              v-model="loginForm.email"
              required />
          </li>
          <li>
            <input 
              type="password"
              placeholder="Password"
              v-model="loginForm.password"
              required />
          </li>
          <li>
            <button type="submit" value="login">Login</button>
          </li>
        </ul>
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'LoginView',
  data() {
    return {
    }
  },
  components: {
    
  },
  setup() {
    const loginForm = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', loginForm.value);
    }

    return {
      loginForm,
      store,
      login
    }
  },
  mounted() {
    
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
