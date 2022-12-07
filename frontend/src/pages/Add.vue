<template>
    <div>
        <HeaderComponentVue />
        <AddFormComponentVue/>
        <FooterComponentVue />
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue';
import AddFormComponentVue from '@/components/AddFormComponent.vue';
import FooterComponentVue from '@/components/FooterComponent.vue';

export default {
    name: 'AddPage',
    components: {
        HeaderComponentVue,
        AddFormComponentVue,
        FooterComponentVue,
    }
}
</script>

<style>

</style>