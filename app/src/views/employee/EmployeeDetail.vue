<template>
    <v-container v-if="employeeDetail !== null">
        <v-breadcrumbs :items="breadcrumbsItems" class="margin-top-minus">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <v-dialog v-model="requestDialog">
            <v-card>
                <v-card-title class="headline lighten-2 dark">
                    Add Substitute Leave
                </v-card-title>

                <v-card-text>
                    <v-form>
                        <v-text-field v-model="total" type="number" label="Total"/>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="primary"
                        text
                        @click="onAddSubstituteLeave"
                        :disabled="!valid"
                    >
                        Add
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-row class="margin-top" no-gutters>
            <v-col class="col-2 margin-left dark">
                <v-avatar
                        :color="color.blubluedark"
                        size="60"
                >
                    <span class="white--text headline-small">{{ nameToInitials(employeeDetail.user.name) }}</span>
                </v-avatar>
            </v-col>
            <v-col class="col-7 dark margin-top-name">
                <v-row class="margin-left-name" no-gutters>
                    <v-col class="col-9 bold">
                        <span class="medium">{{ employeeDetail.user.name }}</span>
                    </v-col>
                    <v-col class="col-12 margin-top-description">
                        <span class="light-color small">{{ employeeDetail.user.department }} - {{ employeeDetail.user.office.name }}</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="col-12 margin-top">
                <v-divider />
            </v-col>
        </v-row>
        <v-row class="padding">
            <v-col class="col-12 center dark">
                <v-btn class="white--text" :color="color.blubluedark1" @click="requestDialog = true">
                    Add Substitute Leave
                </v-btn>
            </v-col>
            <v-col class="col-12 center dark medium bold">
                <span>Today Attendance</span>
            </v-col>
            <v-col class="col-3 dark bold">
                <span>Clock In</span>
            </v-col>
            <v-col class="col-3 dark">
                <span>: {{ employeeDetail.attendance.date.start ? unixToTime(employeeDetail.attendance.date.start) : '-' }}</span>
            </v-col>
            <v-col class="col-6 dark bold">
                <span>{{ employeeDetail.attendance.location.type || '-' }}</span>
            </v-col>
            <v-col class="col-3 margin-minus dark bold">
                <span>Clock Out</span>
            </v-col>
            <v-col class="col-3 margin-minus dark">
                <span>: {{ employeeDetail.attendance.date.end ? unixToTime(employeeDetail.attendance.date.end) : '-' }}</span>
            </v-col>
            <v-col class="col-6 margin-minus dark bold">
                <v-btn :color="color.blubluedark1" class="white--text" @click="dialog = true">Show Selfie</v-btn>
            </v-col>

            <v-col class="col-12 dark medium bold">
                <span>Location</span>
            </v-col>
            <v-col class="col-12 margin-minus map">
                <Map :coord="[employeeDetail.attendance.location.lat, employeeDetail.attendance.location.lon]" />
            </v-col>
        </v-row>
        <v-dialog v-model="dialog">
            <img :src="employeeDetail.attendance.image"  alt="selfie-image"/>
        </v-dialog>

    </v-container>
    <img v-else class="img-class" src="./../../assets/img/empty.svg"  alt="not-found"/>
</template>

<script src="./js/employee-detail.js"></script>

<style lang="scss" scoped>

    .img-class {
        width: 100%;
        padding: 30px;
        margin-top: 50px;
    }

    .margin-top-name {
        margin-top: 7px !important;
    }

    .margin-left-name {
        margin-left: 10px;
    }

    .margin-top-description {
        margin-top: -5px !important;
    }

    .headline-small {
        font-size: 20px;
    }

    .margin-minus {
        margin-top: -20px;
    }

    .map {
        height: 300px;
        width: 100%;
    }

    .margin-top-minus {
        margin-top: -15px !important;;
    }

</style>
