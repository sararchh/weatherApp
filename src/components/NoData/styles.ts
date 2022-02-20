import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 4rem;

`
export const Content = styled.div`
width: 30%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

${media.lessThan("medium")`
  width: 70%;
  `}

${media.lessThan("small")`
  width: 100%;
  `}

p{ 
  font-size: 1.2rem;
  text-align: center;
}
`
