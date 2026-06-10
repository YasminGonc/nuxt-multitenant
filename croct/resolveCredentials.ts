import {getRequestHost} from 'h3';
import type {CredentialsResolver, CroctCredentials} from '@croct/plug-nuxt/types';

// Each tenant's host → its Croct credentials. Here it's a simple lookup; in a
// real app you'd fetch these from your own secrets service.
const TENANTS: Record<string, CroctCredentials> = {
    'acme.localhost': {appId: '<acme app id>', apiKey: '<acme api key>'},
    'globex.localhost': {appId: '<globex app id>', apiKey: '<globex api key>'},
};

const resolveCredentials: CredentialsResolver = event => TENANTS[getRequestHost(event).split(':')[0]] ?? null;

export default resolveCredentials;
