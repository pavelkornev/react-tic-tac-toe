import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import css from './styles.css';

const Header = ({ player1, player2 }) => {
  return (
    <div className={css.header}>
      <div className={classnames(css.header__cell, css.align_right)}>{player1 ? player1.name : '?'}</div>
      <div className={classnames(css.header__cell, css.view_separator)} />
      <div className={css.header__cell}>{player2 ? player2.name : '?'}</div>
    </div>
  );
};

export default connect((state) => ({
  player1: state.players[0],
  player2: state.players[1]
}))(Header);
