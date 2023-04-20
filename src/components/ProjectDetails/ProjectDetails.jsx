import { useLocation, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getMovieDetails } from '../API/movie-api';
// import MovieDetailsInfo from 'components/MovieDetailsInfo';
import { IoMdArrowRoundBack } from 'react-icons/io';

const ProjectDetails = () => {
  const location = useLocation();
  //   const [details, setDetails] = useState(null);
  //   const { projectId } = useParams();

  const backLink = location.state?.from ?? '/projects';

  //   useEffect(() => {
  //     getProjectDetails(Number(projectId)).then(details => setDetails(details));
  //   }, [projectId]);

  return (
    <>
      <Link to={backLink}>
        <IoMdArrowRoundBack size={'18px'} /> Go Back
      </Link>

      {/* <MovieDetailsInfo
      //   details={details}
      /> */}
    </>
  );
};

export default ProjectDetails;
