import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 21px;
  font-size: 24px;
  display: flex;
  flex-direction: column;

  img {
    padding: 11px;
    border-radius: 3px;
    box-shadow: 0px 6px 12px rgb(0 0 0 / 30%);
    max-width: 333px;
  }

  div {
    color: #000;
    padding: 32px 0;
    text-align: justify;
    line-height: 32px;
  }
`;

export const Quote = styled.div`
    text-align: left !important;
`;