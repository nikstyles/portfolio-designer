import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
// import About from '../../components/About/About';
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
`;
const Block = styled.div`
  padding-top: 50px;
`;
const WrapProject2colum = styled.div`
  display: flex;
  gap: 30px;
`;

const WrapProject5colum = styled.div`
  display: flex;
  gap: 30px;
`;

const Img = styled.img`
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
`;

const WrapOilImg = styled.div`
  max-width: 210px;
`;
const ImgOil = styled.img`
  border-radius: 10px;
  max-width: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 10px;
`;

const Block1 = styled.div`
  display: flex;
  gap: 30px;
`;
const Block2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default function DniproM() {
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
            <WrapOilImg>
              <ImgOil alt="" src={img10} />
            </WrapOilImg>
            <WrapOilImg>
              <ImgOil alt="" src={img11} />
            </WrapOilImg>
          </Block1>
        </WrapProject5colum>
      </Block>
    </Container>
  );
}
