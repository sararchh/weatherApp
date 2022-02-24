import styled from 'styled-components';

export const Container = styled.div`
width: 40rem;
height: 4rem;
background: var(--white);
border-radius: 0.2rem;
box-shadow: 0px 0px 13px -7px rgba(0,0,0,0.48);
padding: 1.2rem 1rem;
margin: 0.6rem 0;
`

export const ContentTop = styled.div`
display: flex;
justify-content:space-between;
height: 50%;

p {
  font-size: 1.2rem;
  color: var(--text)
}

button {
  border: none;
  outline: none;
  background: transparent;
  width: 2rem;
  height: 2rem;
}

`
