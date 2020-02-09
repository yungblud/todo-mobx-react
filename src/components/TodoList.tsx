import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStores from '../hooks/useStores';

const Wrapper = styled.div`
  padding: 25px;
`;

const TodoItem = styled.div`
  font-size: 13px;
  line-height: 30px;
`;

const TodoList = () => {
  const {
    todos: { todos },
  } = useStores();
  return (
    <Wrapper>
      {todos.map(todo => (
        <TodoItem key={todo.id}>{todo.todo}</TodoItem>
      ))}
    </Wrapper>
  );
};

export default observer(TodoList);
