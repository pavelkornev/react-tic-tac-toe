import * as ActionTypes from '../actions/board';

export default (state = {
  player1: [],
  player2: [],
}, action) => {
  switch (action.type) {
    case ActionTypes.BOARD_CELL_CLICK:
      const { player, id } = action;
      return Object.assign({}, state, {
        [player]: [...state[player], id],
      });
    default:
      return state;
  }
};
