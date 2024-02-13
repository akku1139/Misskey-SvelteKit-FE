import type { User } from "./user";

export type Note = {
  id: string;
  createdAt: string;
  userId: string;
  user: User;
  text: string;
  cw: string | null;
  visibility: "public" | "home" | "followers" | "specified",
  renoteCount: number;
  repliesCount: 0;
  reactions: {};
  reactionEmojis: {};
  reactionAndUserPairCache: [];
  emojis: {};
  fileIds: [];
  files: [];
  replyId: null;
  renoteId: null;
  uri: "https://fle.st/notes/9pnhf9u4er";
  clippedCount: 0;
};
