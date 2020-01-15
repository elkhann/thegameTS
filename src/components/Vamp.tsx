import React from "react";
import { StoreState } from "../types/index";

const Vamp: React.FC<StoreState> = props => {
  const { vamp, enemy, fight } = props;
  return (
    <div>
      Vamp info:
      <div>Name: {vamp.name}</div>
      <div>
        HP:{`${vamp.hp}/${vamp.maxHp}`}
        {fight.isStarted && <span>| -{enemy.damage}HP</span>}
      </div>
      <div>Attack: {vamp.att}</div>
      <div>Defence: {vamp.def}</div>
    </div>
  );
};

export default Vamp;
