import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 480px;
  margin: 0px auto;
  padding: 0px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

export const Header = styled.div`
  position: relative;
  z-index: 10;
  padding: 24px 0px;
  min-width: 480px;
  color: rgb(255, 255, 255);
  border-bottom: 1px solid #ececec;
  background: black;
`;

export const Box = styled.div`
  padding: 0px 48px;
  max-width: 100%;
`;
