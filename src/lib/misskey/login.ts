// Environment variables don't matter
import { writable } from 'svelte/store';

export type Login = {
  host: string;
  user: string;
  token: string;
}

localStorage.getItem();

export const login = writable<Login>();
