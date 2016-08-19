import * as ActionTypes from '../actions/player';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.PLAYER_ADD:
      const { id, name } = action;
      return [...state, {
        id,
        name,
      }];
    default:
      return state;
  }
};
