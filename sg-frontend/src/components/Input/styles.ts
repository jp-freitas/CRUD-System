import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #003333;
  padding: 14px;
  width: 100%;
  color: #003333;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #003333;

    &::placeholder {
      color: #003333;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
