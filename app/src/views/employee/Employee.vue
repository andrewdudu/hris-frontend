<template>
    <v-container>
        <v-text-field
            v-model="search"
            color="grey"
            hide-no-data
            hide-selected
            item-text="Description"
            item-value="Search"
            placeholder="Start typing to Search"
            prepend-icon="mdi-magnify"
            return-object
        />
        <v-row no-gutters>
            <v-col class="col-12 text-align-right">
                <json-excel
                        :fetch="fetchExcelReportData"
                        :fields="excelFields"
                        :data="excelReport">
                    Download Excel
                </json-excel>
            </v-col>
        </v-row>
        <img v-if="employee.length === 0" class="img-class" src="./../../assets/img/empty.svg"  alt="not-found"/>
        <router-link v-bind:key="idx" v-for="(emp, idx) in employee" class="text-decoration-none" :to="`/employee/detail?id=${emp.id}`" no-gutters>
            <v-row class="margin-top" no-gutters>
                <v-col class="col-2 margin-left dark">
                    <v-avatar
                        :color="color.blubluedark"
                        size="60"
                    >
                        <span class="white--text headline-small">{{ nameToInitials(emp.name) }}</span>
                    </v-avatar>
                </v-col>
                <v-col class="col-9 dark margin-top-name">
                    <v-row class="margin-left-name" no-gutters>
                        <v-col class="col-9 bold">
                            <span class="medium">{{ emp.name }}</span>
                        </v-col>
                        <v-col class="col-12 margin-top-description">
                            <span class="light-color small">{{ emp.department }} - {{ emp.office.name }}</span>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="col-12">
                    <v-divider class="margin-top"/>
                </v-col>
            </v-row>
        </router-link>
    </v-container>
</template>


<script src="./js/employee.js"></script>

<style lang="scss" scoped>

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

    .img-class {
        width: 100%;
        padding: 30px;
        margin-top: 50px;
    }

</style>
