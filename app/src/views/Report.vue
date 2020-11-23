<template>
    <v-row v-if="attendanceSummary !== null" no-gutters>
        <v-col class="col-12 center margin-top">
            <span class="dark large bold">
                Monthly Report
            </span>
        </v-col>
        <v-col class="col-12 margin-top">
            <doughnut-chart :chart-data="allData.month"/>
        </v-col>
        <v-col class="col-12 center margin-top">
            <span class="dark large bold">
                Annual Report
            </span>
        </v-col>
        <v-col class="col-12 margin-top">
            <doughnut-chart :chart-data="allData.year"/>
        </v-col>
    </v-row>
</template>

<script src="./js/report.js"></script>

<style lang="scss" scoped>



</style>
