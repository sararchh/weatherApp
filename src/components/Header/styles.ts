import styled from 'styled-components';
import media from 'styled-media-query';

export const Nav = styled.nav`
  width: 100%;
  height: 11rem;
  background: var(--header);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 6rem;
  
  h1{
    font-size: 2.25rem;
    color: var(--white);
    font-family: 'Josefin Sans', sans-serif;
  }
  
  div{
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    margin-top: -2rem;
  }
  
  ${media.lessThan("medium")`
  padding: 1rem 3rem;
  `}

  `;


export const InputContainer = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    button { 
      margin-top: 5.5rem;
      margin-left: -40px;
      border: none;
      outline: none;
      background: transparent;

      svg {
      color: var(--text);
      }
    }
   
  `;
export const Input = styled.input`
    width: 39rem;
    height: 3.20rem;
    border: none;
    border-radius: 2rem;
    padding: 1.5rem;
    margin-top: 5.5rem;
    color: var(--text);
    font-size: 0.9rem;
  `;