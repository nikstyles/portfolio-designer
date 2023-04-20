import Container from '../../components/Container/Container';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import items from './items';
import { Link } from 'react-router-dom';

// import { BsGithub } from 'react-icons/bs';
// import { CgBrowser } from 'react-icons/cg';
// import { useTranslation } from 'react-i18next';

const ListProjects = styled.ul`
  margin-top: 30px;
  padding-bottom: 50px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media (min-width: 1100px) {
    margin-top: 55px;
  }
`;
const ItemProjects = styled.li`
  width: 100%;

  border-radius: ${props => props.theme.radii.big};
  background-color: rgba(255, 255, 255, 0.07);

  @media (min-width: 768px) {
    max-width: 354px;
  }
  @media (min-width: 1100px) {
    max-width: 31.62%;
  }
`;
const WrapCoverProject = styled(Link)`
  border-radius: ${props => props.theme.radii.big};
  display: flex;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s;
  transition-timing-function: cubic-bezier(0.22, 0.68, 0, 1.71);
  cursor: pointer;
  :hover {
    box-shadow: 0 2px 10px 0 #1e56cf88, 0 6px 20px 0 #663ee1;
  }
  @media (min-width: 768px) {
    /* max-width: 369px; */
    /* max-height: 272px; */
  }
  @media (min-width: 1101px) {
    /* max-width: 380px; */
    /* max-height: 276px; */
  }
`;
const CoverProject = styled.img`
  border-radius: 20px;
  border: solid 1px ${props => props.theme.colors.primary};

  width: 100%;
  /* object-fit: cover; */

  @media (min-width: 768px) {
  }
  @media (min-width: 1101px) {
  }
`;

const TitleName = styled.p`
  color: ${props => props.theme.colors.text};
`;
const WrapInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 15px;
`;

export default function Projects() {
  // const { t } = useTranslation();
  const elements = items.map(({ id, toSite, toGithub, tech, text, image }) => (
    <ItemProjects key={id}>
      <WrapCoverProject
        to={`/projects/${id}`}
        // state={{ from: location }}
        className="image_cover"
      >
        <CoverProject src={image} />
      </WrapCoverProject>
      <WrapInfo>
        <TitleName>{text}</TitleName>
      </WrapInfo>
    </ItemProjects>
  ));

  return (
    <Container>
      <ListProjects>{elements}</ListProjects>
    </Container>
  );
}
