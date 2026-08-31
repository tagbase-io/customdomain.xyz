/// <reference types="vite/client" />

import type * as tagbase from "@tagbase-io/verify";

declare global {
  /** The script tag in index.html defines this. */
  interface Window {
    tagbase: typeof tagbase;
  }
}

interface ImportMetaEnv {
  readonly VITE_TAGBASE_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
