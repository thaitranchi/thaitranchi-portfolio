# thaitranchi-portfolio

Personal portfolio site for **Trần Chí Thái** — built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com), and [Firebase](https://firebase.google.com) for the contact form and analytics.

You can deploy from this repo to **Vercel**, **AWS Amplify**, or **AWS container services** (ECS, App Runner, EKS) using the files in the root directory.

## Features

- Landing sections: hero, about, projects (with GitHub links), contact form, footer
- Dedicated [`/contact`](src/app/contact/page.tsx) page with map and social links
- Shared social profiles in [`src/components/SocialLinks.tsx`](src/components/SocialLinks.tsx)
- Contact submissions to **Firestore** when Firebase env vars are set; otherwise the form falls back to the system mail client
- **Google Analytics for Firebase** when `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` is set

## Tech stack

| Area        | Choice                          |
| ----------- | ------------------------------- |
| Framework   | Next.js 15, React 18, TypeScript |
| Styling     | Tailwind CSS                    |
| Icons       | lucide-react                    |
| Backend (client) | Firebase (Firestore, Analytics) |

## Prerequisites

- [Node.js](https://nodejs.org/) LTS (see [`.nvmrc`](.nvmrc) if you use nvm)

## Local development

```bash
npm install
cp .env.local.example .env.local
# Edit .env.local with your Firebase web app config (Project settings → Your apps).
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy [`.env.local.example`](.env.local.example) to `.env.local` and fill in values from the Firebase Console (**Project settings** → **Your apps** → Web app). All variables are prefixed with `NEXT_PUBLIC_` so they are available in the browser.

Do **not** commit `.env.local` (it is listed in [`.gitignore`](.gitignore)). For production hosts (e.g. Vercel), add the same variables in the project’s environment settings.

### Firestore

1. Enable **Firestore** in the Firebase project.
2. Deploy or paste the rules from [`firestore.rules`](firestore.rules) so only `contactMessages` creates are allowed from the client, with the fields the app sends.

Contact writes use the collection **`contactMessages`** (see [`src/lib/submitContactMessage.ts`](src/lib/submitContactMessage.ts)).

## Scripts

| Command          | Description        |
| ---------------- | ------------------ |
| `npm run dev`    | Development server |
| `npm run build`  | Production build   |
| `npm run start`  | Run production build locally |
| `npm run lint`   | ESLint             |
| `npm run typecheck` | TypeScript check |

## Project layout

```
src/
  app/           # App Router: layout, page, contact route
  components/    # UI sections and Firebase analytics wrapper
  lib/           # Firebase init and Firestore submit helper
  styles/        # Global CSS
```

## Deploy

[`next.config.ts`](next.config.ts) sets **`output: 'standalone'`** so Next.js emits a minimal server bundle for **Docker**-based hosting. Amplify and Vercel still run `npm run build` as usual.

### Vercel

Import the repo, add the same `NEXT_PUBLIC_FIREBASE_*` variables as in `.env.local`, and deploy.

### AWS Amplify Hosting

1. In the [Amplify console](https://console.aws.amazon.com/amplify/), create an app from this Git repository.
2. Amplify will pick up [`amplify.yml`](amplify.yml) for install and build.
3. Under **App settings → Environment variables**, add every key from [`.env.local.example`](.env.local.example) (same names as local development).
4. Save and deploy. Node version follows [`.nvmrc`](.nvmrc) via `nvm install` / `nvm use` in the build spec.

If the console offers **auto-detected** Next.js settings and the build succeeds, you can keep those; the checked-in `amplify.yml` is a sensible default for `npm ci` and `npm run build`.

Further reading: [Deploy Next.js SSR on Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs.html).

### AWS with Docker (ECS, Fargate, App Runner, EKS)

The [`Dockerfile`](Dockerfile) runs a production **standalone** server on port **3000**.

`NEXT_PUBLIC_*` values are **baked in at build time**. Pass them as build arguments (or use your CI secret store to inject them):

```bash
docker build \
  --build-arg NEXT_PUBLIC_FIREBASE_API_KEY=your_key \
  --build-arg NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain \
  --build-arg NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_id \
  --build-arg NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket \
  --build-arg NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender \
  --build-arg NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id \
  --build-arg NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_ga_id \
  -t thaitranchi-portfolio .

docker run -p 3000:3000 thaitranchi-portfolio
```

Typical flow: push the image to [Amazon ECR](https://aws.amazon.com/ecr/), then create an **App Runner** service from the image or run a task/service on **ECS/Fargate** with port 3000 and the same env expectations at **build** time in CI.

### General

Further reading: [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

Private / all rights reserved unless you add an explicit license.
