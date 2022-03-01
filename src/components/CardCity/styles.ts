import styled from 'styled-components';

export const Container = styled.div`
width: 40rem;
height: 12rem;
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

h3{
  font-size: 1.5rem;
}

> div p{ 
  font-size: 1.2rem;
}

>:nth-child(n + 2){
  font-size: 2rem; 
  color: var(--orange);
}

`
export const ContentBottom = styled.div`
height: 50%;
display: flex;
justify-content:space-between;
align-items: flex-end;

> div .text01{
  color: var(--orange);
  font-size: 1rem;
}

p{
  font-size: 0.9rem;
}

button {
  border: none;
  outline: none;
  background: transparent;
}
`