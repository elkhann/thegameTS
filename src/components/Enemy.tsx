import React from "react";
import { StoreState } from "../types/index";

const Enemy: React.FC<StoreState> = props => {
  const { vamp, enemy } = props;
  return (
    <div>
      Enemy info:
      <div>Name: {enemy.name}</div>
      <div>
        HP:{`${enemy.hp}/${enemy.maxHp}`}
        {vamp.damage > 0 ? <span>| -{vamp.damage}HP</span> : ""}
      </div>
      <div>Attack: {enemy.att}</div>
      <div>Defence: {enemy.def}</div>
    </div>
  );
};

export default Enemy;
