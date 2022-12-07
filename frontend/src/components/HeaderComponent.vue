<template>
    <div>
        <img width="100%" src="@/assets/img_code.jpg" alt="">
        <router-link to="/add" v-show="routeLinkPath == '/'">
            <button class="btn btn-primary font-weight-bold ml-3 mt-3">Add Data</button>
        </router-link>
        <router-link to="/" v-show="routeLinkPath == '/add'">
            <button class="btn btn-primary font-weight-bold ml-3 mt-3">Back</button>
        </router-link>
        <router-link to="/" v-show="routeLinkName == 'update'">
            <button class="btn btn-primary font-weight-bold ml-3 mt-3">Back</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            routeLinkPath: this.$route.path,
            routeLinkName: this.$route.name
        }
    }
}
</script>

<style>

</style>