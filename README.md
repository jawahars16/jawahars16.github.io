# jawahar.sh

Personal site for Jawahar Selvaraj, a software engineer focused on backend
systems, distributed computing, and cloud infrastructure.

This site contains long-form articles, short visual explainers called
Bytes, and videos about distributed systems, cloud platforms, system design, and
the engineering practices that make codebases maintainable.

## What is here

- Articles on systems, cloud architecture, Go, Rust, reliability, and software
  engineering
- Bytes: compact visual explainers for engineering concepts
- Video links from the Jawahar Nutshell YouTube channel
- About page with skills, certifications, and social links

## Tech stack

- [Astro](https://astro.build/) for the static site
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Astro Content Collections for articles and Bytes
- GitHub Pages with `jawahar.sh` as the custom domain

## Project structure

```text
src/
  content/
    blog/       Long-form articles
    bytes/      Short visual explainers
  layouts/      Shared page layouts
  pages/        Site routes
public/
  assets/       Images, certificates, and static files
```

## Local development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Content

Add articles as Markdown files in `src/content/blog`. Each article should include
frontmatter for `title`, `date`, `description`, optional `tags`, and an optional
`heroImage`.

Add Bytes as Markdown files in `src/content/bytes`. Each Byte should include a
`title`, `image`, and optional `description`.
