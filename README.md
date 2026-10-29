# DevDukaan.in

DevDukaan.in is a responsive agency website built with React and Vite. Its enquiry forms share client-side validation and submit through a Netlify Function to a configured Telegram chat.

## Local development

```sh
npm install
npm run dev
```

To exercise the enquiry function locally, install the Netlify CLI and run `netlify dev`. The function reads `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` from the server environment. Configure these values in the local Netlify environment or deployment dashboard; never add real credentials to frontend variables or commit them.

The production form endpoint is `/.netlify/functions/enquiry`. `VITE_ENQUIRY_ENDPOINT` may be set to override it when using a compatible serverless deployment.

## Checks

```sh
npm run lint
npm run build
```

The first-visit enquiry popup is delayed by five seconds and records its shown state in browser `localStorage`. Scroll-triggered reveals and decorative motion respect the user's reduced-motion preference.
