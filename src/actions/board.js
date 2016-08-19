export const BOARD_CELL_CLICK = 'BOARD_CELL_CLICK';

export const clickCell = (player, id) => ({
  type: 'BOARD_CELL_CLICK',
  player,
  id,
});
