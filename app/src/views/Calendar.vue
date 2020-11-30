<template>
    <div>
        <v-col class="col-7 bold dark no-gutters">
            <v-select
                :value="value"
                :color="color.blubluedark1"
                :items="month"
                prepend-icon="mdi-filter-variant"
                label="Filter"
                @change="onFilterChange"
            />
        </v-col>
        <div class="margin-top-calendar">
            <v-row v-bind:key="idx" v-for="(calendar, idx) in calendarDay" class="center" no-gutters>
                <div class="attendances center">
                    <v-card class="announcements-card padding last-attendance-card">
                        <v-row no-gutters>
                            <v-col class="col-12 margin">
                                <v-icon :color="color.blubluedark1" size="20">mdi-calendar</v-icon>
                                <span class="bold dark margin-left">{{ unixToShortDay(calendar.date) }}, {{ unixToString(calendar.date) }}</span>
                            </v-col>
                            <v-col class="col-12">
                                <v-icon :color="color.blubluedark1" size="20">mdi-map-marker-outline</v-icon>
                                <span class="dark margin-left text-capitalize">{{ calendar.status.toLowerCase() }}</span>
                            </v-col>
                            <v-col class="col-12 center">
                                <v-btn
                                    v-if="isPassed(calendar)"
                                    :color="color.blubluedark1"
                                    dark
                                >
                                    Set Holiday
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>
            </v-row>
        </div>
    </div>
</template>

<script src="./js/calendar.js"></script>

<style lang="scss" scoped>

    .attendances {
        width: 90%;
    }

    .announcements-card {
        width: 100%;
        margin-top: 10px;
        border-radius: 13px !important;
    }

    .margin-top-calendar {
        margin-top: -10px;
    }

</style>
