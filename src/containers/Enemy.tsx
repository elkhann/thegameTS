import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../types/index";
// import {} from '../store/actions';

import Enemy from "../components/Enemy";

const EnemyContainer: React.FC<StoreState> = props => {
  const { enemy, vamp, fight } = props;
  return (
    <div>
      <Enemy enemy={enemy} vamp={vamp} fight={fight} />
    </div>
  );
};

const mapStateToProps = (store: StoreState) => {
  const { vamp, enemy, fight } = store;
  return { vamp, enemy, fight };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(EnemyContainer);
