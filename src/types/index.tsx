import { ActionType } from "typesafe-actions";
import * as actions from "../store/actions";

export interface StoreState {
  vamp: {
    name: string;
    hp: number;
    maxHp: number;
    att: number;
    def: number;
    damage: number;
  };

  enemy: {
    name: string;
    hp: number;
    maxHp: number;
    att: number;
    def: number;
    damage: number;
  };

  fight: {
    isStarted: boolean;
    isEnd: boolean;
    isError: boolean;
  };
}

export type GameActions = ActionType<typeof actions>;
