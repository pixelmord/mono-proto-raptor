import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL,
  },
});
