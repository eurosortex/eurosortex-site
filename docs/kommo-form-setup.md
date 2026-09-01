# Kommo form setup

The product enquiry form posts to the Cloudflare Pages Function at
`/api/inquiry`. The function creates a lead and contact in Kommo and then adds
the complete enquiry as a lead note.

## One-time Kommo setup

1. In Kommo, open **Settings → Integrations → Create integration**.
2. Create a **private integration** for the EuroSortex website.
3. Generate a long-lived access token. Copy it once and keep it in a password
   manager; never add it to this repository or paste it into browser code.

## One-time Cloudflare setup

In **Workers & Pages → eurosortex.com project → Settings → Variables and
Secrets**, add these values for Production (and Preview if form testing is
required there):

| Name | Type | Value |
| --- | --- | --- |
| `KOMMO_ACCESS_TOKEN` | Secret (encrypted) | long-lived token from Kommo |
| `KOMMO_SUBDOMAIN` | Variable | `anydayspl` |
| `KOMMO_PIPELINE_ID` | Variable | `14241439` |
| `KOMMO_STATUS_ID` | Variable, optional | numeric ID of the “Новая заявка” stage |

The pipeline and subdomain already have matching defaults in the function. Set
`KOMMO_STATUS_ID` only when the pipeline's default first stage is not “Новая
заявка”.

After adding or changing a secret, redeploy the site. Then submit a test enquiry
with a distinctive name and confirm that it appears in the
**EUROSORTEX — ЗАЯВКИ B2B** pipeline with the contact details and enquiry note.
