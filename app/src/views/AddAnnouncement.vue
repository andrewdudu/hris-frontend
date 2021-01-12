<template>

    <v-container>
        <v-breadcrumbs :items="breadcrumbsItems" class="margin-top-minus">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <v-row class="dark" no-gutters>
            <v-col class="col-12 text-center">
                <h3 class="text-capitalize">Add Announcement</h3>
            </v-col>
            <v-form class="col-12 no-gutters">
                <v-col class="col-12">
                    <v-text-field
                        id="title"
                        v-model="title"
                        label="Title"
                        required
                    />
                </v-col>
                <v-col class="col-12">
                    <v-textarea
                            id="notes"
                            v-model="note"
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

<script src="./js/add-announcement.js"></script>

<style lang="scss" scoped>

    .margin-top-minus {
        margin-top: -15px !important;;
    }

</style>
