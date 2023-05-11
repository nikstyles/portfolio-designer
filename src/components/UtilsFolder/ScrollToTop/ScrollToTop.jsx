import { useState, useEffect } from 'react';
import styled from 'styled-components';

const UpBtn = styled.button`
  position: fixed;
  z-index: 30;
  right: 50px;
  bottom: 50px;

  height: 50px;
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 5px #fff;

  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const IconArrowUp = styled.svg`
  fill: #000000;
  width: 50px;
  height: 50px;
`;

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <UpBtn type="button" onClick={scrollUp}>
          <IconArrowUp viewBox="0 0 24 28">
            <path d="M18.203 17.797l1.594-1.594c0.391-0.391 0.391-1.016 0-1.406l-7.094-7.094c-0.391-0.391-1.016-0.391-1.406 0l-7.094 7.094c-0.391 0.391-0.391 1.016 0 1.406l1.594 1.594c0.391 0.391 1.016 0.391 1.406 0l4.797-4.797 4.797 4.797c0.391 0.391 1.016 0.391 1.406 0zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z"></path>
          </IconArrowUp>
        </UpBtn>
      )}
    </>
  );
};

export default ScrollToTop;
