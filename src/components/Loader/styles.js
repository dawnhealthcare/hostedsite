import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: ${(props) => (props.fix ? 'relative' : 'absolute')};
  z-index: 1;
  width: 100%;
  height: ${(props) => props.fix && '100vh'};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.fix ? 'none' : '#fff')};
  flex-direction: column;
`;
