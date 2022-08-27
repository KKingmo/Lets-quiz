import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const quizTypeState = atom({
  key: "quizState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
