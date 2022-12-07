<template>
    <div>
        <HeaderComponentVue />
        <UpdateFormComponentVue />
        <FooterComponentVue />
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue';
import UpdateFormComponentVue from '@/components/UpdateFormComponent.vue';
import FooterComponentVue from '@/components/FooterComponent.vue';

export default {
    name: 'UpdatePage',
    components: {
        HeaderComponentVue,
        UpdateFormComponentVue,
        FooterComponentVue,
    }
}
</script>

<style>

</style>