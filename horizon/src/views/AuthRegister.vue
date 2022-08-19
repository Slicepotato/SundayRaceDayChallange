<template>
  <main class="registration">
    <section class="forms">
      <h1> This is Registration</h1>
      <form action="" class="form form__register" @submit.prevent="register">
        <ul>
          <li>
            <input 
              type="email"
              placeholder="Email Address"
              v-model="registerForm.email"
              required />
          </li>
          <li>
            <input 
              type="password"
              placeholder="Password"
              v-model="registerForm.password"
              required />
          </li>
          <li>
            <button type="submit" value="register">Register</button>
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
  name: 'RegisterView',
  data() {
    return {
    }
  },
  components: {
    
  },
  setup() {
    const registerForm = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch('register', registerForm.value);
    }

    return {
      registerForm,
      store,
      register
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
