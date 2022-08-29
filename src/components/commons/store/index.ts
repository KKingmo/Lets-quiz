import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const quizResultState = atom({
  key: "quizResultState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
