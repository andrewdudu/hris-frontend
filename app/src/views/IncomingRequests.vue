<template>
    <v-container v-if="incomingRequests !== null" >
        <v-breadcrumbs :items="breadcrumbsItems" class="margin-top-minus">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card class="dark">
                <v-card-title class="headline lighten-2 center text-capitalize">
                    Request {{ data.type.toLowerCase() }}
                </v-card-title>

                <v-card-text>
                    <v-row no-gutters>
                        <v-col class="col-12">
                            <span class="dark medium bold">{{ data.user.name }}</span>
                        </v-col>
                        <v-col class="col-12">
                            <span v-if="data.type === 'ATTENDANCE'"  class="dark">{{ unixToFullDate(data.detail.attendance.date.start) }}</span>
                            <div v-if="data.type === 'LEAVE'"  class="dark">
                                <span v-if="data.detail.leave.dates.length > 1">
                                    {{ dates[0] }}  -  {{ dates[dates.length - 1] }}
                                </span>
                                <span v-else>
                                    {{ data.detail.leave.dates[0] }}
                                </span>
                            </div>
                        </v-col>
                        <v-col v-if="data.type === 'ATTENDANCE'" class="col-12">
                            <span class="dark">{{ unixToTime(data.detail.attendance.date.start) }} - {{ unixToTime(data.detail.attendance.date.end) }}</span>
                        </v-col>
                        <v-col v-if="data.type === 'LEAVE'" class="col-12">
                            <span class="dark text-capitalize">{{ data.detail.leave.type.toLowerCase() }}</span>
                            <a v-if="data.detail.leave.type === 'SICK_WITH_MEDICAL_LETTER'" :href="url + data.detail.leave.files[0]"  target="_blank" class="dark"><br/>View Sick Letter</a>
                        </v-col>
                        <v-col class="col-12 margin-top">
                            <span class="dark">{{ data.detail[data.type.toLowerCase()].notes }}</span>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-row no-gutters>
                        <v-col class="col-6 text-align-right">
                            <v-btn
                                dark
                                :color="color.blubluedark1"
                                @click="onReject"
                            >
                                Reject
                            </v-btn>
                        </v-col>
                        <v-col class="col-5 text-align-left margin-left">
                            <v-btn
                                dark
                                :color="color.blubluedark1"
                                @click="onApprove"
                            >
                                Approve
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>

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

        <v-col v-if="departmentData.length !== 0" class="col-7 bold dark no-gutters">
            <v-select
                class="margin-filter"
                :value="value"
                :color="color.blubluedark1"
                :items="this.departmentData"
                prepend-icon="mdi-filter-variant"
                @change="onFilterChange"
            />
        </v-col>

        <v-row v-bind:key="idx" v-for="(request, idx) in incomingRequests" class="margin-top" @click="onClick(request)" no-gutters>
            <v-col class="col-2 margin-left dark">
                <v-avatar
                    :color="color.blubluedark"
                    size="60"
                >
                    <span class="white--text headline-small">{{ nameToInitials(request.user.name) }}</span>
                </v-avatar>
            </v-col>
            <v-col class="col-9 dark margin-top-name">
                <v-row class="margin-left-name" no-gutters>
                    <v-col class="col-9 bold">
                        <span class="medium">{{ request.user.name }}</span>
                    </v-col>
                    <v-col class="col-3 text-align-right">
                        <span class="small">{{ unixToDate(request.date) }}</span>
                    </v-col>
                    <v-col class="col-12 margin-top-description">
                        <span class="light-color small">{{ request.user.department }} - {{ request.user.office.name }}</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="col-12">
                <v-divider class="margin-top"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./js/incoming-requests.js"></script>

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

    .margin-filter {
        padding: 0;
        margin-top: -10px;
    }

    .margin-top-minus {
        margin-top: -15px !important;;
    }

</style>
