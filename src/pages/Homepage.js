import s from './Homepage.module.css';
import Container from '../components/Container/Container';
import Hero from '../components/Hero/Hero';
import TechSkills from '../components/TechSkills/TechSkills';
// import Portfolio from 'components/Portfolio/Portfolio';

const Homepage = () => {
  return (
    <Container>
      <h1 className={s.h_delete}>Welcome page</h1>
      <Hero />
      <TechSkills />
      {/* <Portfolio /> */}
    </Container>
  );
};

export default Homepage;
