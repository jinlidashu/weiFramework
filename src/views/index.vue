<template>
    <div class="liang-layout">
        <div class="liang-left-aside">
            <liang_menu_aside/>
        </div>
        <div class="liang-right-aside">
            <div class="liang-top-aside">
                <liang_header_aside/>
            </div>
            <div class="liang-content-main">
                <router-view/>
            </div>
        </div>

    </div>
</template>

<script>
    import liang_menu_aside from '@/components/liang_menu_aside'
    import liang_header_aside from '@/components/liang_header_aside'

    export default {
        name: "index",
        components: {
            liang_header_aside,
            liang_menu_aside
        }
    }
</script>

<style scoped>

</style>
