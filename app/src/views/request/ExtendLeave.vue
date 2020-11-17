<template>

    <v-container v-if="extendLeave !== null">
        <v-row v-if="extendLeave.status === 'UNAVAILABLE'">
            <v-col class="col-12 center margin-top">
                <img class="image-svg" src="./../../assets/img/empty.svg"  alt="unavailable"/>
            </v-col>
        </v-row>
        <v-row v-if="extendLeave.status !== 'UNAVAILABLE'" class="dark" no-gutters>
            <v-col class="col-12 text-center">
                <h3 class="text-capitalize">Extend Leave</h3>
            </v-col>
            <v-form class="col-12 no-gutters">
                <v-col class="col-12">
                    <v-textarea
                            v-model="note"
                            :counter="256"
                            maxlength="256"
                            label="Notes"
                            :disabled="extendLeave.status === 'REQUESTED'"
                    />
                </v-col>
                <v-col class="col-12">
                    <span v-if="extendLeave.status === 'AVAILABLE'" class="dark">
                        <strong>{{ extendLeave.quota.remaining }} Leave(s) </strong>
                        remaining and will be extended until {{ toMonth(extendLeave.quota.extensionDate) }}
                    </span>
                    <span v-else class="dark">
                        You have requested.
                    </span>
                </v-col>
                <v-col class="col-12 center margin-top">
                    <v-btn
                            :color="color.blubluedark1"
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

<script src="./js/extend-leave.js"></script>

<style lang="scss" scoped>

    .image-svg {
        width: 80%;
    }

</style>
