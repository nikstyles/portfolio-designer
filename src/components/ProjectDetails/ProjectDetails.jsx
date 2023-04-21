import Container from '../../components/Container/Container';
import { useLocation, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getMovieDetails } from '../API/movie-api';
// import MovieDetailsInfo from 'components/MovieDetailsInfo';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styled from 'styled-components';

const BackLink = styled(Link)`
  /* margin-top: 30px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media (min-width: 1100px) {
    margin-top: 55px;
  } */
  color: rgb(255, 255, 255);
  margin-top: 60px;
  text-decoration: none;
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

const ProjectDetails = () => {
  const location = useLocation();
  //   const [details, setDetails] = useState(null);
  //   const { projectId } = useParams();

  const backLink = location.state?.from ?? '/projects';

  //   useEffect(() => {
  //     getProjectDetails(Number(projectId)).then(details => setDetails(details));
  //   }, [projectId]);

  return (
    <Container>
      <BackLink to={backLink}>
        <IoMdArrowRoundBack className="arrow" size={'18px'} /> Go Back
      </BackLink>

      {/* <MovieDetailsInfo
      //   details={details}
      /> */}
    </Container>
  );
};

export default ProjectDetails;
