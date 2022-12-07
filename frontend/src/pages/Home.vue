<template>
    <div>
        <HeaderComponentVue/>
        <ViewComponentVue/>
        <FooterComponentVue/>
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue';
import ViewComponentVue from '@/components/ViewComponent.vue';
import FooterComponentVue from '@/components/FooterComponent.vue';

export default {
    name: 'HomePage',
    components: {
        HeaderComponentVue,
        ViewComponentVue,
        FooterComponentVue,
    }
}
</script>

<style>

</style>