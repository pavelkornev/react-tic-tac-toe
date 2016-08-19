import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import _ from 'lodash';
import css from './styles.css';
import boardImg from './img/board.png';
import { clickCell } from '../../actions/board';

const cells = [
  { id: 0, area: '35,20,250,229', top: 60, left: 85 },
  { id: 1, area: '254,22,445,232', top: 60, left: 290 },
  { id: 2, area: '452,22,668,236', top: 60, left: 490 },

  { id: 3, area: '38,234,248,418', top: 250, left: 85 },
  { id: 4, area: '256,237,447,427', top: 250, left: 290 },
  { id: 5, area: '456,242,663,425', top: 250, left: 490 },

  { id: 6, area: '27,428,245,630', top: 460, left: 85 },
  { id: 7, area: '254,429,444,640', top: 460, left: 290 },
  { id: 8, area: '451,437,660,642', top: 460, left: 490 },
];

const Board = ({ cells_x, cells_o, clickCell }) => {
  const occupiedCells = [...cells_x, ...cells_o];
  const player = 'player' + (cells_x.length <= cells_o.length ? 1 : 2);

  return (
    <div className={css.board}>
      <img src={boardImg} width="702" height="721" useMap="board" alt="" />
      { occupiedCells.map(id =>
          <div
            key={id}
            className={classnames(css.board__cell, cells_x.indexOf(id) !== -1 ? css.view_x : css.view_o)}
            style={{
              top: `${cells[id].top}px`,
              left: `${cells[id].left}px`,
            }}
          />
        )
      }
      <map name="board">
        { _
          .filter(cells, ({ id }) => occupiedCells.indexOf(id) === -1)
          .map(({ id, area }) =>
            <area
              key={id}
              alt=""
              title=""
              onClick={clickCell.bind(null, player, id)}
              style={{ outline: 'none' }}
              shape="rect"
              coords={area}
            />
          )
        }
      </map>
    </div>
  );
};

export default connect((state) => ({
  cells_x: state.board.player1,
  cells_o: state.board.player2,
}), {
  clickCell,
})(Board);
