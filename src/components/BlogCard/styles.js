import styled from 'styled-components';

export const BlogCardWrapper = styled.div`
  -webkit-print-color-adjust: exact;
  border-radius: 10px;
  background: #e8e8e8;
  overflow: hidden;
  & img.main {
    /* min-width: 100%; */
    width: 100%;
    max-height: 250px;
    min-height: 250px;
    object-fit: cover;
    object-position: top;
    height: 100%;
  }
  & .author-image {
    width: 40px;
    height: 40px;
  }
  & .title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  & .name {
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
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const ImageWrapper = styled.div`
  flex: ${(props) => props.horizontal && 6};
  @media (max-width: 992px) {
    flex: ${(props) => props.horizontal && 'unset'};
  }
`;

export const TopWrapper = styled.div``;

export const BodyWrapper = styled.div`
  padding: ${(props) => (props.horizontal ? '90px' : '20px')};
  flex: ${(props) => props.horizontal && 7};
  @media (max-width: 992px) {
    padding: ${(props) => (props.horizontal ? '20px' : '20px')};
  }
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
  /* background: #e8971e; */
  border-radius: 41px;
  display: flex;
  align-items: center;
  & p {
    /* padding: 3px 30px; */
    font-size: 14px;
    margin-bottom: 0;
    color: #a5a5a5;
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
