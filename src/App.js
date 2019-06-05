import React, { Component, Fragment } from 'react';
import Controlado from './controlado';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tamano: '',
      tipo: ''
    };
  }

  render() {
    const { tamano, tipo } = this.state;

    return (
      <Fragment>
        <Controlado 
          tamano={tamano}
          tipo={tipo}
          onChangeTamano={(tamano) => {
            this.setState({tamano})
          }}
          onChangeTipo={(tipo) => {
            this.setState({ tipo })
          }}
          onClickAceptar={() => {
            console.log(this.state);
          }}
        />
      </Fragment>
    )
  }
}

export default App;
