<template>
    <v-container>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
            />

            <v-text-field
                type="password"
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
            />

            <v-alert
                v-if="isError"
                dense
                outlined
                type="error"
            >
                <strong>Username</strong> or <strong>Password</strong> incorrect, please try again.
            </v-alert>

            <div class="center">
                <v-btn
                    :disabled="!valid"
                    :color="color.blubluedark1"
                    class="mr-4 white--text"
                    @click="onLogin"
                >
                    Login
                </v-btn>
            </div>

        </v-form>
    </v-container>
</template>

<script src="./js/login.js"></script>

<style lang="scss">

    .white-text {
        color: white;
    }

</style>
