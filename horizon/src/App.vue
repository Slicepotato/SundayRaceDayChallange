<template>
  <div class="app-body">
    <SiteNav />
    <router-view/>
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav.vue'

export default {
  components: {
    SiteNav
  },
}
</script>


<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .form {
    &__register, &__login {
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
          input {
            padding: .5rem;
            border-radius: .25rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            transition: .25s all;
            
            &::placeholder {
              color: #ccc;
            }

            &:focus {
              outline: none;
              border: 1px solid #ed0d81;

              &::placeholder {
                color: #1a1a1a;
              }
            }
          }
        }
      }
    }
  }
</style>
