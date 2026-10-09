# Kommo form setup

The product enquiry form posts to the Cloudflare Pages Function at
`/api/inquiry`. The function creates a lead and contact in Kommo and then adds
the complete enquiry as a lead note.

## Attribution and test enquiries

For the existing `anydayspl` account, the function also writes the latest
available attribution touch into its existing lead tracking fields in the same
request that creates the lead: utm_content (772241), utm_medium (772243),
utm_campaign (772245), utm_source (772247), utm_term (772249), referrer (772253),
gclid (772257), fbclid (772259). Field labels and IDs were verified in Kommo's
Statistics tab on 2026-10-09. They are deliberately not used for other accounts.
The note retains both first and last touch, including identifiers that have no
matching standard field. Missing attribution is left unknown, not invented as
direct traffic. Existing leads are not backfilled or overwritten.

Successful responses include `lead_created: true`. The frontend counts
`generate_lead` only for confirmed non-test leads. Enquiries using reserved
`.invalid` email domains are named `TEST · NIE OBSŁUGIWAĆ`, tagged `website-test`,
and return `test_lead: true`; they do not count as website conversions. This is
a reporting convention, not a bypass for validation or CRM automation. A
honeypot response is neutral success with `lead_created: false`.

Do not sum contact clicks, new leads, qualified leads and sales. Exclude the
`website-test` tag from CRM sales reports. Historical test #25190214 is identified
by its explicit TEST title; older GA4 events are not retroactively removed.

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
