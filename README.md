# Croct Nuxt multi-tenant example

One Nuxt app serving multiple tenants, each with its own Croct **app ID** and
**API key**, resolved per request with the `credentialsResolver` option.

`croct/resolveCredentials.ts` maps the request host to a tenant's credentials —
here a simple lookup; in production you'd fetch them from your own service.

## Run

1. Fill in your apps' credentials in `croct/resolveCredentials.ts`.
2. Use a slot that exists in your apps in `pages/index.vue`.
3. Start it:
   ```sh
   npm install
   npm run dev
   ```
4. Open each tenant (Chrome resolves `*.localhost`):
   - http://acme.localhost:3000
   - http://globex.localhost:3000

The resolved app ID reaches the browser; the API key stays on the server.
