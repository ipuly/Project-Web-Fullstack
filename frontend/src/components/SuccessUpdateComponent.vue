<template>
    <div>
        <div class="row justify-content-center my-5">
            <div class="card-body border">
                <h5 class="card-title">Success!</h5>
                <p class="card-text">Student data has been updated!</p>
                <router-link to="/" class="btn btn-primary">Close</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuccessUpdateComponent',
}
</script>

<style>

</style>