import { login } from "./login";
import { get } from 'svelte/store';

export let streaming = new WebSocket(`wss://${get(login).host}/streaming?i=${get(login).token}`);

login.subscribe((l) => {
  streaming.close();
  streaming = new WebSocket(`wss://${l.host}/streaming?i=${l.token}`);
});
