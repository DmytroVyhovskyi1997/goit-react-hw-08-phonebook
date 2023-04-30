import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  display: inline-flex;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-right: 50px;
`;
export const Span = styled.span`
  color: aqua;
`;

export const Button = styled.button`
  padding: 8px 24px;
  margin-right: 70px;
  color: rgb(24, 24, 24);
  font-size: 16px;
  font-weight: bold;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgb(209 229 244) 0px 0px 0px 2px;
  cursor: pointer;
  border: none;
  &:hover,
  focus {
    color: white;
    background-color: red;
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
