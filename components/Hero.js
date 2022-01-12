import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <Main>
           <video autoPlay muted loop id="video">
               <source src="./images/video.mp4" />
           </video>

          <Content>

              <Text>
              <h1>Sciencept</h1>
              <p>Invata <span>usor si rapid</span> fizica</p>
              </Text>

             <Button1>
               <Link to="/calculator" >
                   Calculeaza mai usor
               </Link>
             </Button1>

            <Button2>
               <Link to="/lectii" >
                   Acceseaza lectiile
               </Link>
            </Button2>

          </Content>

          <Copy>Coded by <a href="https://www.instagram.com/razvaniulian.ro/?hl=ro">Razvan</a></Copy>

        </Main>
    )
}

export default Hero;

const Main = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 100px);
    object-fit: fill;
  }

`;

const Content = styled.div`
  position: fixed;
  color: #fff;
  text-align: center;
  transform: translateY(-40%);
`;

const Text = styled.div`
  h1 {
    font-size: 4em;
  }

  p {
    font-size: 1.7em;
    transform: translateY(-80%);

    span {
      color: #FFC947;
    }
  }
`;

const Button1 = styled.a`
  background-color: transparent;
  border: 2px solid #fff;
  padding: 12px;
  transition: .3s;
  cursor: pointer;
  border-radius: 2px;
  margin-right: 40px;

  a {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background-color: #fff;

    a {
      color: #000;
    }
  }
`;

const Button2 = styled.a`
  background-color: #fff;
  padding: 15px;
  transition: .3s;
  cursor: pointer;
  border-radius: 2px;

  a {
    font-size: 20px;
    color: #000;
    text-decoration: none;
  }

  &:hover {
    background-color: transparent;
    border: 2px solid #fff;

    a {
      color: #fff;
    }
  }
`;

const Copy = styled.p`
  position: fixed;
  color: #fff;
  bottom: 0;
  font-size: 18px;

  a {
    color: #FFC947;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;