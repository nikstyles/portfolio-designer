import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
// import About from '../../components/About/About';
// import { useState, useEffect } from 'react';

import { IoMdArrowRoundBack } from 'react-icons/io';
import styled from 'styled-components';
import img1 from '../../images/dniprom/dniprom_1.jpg';
import img2 from '../../images/dniprom/dniprom_2.jpg';
import img3 from '../../images/dniprom/dniprom_3.jpg';
import img4 from '../../images/dniprom/dniprom_4.jpg';
import img5 from '../../images/dniprom/dniprom_5.jpg';
import img6 from '../../images/dniprom/dniprom_6.jpg';
import img7 from '../../images/dniprom/dniprom_7.jpg';
import img8 from '../../images/dniprom/dniprom_8.jpg';
import img9 from '../../images/dniprom/dniprom_9.jpg';
import img10 from '../../images/dniprom/dniprom_10.jpg';
import img11 from '../../images/dniprom/dniprom_11.jpg';
import img12 from '../../images/dniprom/dniprom_12.jpg';
import img13 from '../../images/dniprom/dniprom_13.jpg';
import img14 from '../../images/dniprom/dniprom_14.jpg';
import img15 from '../../images/dniprom/dniprom_15.jpg';
import img16 from '../../images/dniprom/dniprom_16.jpg';
import img17 from '../../images/dniprom/dniprom_17.jpg';
import img18 from '../../images/dniprom/dniprom_18.jpg';
import img19 from '../../images/dniprom/dniprom_19.jpg';
import img20 from '../../images/dniprom/dniprom_20.jpg';
import img21 from '../../images/dniprom/dniprom_21.jpg';
import img22 from '../../images/dniprom/dniprom_22.jpg';
import img23 from '../../images/dniprom/dniprom_23.jpg';
import img24 from '../../images/dniprom/dniprom_24.jpg';
import img25 from '../../images/dniprom/dniprom_25.jpg';
import img26 from '../../images/dniprom/dniprom_26.jpg';
import img27 from '../../images/dniprom/dniprom_27.jpg';
import img28 from '../../images/dniprom/dniprom_28.jpg';
import img29 from '../../images/dniprom/dniprom_29.jpg';
import img30 from '../../images/dniprom/dniprom_30.jpg';
import img31 from '../../images/dniprom/dniprom_31.jpg';
import img32 from '../../images/dniprom/dniprom_32.jpg';
import img33 from '../../images/dniprom/dniprom_33.jpg';
import img34 from '../../images/dniprom/dniprom_34.jpg';
import img35 from '../../images/dniprom/dniprom_35.jpg';
import img36 from '../../images/dniprom/dniprom_36.jpg';
import img37 from '../../images/dniprom/dniprom_37.jpg';
import img38 from '../../images/dniprom/dniprom_38.jpg';
import img39 from '../../images/dniprom/dniprom_39.jpg';
import img40 from '../../images/dniprom/dniprom_40.jpg';

const BackLink = styled(Link)`
  color: rgb(255, 255, 255);
  margin-top: 50px;
  text-decoration: underline;
  display: flex;
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

const WrapProject3colum = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 30px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

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

export default function DniproM() {
  // const [matches, setMatches] = useState(
  //   window.matchMedia('(min-width: 768px)').matches
  // );
  // useEffect(() => {
  //   window
  //     .matchMedia('(min-width: 768px)')
  //     .addEventListener('change', e => setMatches(e.matches));
  // }, []);
  return (
    <Container>
      <BackLink to={'/projects/'}>
        <IoMdArrowRoundBack className="arrow" size={'18px'} /> Go Back
      </BackLink>

      <Block>
        <Title>Іміджевий розворот у журнал</Title>
        <WrapProject2colum>
          <Block1>
            <Img alt="" src={img1} />
          </Block1>
          <Block2>
            <Img alt="" src={img2} />
            <Img alt="" src={img3} />
          </Block2>
        </WrapProject2colum>
      </Block>

      <Block>
        <Title>Розробка обкладинки до каталогу</Title>
        <WrapProject2colum>
          <Block1>
            <Img alt="" src={img38} />
          </Block1>
          <Block2>
            <Img alt="" src={img39} />
            <Img alt="" src={img40} />
          </Block2>
        </WrapProject2colum>
      </Block>

      <Block>
        <Title>Брендування та кольорове рішення</Title>
        <WrapProject2colum>
          <Block2>
            <Img alt="" src={img4} />
            <Img alt="" src={img5} />
          </Block2>
          <Block1>
            <Img alt="" src={img6} />
          </Block1>
        </WrapProject2colum>
      </Block>

      <Block>
        <Title>Розробка лінійки масел та олив</Title>
        <WrapProject5colum>
          <Block1>
            <WrapOilImg>
              <ImgOil alt="" src={img7} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img8} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img9} />
            </WrapOilImg>
          </Block1>
        </WrapProject5colum>
      </Block>

      <Block>
        <Title>Розробка брендових скріпок</Title>
        <WrapProject5colum>
          <Block1>
            <WrapOilImg>
              <ImgOil alt="" src={img10} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img11} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img12} />
            </WrapOilImg>
          </Block1>
        </WrapProject5colum>
      </Block>

      <Block>
        <Title>Концепція рекламної стійки</Title>
        <WrapProject5colum>
          <Block1>
            <WrapOilImg>
              <ImgOil alt="" src={img13} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img14} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img15} />
            </WrapOilImg>
          </Block1>
        </WrapProject5colum>
      </Block>

      <Block>
        <Title>3D ілюстрації до буклету нових колег</Title>
        <WrapProject2colum>
          <Block2>
            <Img alt="" src={img17} />
            <Img alt="" src={img18} />
          </Block2>
          <Block1>
            <Img alt="" src={img16} />
          </Block1>
        </WrapProject2colum>
      </Block>

      <Block>
        <Title>Баннер на сайт партнерів</Title>
        <WrapProject2colum>
          <Block2>
            <Img alt="" src={img19} />
            <Img alt="" src={img20} />
          </Block2>
        </WrapProject2colum>
      </Block>

      <Block>
        <Title>Ілюстрації для пакування</Title>
        <WrapProject3colum>
          <Block1>
            <WrapOilImg>
              <ImgOil alt="" src={img21} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img22} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img23} />
            </WrapOilImg>
          </Block1>
          <Block1>
            <WrapOilImg>
              <ImgOil alt="" src={img24} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img25} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img26} />
            </WrapOilImg>
          </Block1>
        </WrapProject3colum>
      </Block>

      <Block>
        <Title>Ілюстрації для інструкції</Title>
        <WrapProject3colum>
          <Block1>
            <WrapOilImg>
              <ImgOil alt="" src={img27} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img28} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img29} />
            </WrapOilImg>
          </Block1>
          <Block1>
            <WrapOilImg>
              <ImgOil alt="" src={img30} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img31} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img32} />
            </WrapOilImg>
          </Block1>
        </WrapProject3colum>
      </Block>

      <Block>
        <Title>3D моделювання</Title>
        <WrapProject3colum>
          <Block1>
            <WrapOilImg>
              <ImgOil alt="" src={img33} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img34} />
            </WrapOilImg>
          </Block1>
          <Block1>
            <WrapOilImg>
              <ImgOil alt="" src={img35} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img36} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img37} />
            </WrapOilImg>
          </Block1>
        </WrapProject3colum>
      </Block>

      <BackLink to={'/projects/'} className="back_link">
        <IoMdArrowRoundBack className="arrow" size={'18px'} /> Go Back
      </BackLink>
    </Container>
  );
}
