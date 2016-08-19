import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from '../components/App';

export default class Root extends Component {

  //componentDidMount() {
  //  setTimeout(() => {
  //    const name = window.prompt('Please, enter your name:');
  //    console.log(name);
  //  }, 10);
  //}

  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
}


Root.propTypes = {
  store: PropTypes.object.isRequired,
};
