<template>
    <div>
        <v-col class="col-12 bold dark">
            <span class="padding-left">Announcements</span>
        </v-col>
        <v-row v-bind:key="announcement.id" v-for="announcement in announcements" class="center" no-gutters>
            <div class="announcements center">
                <v-card class="announcements-card padding">
                    <v-row no-gutters>
                        <v-col class="col-12">
                            <span class="bold medium dark">{{ announcement.title }}</span>
                        </v-col>
                        <v-col class="col-12 margin">
                            <v-icon :color="color.blubluedark1" size="17">mdi-calendar</v-icon>
                            <span class="small dark margin-left">{{ unixToString(announcement.date) }}</span>
                        </v-col>
                        <v-col class="col-12 margin-bot">
                            <p class="dark small">{{ announcement.description }}</p>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
        </v-row>
    </div>
</template>

<script src="./js/announcement.js"></script>

<style>

    .announcements {
        width: 90%;
    }

    .announcements-card {
        width: 100%;
        margin-top: 10px;
        border-radius: 13px !important;
    }

</style>
