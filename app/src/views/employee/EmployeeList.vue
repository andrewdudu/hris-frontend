<template>
    <v-container v-if="departments !== null" class="dark">
        <div v-bind:key="department.code" v-for="department in departments">
            <router-link class="text-decoration-none" :to="`/employee?department=${department.code}`">
                <v-row class="margin-top dark" no-gutters>
                    <v-col class="col-11 text-capitalize">
                        {{ toLowerCase(department.code) }}
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

<script src="./js/employee-list.js"></script>

<style lang="scss" scoped></style>
