<template>
    <div>
        <div class="wave-container">
            <v-row no-gutters>
                <v-col class="col-4 text-align-right">
                    <v-avatar
                        :color="color.blubluedark1"
                        size="80"
                    >
                        <span class="white--text headline">{{ initials }}</span>
                    </v-avatar>
                </v-col>
                <v-col class="col-1"/>
                <v-col class="col-7 avatar-info text-align-left">
                    <v-row v-if="Object.keys(currentUser).length !== 0" no-gutters>
                        <v-col cols="12"><span class="bold large">{{ currentUser.name }}</span></v-col>
                        <v-col cols="12" class="margin"><span>{{ currentUser.department }} - {{ currentUser.office.name }}</span></v-col>
                        <v-col cols="12"><span>{{ currentUser.leave.remaining }} Leave(s) left</span></v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path :fill="color.blublue" fill-opacity="1"
                  d="M0,192L80,170.7C160,149,320,107,480,128C640,149,800,235,960,261.3C1120,288,1280,256,1360,240L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
        </svg>
        <v-col class="col-12 center">
            <div v-if="Object.keys(currentUser).length !== 0" class="clock">
                <v-row class="clock-info margin-top" no-gutters>
                    <v-col class="col-4 text-align-left clock-detail">
                        <span class="bold padding large">Profile</span>
                    </v-col>
                    <v-col class="col-8 text-align-right">
                        <span class="padding-right small">Join since {{ unixToString(currentUser.joinDate) }}</span>
                    </v-col>
                </v-row>
                <v-row class="clock-info margin-top" no-gutters>
                    <v-col class="col-5 text-align-left clock-detail">
                        <span class="bold padding-left">Email</span>
                    </v-col>
                    <v-col class="col-7">
                        <span class="padding-right">: {{ currentUser.username }}</span>
                    </v-col>
                </v-row>
                <v-row class="clock-info margin" no-gutters>
                    <v-col class="col-5 text-align-left clock-detail">
                        <span class="bold padding-left">Annual Leave</span>
                    </v-col>
                    <v-col class="col-7">
                        <span v-if="userProfile !== null" class="padding-right">: {{ userProfile.quota.annual }} leave(s)</span>
                    </v-col>
                </v-row>
                <v-row class="clock-info margin" no-gutters>
                    <v-col class="col-5 text-align-left clock-detail">
                        <span class="bold padding-left">Extra Leave</span>
                    </v-col>
                    <v-col class="col-7">
                        <span v-if="userProfile !== null" class="padding-right">: {{ userProfile.quota.extra }} leave(s)</span>
                    </v-col>
                </v-row>
                <v-col class="col-12 center">
                    <v-btn
                        depressed
                        :color="color.blubluedark1"
                        dark
                        @click="onSeeDetail"
                    >
                        See Details
                    </v-btn>
                </v-col>

                <v-row class="clock-info margin-top" no-gutters>
                    <v-col class="col-12 text-align-left clock-detail">
                        <span class="bold padding large">Attendances & Leaves</span>
                    </v-col>
                </v-row>
                <v-row class="margin-top"/>

                <v-container class="margin-top-minus">

                    <v-tabs
                        v-model="tab"
                        background-color="white"
                        fixed-tabs
                    >
                        <v-tab
                            v-for="item in items"
                            :key="item.tab"
                        >
                            {{ item.tab }}
                        </v-tab>
                    </v-tabs>

                    <v-tabs-items class="margin-top" v-model="tab">
                        <v-tab-item
                            v-for="item in items"
                            :key="item.tab"
                        >
                            <v-card flat>
                                <v-card-text>
                                    <div v-if="userProfile !== null && userProfile.leave[item.content] !== undefined">
                                        <v-row v-bind:key="key" v-for="(value, key) in userProfile.leave[item.content]" class="clock-info" no-gutters>
                                                <v-col v-if="value !== 0" class="col-6 text-align-left clock-detail">
                                                    <span class="bold padding-left text-capitalize">{{ camelCaseToTitleCase(key) }}</span>
                                                </v-col>
                                                <v-col v-if="value !== 0" class="col-6">
                                                    <span v-if="userProfile !== null" class="padding-right">: {{ value }} day(s)</span>
                                                </v-col>
                                        </v-row>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-container>
            </div>
        </v-col>
    </div>
</template>

<script src="./js/profile.js"></script>

<style lang="scss" scoped>

    .clock {
        width: 95%;
        z-index: 0;
        background-color: white;
        margin-top: -130px;
        height: 100%;
        justify-content: center;
        border-radius: 15px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
    }

    .wave-container {
        position: relative;
        padding-top: 30px;
        background: $blu-blue;
        color: #FFF;
        text-align: center;
        height: 170px;
    }

    .clock-detail {
        padding-left: 10px !important;
    }

    .clock-info {
        color: $blu-blue-dark-1;
    }

    .margin-top-minus {
        margin-top: -15px !important;
    }

</style>
