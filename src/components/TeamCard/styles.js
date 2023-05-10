import styled from 'styled-components';

export const TeamCardWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  & img {
    background-color: #ffa800;
    width: 100%;
  }
`;

export const ImagesWrapper = styled.div`
  position: relative;
  & .mark {
    position: absolute;
    z-index: 1;
    top: 4px;
    right: 4px;
    width: 50px;
    background: transparent;
  }
`;

export const ContentWrapper = styled.div`
  padding: 10px 15px;
  background: rgba(159, 189, 191, 0.4);
  height: 128px;
`;

export const Name = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 140%;
  color: rgba(255, 168, 0, 0.92);
`;

export const Status = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-transform: uppercase;
  color: #3a3a3a;
`;
