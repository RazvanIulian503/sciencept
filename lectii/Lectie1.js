import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Lectie1 = () => {
    return (
        <Main>
            <Navbar />

            <Content>
                <Text>
                  <h1>Principiul I Al Termodinamicii</h1>
                  <img id="banner" src="./images/blog-1.png" alt="imagine termodinamica"></img>
                  <p>
                      Principiul I al termodinamicii este o lege de variatie si de conservare a energiei unui sistem termodinamic.
                  </p>
                  <p>
                      Energia internă a unui sistem termodinamic se poate modifica doar prin transfer de energie sub formă de căldură şi/sau lucru mecanic între sistem şi mediul său :
                  </p>
                  <img src="./lectii-images/princ-1.png"></img>
                  <p>
                      în care delta U este variatia energiei interne, Q reprezinta caldura schimbata de un sistem termodinamic cu mediul exterior, iar L este lucrul mecanic efectuat de sau asupra sistemului.
                  </p>
                  <p>
                      Cazuri particulare:
                  </p>
                  <p>
                    - transformarea izocoră:
                  </p>
                  <img src="./lectii-images/princ-1-1.png"></img>
                  <img src="./lectii-images/princ-1-2.png"></img>
                  <p>
                    - transformarea izobara:
                  </p>
                  <img src="./lectii-images/princ-1-3.png"></img>
                  <img src="./lectii-images/princ-1-4.png"></img>
                  <p>
                    - transformarea izoterma:
                  </p>
                  <img src="./lectii-images/princ-1-5.png"></img>
                </Text>
            </Content>

            <ButtonZone>
             <Link to="/calculator">
              <Button>
                 Calculator
              </Button>
             </Link>
            </ButtonZone>

        </Main>
    )
}

export default Lectie1

const Main = styled.main`
`;

const Content = styled.div`
  display: flex;
  text-align: center;
`;

const Text = styled.div`
  #banner {
    width: 900px;
    height: 350px;
    border-radius: 10px;
    margin-top: 20px;
    padding-bottom: 50px;
  }

  h1 {
      font-size: 2.5em;
      padding-top: 15px;
  }

  p {
    font-size: 1.5em;
    padding: 0 100px;
  }
`;

const ButtonZone = styled.div`
  padding-bottom: 80px;
  text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  width: 200px;
  height: 40px;
  border: 2px solid #000;
  border-radius: 3px;
  margin-top: 70px;
  cursor: pointer;
  transition: .3s;
  color: #000;
  font-size: 18px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;