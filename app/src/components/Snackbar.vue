<template>
    <v-snackbar
            :color="snackbar.color"
            v-model="snackbar.isShown"
            class="snackbar no-gutters"
            top>
        <v-row no-gutters>
            <v-col class="col-10 margin-top-snackbar"><span>{{ snackbar.message }}</span></v-col>
            <v-col class="col-1"><v-btn text @click="onCloseClicked">Close</v-btn></v-col>
        </v-row>
    </v-snackbar>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "snackbar",
		computed: {
			...mapGetters('component', ["snackbar"]),
		},
		methods: {
			...mapActions('component', ['hideSnackbar']),
			onCloseClicked() {
				this.hideSnackbar();
			},
		},
	};
</script>

<style lang="scss" scoped>
    .snackbar {
        z-index: 2000;
        margin-top: 30px;
    }

    .margin-top-snackbar {
        margin-top: 7px !important;
    }
</style>
