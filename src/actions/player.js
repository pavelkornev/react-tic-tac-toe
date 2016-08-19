export const PLAYER_ADD = 'PLAYER_ADD';

export const addPlayer = (id, name) => ({
  type: PLAYER_ADD,
  id,
  name,
});
