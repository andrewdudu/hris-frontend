<template>
    <v-container class="dark">
        <v-row no-gutters>
            <v-col class="col-12 text-align-left">
                <span class="bold padding large">Annual Leave</span>
            </v-col>
        </v-row>
        <v-container>
            <v-row class="margin" no-gutters>
                <v-col class="col-5 text-align-left">
                    <span class="bold padding-left">Remains</span>
                </v-col>
                <v-col class="col-7">
                    <span class="padding-right">: {{ annual.remaining }} leave(s)</span>
                </v-col>
            </v-row>
            <v-row class="margin" no-gutters>
                <v-col class="col-5 text-align-left">
                    <span class="bold padding-left">Used</span>
                </v-col>
                <v-col class="col-7">
                    <span class="padding-right">: {{ annual.used }} leave(s)</span>
                </v-col>
            </v-row>
            <v-row class="margin" no-gutters>
                <v-col class="col-5 text-align-left">
                    <span class="bold padding-left">Exp. Date</span>
                </v-col>
                <v-col class="col-7">
                    <span class="padding-right">: {{ unixToString(annual.expire) }}</span>
                </v-col>
            </v-row>
        </v-container>

        <v-row class="margin-top" no-gutters>
            <v-col class="col-12 text-align-left">
                <span class="bold padding large">Extra Leave</span>
            </v-col>
        </v-row>
        <v-container>
            <v-row class="margin" no-gutters>
                <v-col class="col-5 text-align-left">
                    <span class="bold padding-left">Remains</span>
                </v-col>
                <v-col class="col-7">
                    <span class="padding-right">: {{ extra.remaining }} leave(s)</span>
                </v-col>
            </v-row>
            <v-row class="margin" no-gutters>
                <v-col class="col-5 text-align-left">
                    <span class="bold padding-left">Used</span>
                </v-col>
                <v-col class="col-7">
                    <span class="padding-right">: {{ extra.used }} leave(s)</span>
                </v-col>
            </v-row>
            <v-row class="margin" no-gutters>
                <v-col class="col-5 text-align-left">
                    <span class="bold padding-left">Exp. Date</span>
                </v-col>
                <v-col class="col-7">
                    <span class="padding-right">: {{ unixToString(extra.expire) }}</span>
                </v-col>
            </v-row>
        </v-container>

        <v-row class="margin-top" no-gutters>
            <v-col class="col-12 text-align-left">
                <span class="bold padding large">Subtitute Leave</span>
            </v-col>
        </v-row>
        <v-container>
            <v-row class="margin" no-gutters>
                <v-col class="col-5 text-align-left">
                    <span class="bold padding-left">Remains</span>
                </v-col>
                <v-col class="col-7">
                    <span class="padding-right">: {{ substitute.remaining }} leave(s)</span>
                </v-col>
            </v-row>
            <v-row class="margin" no-gutters>
                <v-col class="col-5 text-align-left">
                    <span class="bold padding-left">Used</span>
                </v-col>
                <v-col class="col-7">
                    <span class="padding-right">: {{ substitute.used }} leave(s)</span>
                </v-col>
            </v-row>
            <v-row class="margin" no-gutters>
                <v-col class="col-5 text-align-left">
                    <span class="bold padding-left">Exp. Date</span>
                </v-col>
                <v-col class="col-7">
                    <v-row no-gutters>
                        <span class="">:</span>
                        <ul>
                            <li class="no-gutters" v-bind:key="exp" v-for="exp in substitute.expiries">
                                <v-col class="col-12">
                                    <span class="padding-right">{{ unixToString(exp) }}</span>
                                </v-col>
                            </li>
                        </ul>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script src="./js/profile-report"></script>

<style lang="scss" scoped>

</style>
