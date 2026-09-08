<template>
    <Nuxt />
</template>


<script>

export default {
    head() {
        const siteUrl = 'https://systemice.ru'
        const routePath = this.$route && this.$route.path ? this.$route.path : '/'
        const canonicalPath = routePath === '/' ? '/' : routePath.replace(/\/+$/, '')

        return {
            link: [
                {
                    hid: 'canonical',
                    rel: 'canonical',
                    href: `${siteUrl}${canonicalPath}`
                }
            ]
        }
    },

    data(){
        return {}
    }
}
</script>
