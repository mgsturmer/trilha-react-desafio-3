import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: left;
  width: 400px
`;

export const TitleWords = styled.h2`
    text-align: left;
    color: #E4105D;
    font-size: 32px;
    text-decoration: underline;
`;

export const TitleLogin = styled.h3`
  font-size: 32px;
  line-height: 45px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;
`;

export const SubtitleLogin = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 30px;
  color: #ffffff;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 18px;
  color: #ffffff;   
  width: 300px;

  a {
    color: #23dd7a;
    text-decoration: none;
  }
`;

export const RowLogin = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;   
  width: 300px;

  a {
    color: #23dd7a;
    text-decoration: none;
  }
`;

export const InputError = styled.span`
  font-size: 12px;
  color: #ff4d4d;
  margin-top: 5px;
`;
