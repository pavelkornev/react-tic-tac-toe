import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import css from './styles.css';

const List = ({ players }) => {
  return (
    <div className={css.list}>
      <div className={classnames(css.list__item, css.view_title)}>Waiting list</div>
      { players.length === 0
        ? <div className={classnames(css.list__item, css.view_empty)}>empty</div> 
        : players.map( ({ id, name }) => <div key={id} className={css.list__item}>{name}</div>)
        
      }
    </div>
  );
};


export default connect((state) => ({
  players: state.players,
}))(List);
