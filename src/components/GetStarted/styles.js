import styled from 'styled-components';

export const GetStartedWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 16px 11px rgba(255, 168, 0, 0.05);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 661px;
`;

export const GetStartedInner = styled.div`
  background: rgba(255, 168, 0, 0.92);
  border-radius: 20px;
  min-height: 661px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const ParaInner = styled.p`
  color: white;
  font-size: 33px;
  font-family: Poppins;
  font-weight: 700;
  line-height: 46.2px;
  @media (max-width: 768px) {
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
  }
`;
