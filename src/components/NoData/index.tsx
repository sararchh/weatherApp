import React from 'react';
import { Inbox } from 'react-feather';

import { Container, Content } from './styles';

type NoDataProps = {
  title: string
}

const NoData: React.FC<NoDataProps> = ({title}) => {
  return (
    <Container>
      <Content>
        <Inbox size={100} color="#6e6e6e" />
        <p>{title}</p>
      </Content>
    </Container>
  )
}

export default NoData;