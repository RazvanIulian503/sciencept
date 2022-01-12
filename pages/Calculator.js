import { React, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';

const Calculator = () => {
    // Calcul pentru transformari grade
    const [ number, setNumber ] = useState('');
    const [ number1, setNumber1 ] = useState('');

    // Calcul pentru densitate
    const [ masa, setMasa ] = useState('');
    const [ vol, setVol ] = useState('');

    return (
        <Main>
            <Navbar />

            <Header>
                <h1>Calculeaza mai usor</h1>
                <p>Folosind <span>calculatorul</span> nostru vei reusi sa rezolvi <span>problemele</span> mult mai usor</p>
            </Header>

            <Grid container spacing={2}>
                <Grid id="calculator-item1" item md={6} sm={12}>
                   <p id="input-para">Transforma gradele °C in grade K</p>
                   <input type="text" onChange = {event => setNumber(parseInt(event.target.value) + 273)} placeholder="Introdu valoarea in °C" />
                   { number ?  <p>Valoarea ta este: { number } K </p> : null}
                </Grid>
                <Grid id="calculator-item2" item md={6} sm={12}>
                   <p id="input-para">Transforma gradele K in grade °C</p>
                   <input type="text" onChange = {event => setNumber1(parseInt(event.target.value) - 273)} placeholder="Introdu valoarea in K" />
                   { number1 ?  <p>Valoarea ta este: { number1 } °C </p> : null}
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid id="calculator-item3" item md={6} sm={12}>
                   <p id="input-para">Calculeaza densitatea</p>
                   <input type="text" onChange = {event => setMasa(parseInt(event.target.value))} placeholder="Introdu masa in Kg" />
                   <input id="input-pres" type="text" onChange = {event => setVol(parseInt(event.target.value))} placeholder="Introdu volumul in m3" />
                   { masa && vol ?  <p>Densitatea este egala cu: { masa / vol } Kg/m3 </p> : null}
                </Grid>
            </Grid>
        </Main>
    )

}

export default Calculator

const Main = styled.main`
  background-color: #011E3C;
  height: 100vh;
  color: #fff;

  #input-para {
      font-size: 1.3em;
      font-weight: 600;
  }

  input {
      background-color: transparent;
      border: none;
      color: #fff;
      border: 2px solid #fff;
      width: 220px;
      height: 25px;
      padding: 10px;
      border-radius: 5px;

      ::placeholder {
          color: #fff;
          font-size: 16px;
          opacity: .8;
      }
  }

  #calculator-item1 {
      padding-left: 130px;
      padding-top: 50px;
  }

  #calculator-item2 {
      padding-left: 50px;
      padding-top: 50px;
  }

  #calculator-item3 {
      padding-left: 130px;
      padding-top: 80px;
  }

  #input-pres {
      margin-left: 20px;
  }
`;

const Header = styled.div`
  text-align: center;
  color: #fff;
  padding-top: 1%;

  h1 {
      font-size: 2.5em;
  }

  p {
      font-size: 1.2em;
      transform: translateY(-50%);

      span {
          color: #FFC947;
      }
  }
`;