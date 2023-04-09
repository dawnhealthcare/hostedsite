import styled from 'styled-components';

export const Body = styled.div`
  min-height: calc(64.7vh);
`;

export const HomePageWrapper = styled.div``;

export const Hero = styled.div`
  background: rgba(159, 189, 191, 0.4);
  & .reverse {
    @media (max-width: 992px) {
      flex-direction: column-reverse;
    }
  }
  & .main-image {
    @media (max-width: 992px) {
      margin-top: 90px;
    }
  }
`;

export const SectionWrapper = styled.div`
  padding: 50px 0 0 0;
`;

export const TeamPageWrapper = styled.div``;

export const AboutPageWrapper = styled.div``;

export const FaqPageWrapper = styled.div``;

export const CareerPageWrapper = styled.div``;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const SignupPageWrapper = styled.div``;

export const WellnessWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 16px 11px rgba(255, 168, 0, 0.05);
  border-radius: 20px;
  padding: 20px;
  margin-top: 60px;
  flex-wrap: wrap;
`;

export const WellnessInner = styled.div`
  background: rgba(159, 189, 191, 0.4);
  border-radius: 20px;
  /* padding: 20px; */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  padding: 20px 0;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 140%;
  text-align: center;
  color: #3a3a3a;
`;

export const InnerCard = styled.div`
  margin-top: -60px;
  min-width: 608px;
  background: #e8971e;
  box-shadow: 0px 4px 16px rgba(240, 73, 116, 0.13);
  border-radius: 20px 20px 0px 0px;
  height: calc(100% + 60px);
  padding: 50px 30px;
  @media (min-width: 992px) {
    /* margin-top: -60px; */
  }
`;
