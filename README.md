# DevDukaan.in Visit

DevDukaan.in is a responsive agency website built with React and Vite. Its shared enquiry form submits to a small Express API, which forwards enquiries to the configured Telegram chat without exposing the bot token to the browser.

## Local development

Copy `.env.example` to `.env` and set your Telegram bot token and chat ID. Then install dependencies and start both the API and Vite frontend:

```sh
npm install
npm run dev
```

Vite runs at `http://localhost:5173` and proxies `/api` requests to the Express API at `http://localhost:3001`. To run either process by itself, use `npm run dev:client` or `npm run dev:server`. The API reads `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `ALLOWED_ORIGIN`, and `TRUST_PROXY` from the server environment. Keep real credentials in the ignored local `.env` file or the API host's environment settings. Never use a `VITE_` prefix for the Telegram credentials.

The form calls `POST /api/enquiry`. To find the correct chat ID, start a conversation with [@DevdukaanAdmin_bot](https://t.me/DevdukaanAdmin_bot), send the bot a message, then inspect the `chat.id` in the bot's `getUpdates` response. For a group, add the bot, send a message in the group, and use that group's `chat.id` (usually a negative number). Never put the bot token in frontend code or publish it.

## Test an enquiry locally

1. Copy `.env.example` to `.env` and set valid `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` values.
2. Run `npm run dev`.
3. Open `http://localhost:5173`, submit the contact form, and confirm the message arrives in the configured Telegram chat.

The API validates all four form fields, limits request size, times out Telegram requests, and limits each client IP to three requests per minute in the running process.

## Deployment

Deploy the Vite frontend as a static site and deploy the `server` API as a Node.js service. On the API host, install dependencies with `npm ci` and start it with `npm start`; configure `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` as private server environment variables. Set `ALLOWED_ORIGIN` to the exact deployed website origin. If the API is behind a trusted reverse proxy, set `TRUST_PROXY=true` only when appropriate for that host.

Set `VITE_API_URL` to the public API endpoint (for example, `https://api.example.com/api/enquiry`) when building the frontend for deployment. This URL is public configuration; it must not contain credentials. The frontend and API can also share an origin if the hosting platform proxies `/api` to the Node service.

If a real Telegram bot token has ever been included in a source or example file, revoke it with BotFather and configure the replacement only in local/server environment variables.

## Checks

```sh
npm run lint
npm run build
```

The first-visit enquiry popup is delayed by five seconds and records its shown state in browser `localStorage`. Scroll-triggered reveals and decorative motion respect the user's reduced-motion preference.
