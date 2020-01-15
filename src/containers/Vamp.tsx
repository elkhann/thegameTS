import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../types/index";
// import {} from '../store/actions';

import Vamp from "../components/Vamp";

const VampContainer: React.FC<StoreState> = props => {
  const { vamp, enemy, fight } = props;
  return (
    <div>
      <Vamp vamp={vamp} enemy={enemy} fight={fight} />
    </div>
  );
};

const mapStateToProps = (store: StoreState) => {
  const { vamp, enemy, fight } = store;
  return { vamp, enemy, fight };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(VampContainer);
