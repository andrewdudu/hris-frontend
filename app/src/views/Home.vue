<template>
  <div>
    <div class="wave-container">
      <v-row no-gutters>
        <v-col class="col-4 avatar-view">
          <v-avatar
            :color="color.blubluedark1"
            size="80"
          >
            <span class="white--text headline">{{ user.initials }}</span>
          </v-avatar>
        </v-col>
        <v-col class="col-1"/>
        <v-col class="col-7 avatar-info">
          <v-row no-gutters>
            <v-col cols="12"><span class="bold">Andrew Wijaya</span></v-col>
            <v-col cols="12" class="margin"><span>Technology - Sarana Jaya</span></v-col>
            <v-col cols="12"><span cols="6">9 Leave(s) left</span></v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path :fill="color.blublue" fill-opacity="1" d="M0,192L80,170.7C160,149,320,107,480,128C640,149,800,235,960,261.3C1120,288,1280,256,1360,240L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
  </div>
</template>

<script src="./js/home.js"></script>

<style lang="scss">

.wave-container {
  position: relative;
  padding-top: 30px;
  background: $blu-blue;
  color: #FFF;
  text-align: center;
  height: 170px;
}

.avatar-view {
  text-align: right;
}

.avatar-info {
  text-align: left;
  font-size: 15px;
}

.margin {
  margin-top: -5px;
}

.bold {
  font-family: $main-font-bold;
  font-size: 22px;
}

@keyframes animateWave {
  0% {
    transform: scale(1,0);
  }
  100% {
    transform: scale(1,1);
  }
}

svg {
  margin-top: -5px;
  display: block;
  transform-origin: top;
  animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

</style>
