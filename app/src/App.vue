<template>
  <v-app>
    <div class="header">
      <v-btn
        icon
        light
        class="header-btn-left"
      >
        <router-link
                class="text-decoration-none"
                v-if="$routerHistory.hasPrevious()"
                :to="{ path: $routerHistory.previous().path }">
          <v-icon :color="color.blubluedark1">
            mdi-chevron-left
          </v-icon>
        </router-link>
      </v-btn>
      <img
        class="logo-header"
        src="./assets/img/default_2.png"
        alt="logo"/>
      <v-btn
        v-if="$route.path !== '/login'"
        small
        :color="color.blubluedark1"
        dark
        class="header-btn"
        @click="onLogout"
      >Logout</v-btn>
    </div>
    <Snackbar />

    <v-main class="main-view">
      <router-view />
    </v-main>

    <bottom-navigation />
  </v-app>
</template>

<script>
import BottomNavigation from './components/BottomNavigation';
import Snackbar from './components/Snackbar';
import { mapActions } from "vuex";
import color from "@/assets/js/color.js";

export default {
  name: 'App',

  components: {
    Snackbar,
    BottomNavigation
  },

  methods: {
    ...mapActions('user', ['fetchCurrentUser']),
    ...mapActions('authentication', ['postLogout']),
    onLogout() {
      this.postLogout()
        .then(() => this.$router.push('/login'));
    }
  },

  computed: {
    hasHistory() {
      return this.$router;
    },
    backIsShown() {
      return document.referrer
    }
  },

  data() {
    return {
      color
    }
  },

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

.header-btn {
  align-self: center;
  position: absolute;
  right: 10px;
}

.header-btn-left {
  align-self: center;
  position: absolute;
  left: 17px;
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
