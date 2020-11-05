<template>
  <v-app>
    <div
      class="header"
    >
      <img
        class="logo-header"
        src="./assets/img/default_2.png"
      />
    </div>

    <v-main class="main-view">
      <router-view />
    </v-main>

    <bottom-navigation />
  </v-app>
</template>

<script>
import BottomNavigation from './components/BottomNavigation';
import { mapActions } from "vuex";

export default {
  name: 'App',

  components: {
    BottomNavigation
  },

  methods: {
    ...mapActions('user', ['fetchCurrentUser'])
  },

  data: () => ({
    //
  }),

  created() {
    this.fetchCurrentUser();
  }
};
</script>

<style lang="scss">
$break_small: 620px;

.v-application {
  font-family: 'effra', 'Helvetica', sans-serif !important;

  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.logo-header {
  align-self: center;
  @media screen and (max-width: $break_small) {
    height: 200px;
  }
  @media screen and (min-width: $break_small+1) {
    height: 200px;
  }
}

.header {
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
  @media screen and (max-width: $break_small) {
    height: 70px;
  }
  @media screen and (min-width: $break_small+1) {
    height: 90px;
  }
}

@font-face {
  font-family: 'effra';
  src: url('https://www.static-src.com/fonts/1.0.0/effra/effra-regular.woff2') format('woff2'),
  url('https://www.static-src.com/fonts/1.0.0/effra/effra-regular.ttf') format('truetype');
}

@font-face {
  font-family: 'efframedium';
  src: url('https://www.static-src.com/fonts/1.0.0/effra/effraMedium-regular.woff2') format('woff2'),
  url('https://www.static-src.com/fonts/1.0.0/effra/efframedium-regular.ttf') format('truetype');
}
</style>
