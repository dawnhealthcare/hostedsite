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
  background: linear-gradient(
    rgba(83, 192, 83, 0.81) 0%,
    rgba(197, 244, 197, 0.75) 0%,
    rgba(139, 197, 230, 0.88) 0%,
    rgba(85, 190, 204, 0.87) 0%,
    rgba(103, 214, 220, 0.7) 48%,
    rgba(120, 236, 234, 0.54) 66%,
    rgb(110 229 216 / 33%) 100%,
    rgba(40, 90, 83, 0.32) 100%
  );
  height: 128px;
`;

export const Name = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 140%;
  color: #fff;
`;

export const Status = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  text-transform: uppercase;
  color: #3a3a3a;
`;
