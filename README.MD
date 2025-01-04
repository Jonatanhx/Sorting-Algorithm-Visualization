## About
This is my thesis project for my frontend developer program. Taking inspiration from the [data sorting visualization](https://www.youtube.com/watch?v=kPRA0W1kECg&t=76s) youtube video created by Timo Bingmann I wanted to explore and learn more about data sorting algorithms and their use cases, while at the same time creating a educational tool for whoever may want to learn more about it themselves. Utilizing real world data sets and SolidJS JavaScript framework, i blend a mix of realism and rendering efficiency in this project. 

view the deployed project [here](https://sorting-algorithm-visualization-ten.vercel.app/).

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
As of 2024, SolidJS is [benchmarked](https://github.com/krausest/js-framework-benchmark) as the fastest and most perfomant JavaScript framework, making it an obvious choice to use for demanding tasks like sorting large sets of data, with the downside of a minimal ecosystem.

### Prisma ORM + SQLite
Prisma was my choice of ORM due to its performance, syntax readability as well as my familiarity with it. I chose to pair it with SQLite as my database because i saw no reason to host it on the cloud, as its an unnecessary layer of complexity with little to no gain for a project of this small size.

### Shadcn + Tailwind
I chose Shadcn as my component library, which is used for a variety of buttons, dialogs and menus. Unlike other component libraries, shadcn gives you the source code of each component directly in your project, making you able to tweak any little part of its functionality as you wish, which i have used extensively. Tailwindcss is my preferred inline syntax for css, and is also needed to be paired with shadcn to work. 

### Betygskriterier

## ==== G-krav ====

## Planering & Research
* [] Målgruppsanalys.
* [x] Projekthanteringsverktyg.
  
## Design och Prototyping
* [] Wireframes och prototyp.
* [] Design för åtminstonde två skärmstorlekar.
* [] WCAG 2.1-standarder.

## Applikationsutveckling
* [x] Modernt JavaScript framework.
* [x] Databas.
* [x] State-hantering.
* [x] Semantiskt HTML.
* [x] Responsiv för åtminstonde två skärmstorlekar.

## Versionshantering
* [x] Git.
* [x] Repo på Github.

## Slutrapport
* [] Abstract
* [] Tech stack och motivation av valen.
* [] Dokumentation av arbetsprocess, planering och research.

## Deploy
* [] Hostad och vara tillgängligt i webbläsare.

## ==== VG-krav ====

## Design och Prototyping
* [] Interaktiv prototyp.
* [] Prototyp väldigt lik riktiga produkten.
* [] Designen följer WCAG 2.1-standarder **utan undantag** för nivå A och AA.

## Applikationsutveckling
* [x] Lösning för att hantering globala state.
* [] Koden följer **utan undantag** WCAG 2.1-standarder för nivå A och AA.
* [x] Produkten ska vara optimerad, återanvända kod & komponenter.
* [x] CRUD-operationer & säker hantering av användardata.
* [x] Säker autentiseringslösning, t.ex. OAuth.
* [x] Fullt dynamisk och responsiv för alla enheter.

## Versionshantering
* [x] Feature bransches och pull requests.
* [x] Tydliga commit meddelanden.
* [x] Tydlig README.

## Slutrapport
* [] Gå igenom varje steg av processen djupgående, reflektera.
* [] Beskriv val av verktyg.
* [] Motivera UX/UI val.

## Deploy
* [] CI/CD pipeline.