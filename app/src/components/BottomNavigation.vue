<template>
  <v-bottom-navigation
    :value="value"
    color="#0095DA"
    class="bottom-navigation"
  >
    <v-btn to="/">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Request</span>

      <v-icon>mdi-calendar-remove</v-icon>
    </v-btn>

    <v-btn>
      <span>Attendance</span>

      <v-icon>mdi-calendar</v-icon>
    </v-btn>

    <v-btn>
      <span>Reports</span>

      <v-icon>mdi-chart-line</v-icon>
    </v-btn>

    <v-btn>
      <span>Profile</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 0 }),
  }
</script>

<style lang="scss" scoped>
.bottom-navigation {
  position: fixed;
  align-items: center;
}

.v-btn {
  height: 100% !important;
}
</style>
