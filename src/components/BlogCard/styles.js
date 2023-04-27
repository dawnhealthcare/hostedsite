import styled from 'styled-components';

export const BlogCardWrapper = styled.div`
  border-radius: 10px;
  background: #e8e8e8;
  overflow: hidden;
  & img {
    /* min-width: 100%; */
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    object-position: top;
    height: 100%;
  }
  & .title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  & .desc {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ImageWrapper = styled.div`
  flex: ${(props) => props.horizontal && 6};
`;

export const TopWrapper = styled.div``;

export const BodyWrapper = styled.div`
  padding: ${(props) => (props.horizontal ? '90px' : '20px')};
  flex: ${(props) => props.horizontal && 7};
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: ${(props) => (props.horizontal ? '26px' : '19px')};
  line-height: 140%;
  color: #3a3a3a;
`;

export const Para = styled.p`
  font-weight: 400;
  font-size: ${(props) => (props.horizontal ? '16px' : '13px')};
  color: #3a3a3a;
  margin-bottom: 0;
`;

export const CategoryChip = styled.div`
  background: #e8971e;
  border-radius: 41px;
  display: flex;
  align-items: center;
  & p {
    padding: 3px 30px;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 0;
    color: #ffffff;
  }
`;

export const DateWrapper = styled.p`
  font-weight: 400;
  font-size: 13px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  color: #a5a5a5;
`;
