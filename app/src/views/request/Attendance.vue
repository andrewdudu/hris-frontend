<template>

    <v-container>
        <v-row class="dark" no-gutters>
            <v-col class="col-12 text-center">
                <h3 class="text-capitalize">Request Attendance</h3>
            </v-col>
            <v-form class="col-12 no-gutters">
                <v-col class="col-12">
                    <v-text-field
                        v-model="date"
                        label="Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        @click="modal = true"
                    />
                    <v-dialog
                        ref="dateDialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                    >
                        <v-date-picker
                            v-model="date"
                            no-title
                            scrollable
                        >
                            <v-spacer/>
                            <v-btn
                                text
                                color="primary"
                                @click="modal = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.dateDialog.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-col>
                <v-col class="col-12">
                    <v-row>
                        <v-col class="d-flex" cols="6">
                            <v-dialog
                                ref="dialog"
                                v-model="menuStartHour"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        v-model="startHour"
                                        label="Clock In"
                                        prepend-icon="mdi-clock-outline"
                                        readonly
                                        v-on="on"
                                        :rules="startHourRules"
                                    />
                                </template>
                                <v-time-picker
                                    v-if="menuStartHour"
                                    v-model="startHour"
                                    full-width
                                >
                                    <v-spacer/>
                                    <v-btn text color="primary" @click="menuStartHour = false">Ok</v-btn>
                                </v-time-picker>
                            </v-dialog>
                        </v-col>
                        <v-col class="d-flex" cols="6">
                            <v-dialog
                                ref="dialog"
                                v-model="menuEndHour"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        v-model="endHour"
                                        label="Close Hour"
                                        prepend-icon="mdi-clock-outline"
                                        readonly
                                        v-on="on"
                                        :rules="endHourRules"
                                    />
                                </template>
                                <v-time-picker
                                    v-if="menuEndHour"
                                    v-model="endHour"
                                    full-width
                                >
                                    <v-spacer/>
                                    <v-btn text color="primary" @click="menuEndHour = false">Ok</v-btn>
                                </v-time-picker>
                            </v-dialog>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="col-12">
                    <v-textarea
                        v-model="note"
                        :rules="noteRules"
                        :counter="256"
                        maxlength="256"
                        label="Notes"
                    />
                </v-col>
                <v-col class="col-12 center margin-top">
                    <v-btn
                        :color="color.blubluedark1"
                        :disabled="!valid"
                        class="white--text"
                        @click="onRequest"
                    >
                        Request
                    </v-btn>
                </v-col>
            </v-form>
        </v-row>
    </v-container>

</template>

<script src="./js/attendance.js"></script>

<style lang="scss" scoped>



</style>
