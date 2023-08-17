import styled from 'styled-components';

export const ValueCardWrapper = styled.div`
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
  /* border: 3px solid rgba(255, 255, 255, 0.33); */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 215px;
  padding: 20px;
`;

export const IconWrapper = styled.div`
  background: #d98200;
  border: 2px solid rgba(255, 198, 86, 0.75);
  box-shadow: 0px 4px 16px rgba(240, 73, 116, 0.13);
  border-radius: 15px;
  width: 60px;
  height: 60px;
  position: absolute;
  top: -30px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 140%;
  color: #fff;
  margin-bottom: 10px;
`;

export const DescWrapper = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #3a3a3a;
`;
