// Environment variables don't matter
import { writable } from 'svelte/store';

export type Env = {
  host: string;
  user: string;
}

localStorage.getItem();

const env = writable<Env>();
