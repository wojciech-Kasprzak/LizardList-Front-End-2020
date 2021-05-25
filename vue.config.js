// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/style/scss/_var.scss";
                    @import "@/style/scss/_breakpoint.scss";
                `,
            }
        }
    }
}