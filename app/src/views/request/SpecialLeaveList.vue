<template>
    <v-container v-if="availableSpecialRequests !== null" class="dark">
        <div v-bind:key="request" v-for="request in availableSpecialRequests">
            <router-link class="text-decoration-none" :to="`/request/leave?type=${request}`">
                <v-row class="margin-top dark" no-gutters>
                    <v-col class="col-11 text-capitalize">
                        {{ toLowerCase(request) }}
                    </v-col>
                    <v-col class="col-1">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-col>
                    <v-col class="col-12">
                        <v-divider class="margin-top"/>
                    </v-col>
                </v-row>
            </router-link>
        </div>
    </v-container>
</template>

<script src="./js/special-leave-list.js"></script>

<style lang="scss" scoped>



</style>
