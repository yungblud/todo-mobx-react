import React from 'react';
import styled from 'styled-components';
import { Provider } from 'mobx-react';
import TodoWrapper from './components/TodoWrapper';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import RootStore from './store';

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

const root = new RootStore();

const App = () => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Provider {...root}>
      <AppWrapper>
        <TodoWrapper>
          <Title>Todo Mobx</Title>
          <TodoInput hello="string" />
          <TodoList />
        </TodoWrapper>
      </AppWrapper>
    </Provider>
  );
};

export default App;
