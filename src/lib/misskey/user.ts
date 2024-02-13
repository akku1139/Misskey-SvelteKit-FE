import type { AvatarDecoration } from "./avatarDecoration.ts";

export type User = {
  "id": string;
  "name": string;
  "username": string;
  "host": string;
  "avatarUrl": string;
  "avatarBlurhash": string;
  "avatarDecorations": AvatarDecoration[];
  "isBot": false;
  "isCat": false;
  "instance": {
      "name": "ふれすたじお。";
      "softwareName": "misskey";
      "softwareVersion": "2023.12.2";
      "iconUrl": "https://fle.st/static-assets/icons/192.png";
      "faviconUrl": "https://cdn.discordapp.com/attachments/724225037279690792/1078318748538245191/77_20221119112955.png";
      "themeColor": "#fae46d"
  };
  "emojis": {
      "xflest_chance": "https://flest.sgp1.vultrobjects.com/null/6d39e705-0b9c-4176-8244-4442d27880fe.png";
      "fle": "https://flest.sgp1.vultrobjects.com/null/49736d4a-8423-41f1-bc7e-8b83f8ec8535.png";
      "st": "https://flest.sgp1.vultrobjects.com/null/98375347-47be-4408-88bd-53439e73e060.png"
  };
  "onlineStatus": "unknown";
};
