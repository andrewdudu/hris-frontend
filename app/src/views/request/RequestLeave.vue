<template>

    <v-container>
        <v-breadcrumbs :items="breadcrumbsItems" class="margin-top-minus">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <v-row class="dark" no-gutters>
            <v-col class="col-12 text-center">
                <h3 class="text-capitalize">{{ (this.$route.query.type !== 'EXTRA_LEAVE' && this.$route.query.type !== 'SUBSTITUTE_LEAVE')
                    ? 'Request Leave' : toLowerCase(this.$route.query.type) }}</h3>
            </v-col>
            <v-form class="col-12 no-gutters">
                <v-col class="col-12">
                    <v-text-field
                        id="date"
                        v-model="date"
                        label="Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        @click="modal = true"
                    />
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                    >
                        <v-date-picker
                            v-model="date"
                            no-title
                            :range="!this.config.leaveIsOneDay[this.$route.query.type]"
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
                                @click="$refs.dialog.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-col>
                <v-col v-if="this.$route.query.type === 'SICK_WITH_MEDICAL_LETTER'" class="col-12">
                    <v-file-input
                        id="file"
                        messages="Max file size : 1 MB"
                        accept="pdf/*"
                        label="Medical Letter"
                        v-model="pdf"
                        :rules="pdfRules"
                        @change="onFileChange"
                    />
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
                <v-col class="col-12">
                    <span class="dark">
                        You are using
                        <strong class="text-capitalize">{{ toLowerCase(this.$route.query.type) }}</strong>
                        Leave
                    </span>
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

<script src="./js/request-leave.js"></script>

<style lang="scss" scoped>

    .margin-top-minus {
        margin-top: -15px !important;;
    }

</style>
