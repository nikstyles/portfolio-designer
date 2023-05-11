import Container from '../../components/Container/Container';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
// import About from '../../components/About/About';
import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';

import img1 from '../../images/foresta/foresta_1.jpg';
import img2 from '../../images/foresta/foresta_2.jpg';
import img3 from '../../images/foresta/foresta_3.jpg';
import img4 from '../../images/foresta/foresta_4.jpg';
import img5 from '../../images/foresta/foresta_5.jpg';
import img6 from '../../images/foresta/foresta_6.jpg';
import img7 from '../../images/foresta/foresta_7.jpg';

const BackLink = styled(Link)`
  color: rgb(255, 255, 255);
  margin-top: 50px;
  text-decoration: underline;
  display: inline-flex;
  align-items: center;
  font-weight: 700;

  svg {
    margin-right: 10px;
  }
  :hover {
    text-shadow: 0 0 15px #ffffff;
    svg {
      text-shadow: 0 0 15px #ffffff;
    }
  }

  &.back_link {
    padding-bottom: 100px;
  }
`;
const Block = styled.div`
  padding-top: 50px;
`;
const WrapProject2colum = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 30px;
    flex-direction: row;
  }
`;

// const WrapProject3colum = styled.div`
//   display: flex;
//   gap: 15px;
//   flex-direction: column;
//   @media (min-width: 768px) {
//     gap: 30px;
//     flex-direction: row;
//     flex-wrap: wrap;
//   }
// `;

const WrapProject5colum = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: 30px;
    flex-direction: row;
  }
`;

const Img = styled.img`
  margin: 0;

  border-radius: 10px;
  width: 100%;
  object-fit: cover;
`;

const WrapOilImg = styled.div`
  width: 440px;
  /* width: 100%; */
  display: flex;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
const ImgOil = styled.img`
  margin: 0;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 10px;
`;

const Block1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media (min-width: 768px) {
    flex-wrap: nowrap;

    gap: 30px;
  }
`;
const Block2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 768px) {
    gap: 30px;
  }
`;
export default function Foresta() {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (
    <Container>
      <BackLink to={'/projects/'}>
        <IoMdArrowRoundBack className="arrow" size={'18px'} /> Go Back
      </BackLink>
      {matches ? (
        <Block>
          <Title>Ретуш фото</Title>
          <WrapProject2colum>
            <Block2>
              <Img alt="" src={img1} />
            </Block2>
          </WrapProject2colum>
          <WrapProject5colum style={{ marginTop: '30px' }}>
            <Block1>
              <WrapOilImg>
                <ImgOil alt="" src={img2} />
              </WrapOilImg>
              <WrapOilImg>
                <ImgOil alt="" src={img3} />
              </WrapOilImg>
              <WrapOilImg>
                <ImgOil alt="" src={img4} />
              </WrapOilImg>
              <WrapOilImg>
                <ImgOil alt="" src={img5} />
              </WrapOilImg>
            </Block1>
          </WrapProject5colum>
        </Block>
      ) : (
        <Block>
          <Title>Ретуш фото</Title>
          <WrapProject2colum>
            <Block2>
              <Img alt="" src={img6} />
              <Img alt="" src={img7} />
            </Block2>
          </WrapProject2colum>
        </Block>
      )}

      <BackLink to={'/projects/'}>
        <IoMdArrowRoundBack className="arrow" size={'18px'} /> Go Back
      </BackLink>
    </Container>
  );
}
