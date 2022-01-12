import React from 'react'
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Lectii = () => {
    return (
        <Main>
            <Navbar />

            <Content>
              <Header>
                <h1>Invata mai usor</h1>
                <p>Citind <span>lectiile</span> urmatoare iti poti <span>imbunatatii</span> cunostintele de fizica</p>
              </Header>
            </Content>

            <Grid id="lectii" container spacing={4}>
                <Grid item md={3} sm={12}>
                   <Card id="lectie">
                       <img src="./images/blog-1.png" alt="imagine termodinamica" />
                       <Text>
                         <h1>Principiul I Al Termodinamicii</h1>
                         <p>În cazul în care un sistem termodinamic închis prezintă o variație a energiei sale interne...</p>
                          <Link to="/principiul-I-al-termodinamicii">
                            <button>
                              Citeste mai mult
                            </button>
                          </Link>
                       </Text>
                   </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                <Card id="lectie">
                       <img src="./images/blog-1.png" alt="imagine termodinamica" />
                       <Text>
                         <h1>In curand</h1>
                         <p>În cazul în care un sistem termodinamic închis prezintă o variație a energiei sale interne...</p>
                          <Link to="/">
                            <button>
                              Citeste mai mult
                            </button>
                          </Link>
                       </Text>
                   </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                <Card id="lectie">
                       <img src="./images/blog-1.png" alt="imagine termodinamica" />
                       <Text>
                         <h1>In curand</h1>
                         <p>În cazul în care un sistem termodinamic închis prezintă o variație a energiei sale interne...</p>
                          <Link to="/">
                            <button>
                              Citeste mai mult
                            </button>
                          </Link>
                       </Text>
                   </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                <Card id="lectie">
                       <img src="./images/blog-1.png" alt="imagine termodinamica" />
                       <Text>
                         <h1>In curand</h1>
                         <p>În cazul în care un sistem termodinamic închis prezintă o variație a energiei sale interne...</p>
                          <Link to="/">
                            <button>
                              Citeste mai mult
                            </button>
                          </Link>
                       </Text>
                   </Card>
                </Grid>
            </Grid>

        </Main>
    )
}

export default Lectii

const Main = styled.main`
  background-color: #011E3C;
  height: 110vh;
  color: #fff;

  #lectii {
      padding-top: 50px;
  }

  #lectie {
      margin-left: 20px;
  }
`;

const Content = styled.div`
  
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

const Card = styled.div`
  width: 300px;
  height: auto;
  background-color: #00468f;
  border-radius: 10px;
  padding-bottom: 30px;

  img {
      width: 300px;
      height: 200px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
  }

  h1 {
      font-size: 1.6em;
  }

  p {
      padding-bottom: 10px;
  }

  button {
      background: transparent;
      color: #fff;
      border: 2px solid #fff;
      width: 130px;
      height: 30px;
      border-radius: 2px;
      transition: .3s;
      cursor: pointer;

      &:hover {
          background-color: #fff;
          color: #000;
      }
  }
`;

const Text = styled.div`
   margin-left: 20px;
   padding-right: 10px;
`;