// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: {
        families: [
            {
                name: 'Montserrat',
                provider: 'google',
            },
        ],
    },
    modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', 'nuxt-aos'],
    aos: {
        disable: false,
        once: true,
        duration: 800,
        delay: 100,
    },
    srcDir: 'src/',
})
