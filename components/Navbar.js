import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">
                <img src='./images/logo.svg' />
            </Link>


            <div>
                <ul>
                    <Link to='/'>
                       <li>Acasa</li>
                    </Link>
                    <Link to='/calculator'>
                       <li>Calculator</li>
                    </Link>                        
                </ul>

                <button>
                    <Link to="/lectii">
                      <a>Lectii</a>
                    </Link>
                </button>
            </div>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
  background-color: #0A1931;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
      width: 80px;
      margin-left: 50px;
  }

  div {
      display: flex;


    ul {
      margin-right: 40px;

      li {
          display: inline-block;
          list-style: none;
          color: #fff;
          font-size: 20px;
          transition: .2s;
          margin: 20px;
          font-weight: 600;

          &:hover {
              color: #FFC947;
          }
      }
    }

    button {
        width: 100px;
        height: 40px;
        background-color: #FFC947;
        margin-top: 7%;
        border: none;
        border-radius: 25px;
        margin-right: 50px;
        transition: .3s;
        cursor: pointer;

        a {
            text-decoration: none;
            font-size: 20px;
            color: #fff;
        }

        &:hover {
            background-color: #fab000;
        }
    }

  }

`;