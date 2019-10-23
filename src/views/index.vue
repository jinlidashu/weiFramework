<template>
    <div class="liang-layout">
        <div class="liang-top-aside">

        </div>
        <div class="liang-content-main">
            <div class="liang-left-aside">
                <liang_menu_aside />
            </div>
            <div class="liang-right-aside">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import liang_menu_aside from '@/components/liang_menu_aside'
    export default {
        name: "index",
        components:{
            liang_menu_aside
        }
    }
</script>

<style scoped>

</style>
