/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TAGBASE_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
