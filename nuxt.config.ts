export default defineNuxtConfig({
    modules: ['@croct/plug-nuxt'],

    croct: {
        // Resolve each tenant's app ID and API key per request.
        credentialsResolver: './croct/resolveCredentials',
    },

    // Demo only: allow the *.localhost tenant subdomains during development.
    vite: {
        server: {
            allowedHosts: true,
        },
    },

    compatibilityDate: '2025-01-01',
});
