<template>
    <div>
        <v-col class="col-7 bold dark no-gutters">
            <v-select
                    v-model="value"
                    :color="color.blubluedark1"
                :items="['This Week', 'This Month']"
                prepend-icon="mdi-filter-variant"
                label="Filter"
                @change="onFilterChange"
            />
        </v-col>
        <v-row v-bind:key="idx" v-for="(attendance, idx) in attendances" class="center" no-gutters>
            <div class="attendances center">
                <v-card class="announcements-card padding last-attendance-card">
                    <v-row no-gutters>
                        <v-col class="col-12 margin">
                            <v-icon :color="color.blubluedark1" size="20">mdi-calendar</v-icon>
                            <span class="bold dark margin-left">{{ unixToShortDay(attendance.date.start) }}, {{ unixToString(attendance.date.start) }}</span>
                        </v-col>
                        <v-col class="col-12">
                            <v-icon :color="color.blubluedark1" size="20">mdi-clock-outline</v-icon>
                            <span class="dark margin-left">
                                {{ unixToTime(attendance.date.start) }} - {{ unixToTime(attendance.date.end) }}
                            </span>
                        </v-col>
                        <v-col class="col-12">
                            <v-icon :color="color.blubluedark1" size="20">mdi-map-marker-outline</v-icon>
                            <span class="dark margin-left text-capitalize">{{ attendance.location.type.toLowerCase() }} Office</span>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
        </v-row>
    </div>
</template>

<script src="./js/attendance.js"></script>

<style lang="scss" scoped>

    .attendances {
        width: 90%;
    }

    .announcements-card {
        width: 100%;
        margin-top: 10px;
        border-radius: 13px !important;
    }

</style>
