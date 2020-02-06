import React from 'react';
import styled from 'styled-components';
import TodoWrapper from './components/TodoWrapper';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(100vh);
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80px;

  border-bottom: 1px solid #e9ecef;
`;

const App = () => {
  return (
    <AppWrapper>
      <TodoWrapper>
        <Title>Todo Mobx</Title>
      </TodoWrapper>
    </AppWrapper>
  );
};

export default App;
