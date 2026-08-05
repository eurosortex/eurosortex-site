export const GTM_ID = import.meta.env.PUBLIC_GTM_ID?.trim() || 'GTM-WJ29JSMT';

export const CONSENT_COOKIE = {
  name: 'eurosortex_consent',
  version: '1',
  maxAgeSeconds: 60 * 60 * 24 * 180,
} as const;
