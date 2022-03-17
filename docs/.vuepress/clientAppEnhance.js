import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    router.beforeEach((to, from, next) => {
        //触发百度的pv统计
        if (typeof _hmt != "undefined") {
            if (to.path) {
            _hmt.push(["_trackPageview", to.fullPath])
            console.log("上报百度统计", to.fullPath)
            }
        }

        // continue
        next()
    });
})