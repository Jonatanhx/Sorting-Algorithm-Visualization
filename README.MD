## About

This is my thesis project for my frontend developer program. Taking inspiration from the [data sorting visualization](https://www.youtube.com/watch?v=kPRA0W1kECg&t=76s) youtube video created by Timo Bingmann I wanted to explore and learn more about data sorting algorithms and their use cases, while at the same time creating a educational tool for whoever may want to learn more about it themselves. I chose to do this project using the JavaScript framework Solid.js.

View the project [here](https://sorting-algorithm-visualization-ten.vercel.app/).

## Start Dev Server

```bash
npm run dev
```

This will start a dev server on port `3000` and will watch for changes.

## Testing Production Build

### Build

```bash
npm run build
```

### Start

```bash
npm run start
```

This will start a production server on port `3000`.

## The stack

### SolidJS

As of 2024, SolidJS is [benchmarked](https://github.com/krausest/js-framework-benchmark) as the fastest and most perfomant JavaScript framework, which is my motivation for trying it out. It feels natural to work with and follows the same principles as competing frameworks, but lacks the eco-system for common frontend tooling found in other frameworks.

### Prisma ORM + Mongodb

This project initially used a MongoDB database and Prisma ORM due to thesis requirements, but as of 2025-06-17 I've migrated to an array of arbitrary generated data for simplicity.

### Shadcn + Tailwind

I've used a mix of vanilla CSS for robustness and reusability, and tailwind for quick stylings and shorthand syntax. Tailwind is my preferred inline CSS-framework and is a necessary dependancy for using Shadcn components.

## Betygskriterier

## ==== G-krav ====

## Planering & Research

- [x] Målgruppsanalys.
- [x] Projekthanteringsverktyg.

## Design och Prototyping

- [x] Wireframes och prototyp.
- [x] Design för åtminstonde två skärmstorlekar.
- [x] WCAG 2.1-standarder.

## Applikationsutveckling

- [x] Modernt JavaScript framework.
- [x] Databas.
- [x] State-hantering.
- [x] Semantiskt HTML.
- [x] Responsiv för åtminstonde två skärmstorlekar.

## Versionshantering

- [x] Git.
- [x] Repo på Github.

## Slutrapport

- [x] Abstract
- [x] Tech stack och motivation av valen.
- [x] Dokumentation av arbetsprocess, planering och research.

## Deploy

- [x] Hostad och vara tillgängligt i webbläsare.

## ==== VG-krav ====

## Design och Prototyping

- [x] Interaktiv prototyp.
- [x] Prototyp väldigt lik riktiga produkten.
- [x] Designen följer WCAG 2.1-standarder **utan undantag** för nivå A och AA.

## Applikationsutveckling

- [x] Lösning för att hantering globala state.
- [x] Koden följer **utan undantag** WCAG 2.1-standarder för nivå A och AA.
- [x] Produkten ska vara optimerad, återanvända kod & komponenter.
- [x] CRUD-operationer & säker hantering av användardata.
- [x] Säker autentiseringslösning, t.ex. OAuth.
- [x] Fullt dynamisk och responsiv för alla enheter.

## Versionshantering

- [x] Feature bransches och pull requests.
- [x] Tydliga commit meddelanden.
- [x] Tydlig README.

## Slutrapport

- [x] Gå igenom varje steg av processen djupgående, reflektera.
- [x] Beskriv val av verktyg.
- [x] Motivera UX/UI val.

## Deploy

- [x] CI/CD pipeline.
