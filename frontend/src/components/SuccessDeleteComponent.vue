<template>
    <div>
        <div class="row justify-content-center my-5">
            <div class="card-body border">
                <h5 class="card-title">Success!</h5>
                <p class="card-text">Student data has been Deleted!</p>
                <button @click.prevent="reloadPage" class="btn btn-primary">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuccessDeleteComponent',
    methods: {
        reloadPage(){
            location.reload();
        }
    }
}
</script>

<style>

</style>