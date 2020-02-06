import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { RootState } from '../store/types';

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

const TodoInput = () => {
  return <Input />;
};

export default inject((state: RootState) => ({
  title: state.input.title,
}))(observer(TodoInput));
