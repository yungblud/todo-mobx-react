import React from 'react';
import styled from 'styled-components';
import useStores from '../hooks/useStores';

const Wrapper = styled.div`
  padding: 25px;
`;

const TodoList = () => {
  const {
    todos: { todos },
  } = useStores();
  return (
    <Wrapper>
      {todos.map(todo => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </Wrapper>
  );
};

export default TodoList;
