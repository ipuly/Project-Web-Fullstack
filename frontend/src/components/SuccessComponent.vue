<template>
    <div>
        <div class="row justify-content-center m-5">
            <div class="card-body border">
                <h5 class="card-title">Success!</h5>
                <p class="card-text">Student data has been <strong> {{ messages }}! </strong></p>
                <router-link to="/" v-if="messages == 'Inputed'" class="btn btn-primary">Close</router-link>
                <router-link to="/" v-else-if="messages == 'Updated'" class="btn btn-primary">Close</router-link>
                <button v-else class="btn btn-primary" @click="reloadPage">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuccessComponent',
    data() {
        return {
            messages: null,
        }
    },

    methods: {
        ubahMessages() {
            let route = this.$route.fullPath;
            if (route === "/add") {
                this.messages = "Inputed";
            } else if (route === "/") {
                this.messages = "Deleted";
            } else {
                this.messages = "Updated";
            }
        },
        reloadPage() {
            location.reload();
        }
    },
    mounted() {
        this.ubahMessages();
    }

}
</script>

<style>

</style>