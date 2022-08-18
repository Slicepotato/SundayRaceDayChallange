<template>
  <main class="login">
    <section class="forms">
      <h1> This is Registration</h1>
      <form action="" class="form form__register">
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
              v-model="registerForm.email"
              required />
          </li>
          <li>
            <button type="submit" value="register">Register</button>
          </li>
        </ul>
      </form>
      <form action="" class="login"></form>
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
    const registerForm = ref({});
    const store = useStore();

    return {
      registerForm,
      store
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
