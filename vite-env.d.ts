/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MAD_ARCADE_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
