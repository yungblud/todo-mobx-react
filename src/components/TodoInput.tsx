import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStores from '../hooks/useStores';

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #dee2e6;
  outline: none;

  line-height: 30px;
  font-size: 14px;
  padding-left: 8.5px;
  padding-right: 8.5px;

  box-sizing: border-box;
`;

const TodoInput = observer(() => {
  const {
    input: { changeInput, title, addTodo },
  } = useStores();

  return (
    <Input
      name="title"
      value={title}
      onChange={(e: any) => changeInput(e.target.name, e.target.value)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          addTodo();
        }
      }}
    />
  );
});

export default TodoInput;
