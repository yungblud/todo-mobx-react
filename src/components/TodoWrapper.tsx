import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 450px;
  height: auto;

  background: #ffffff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
`;

interface Props {
  children: any;
}

const TodoWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default TodoWrapper;
