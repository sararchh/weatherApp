import styled from 'styled-components';
import media from 'styled-media-query';

export const ContentCards = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
padding-top: 20px;
padding-bottom: 100px ;

`
export const ContentTitle = styled.div`
width: 38%;
display: flex;
flex-direction: row;
justify-content: space-between;

p{
  font-size: 1.2rem;
  color: var(--text);
}

${media.lessThan("medium")`
  width: 100%;
  `}
  
`