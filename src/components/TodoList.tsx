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

const TodoList = observer(() => {
  const {
    todos: { todos, removeTodo },
  } = useStores();
  return (
    <Wrapper>
      {todos.map(todo => {
        const onClick = (e: any) => {
          e.preventDefault();
          removeTodo(todo.id);
        };
        return (
          <TodoItem key={todo.id} onClick={onClick}>
            {todo.todo}
          </TodoItem>
        );
      })}
    </Wrapper>
  );
});

export default TodoList;
