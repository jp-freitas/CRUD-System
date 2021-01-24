import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #669999;
  height: 50px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-size: 20px;

  &:hover {
    background: ${shade(0.2, '#669999')};
    color: #003333;
  }
`;
