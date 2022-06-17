import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 48px);
  justify-content: space-between;

  .title {
    margin-bottom: 16px;
    font-size: 2em;
  }

  .scrollBtn {
    font-size: 40px;
  }

  .btnContainer {
  }
`;
