/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly JOY_PUBLIC_SENTRY_DSN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
