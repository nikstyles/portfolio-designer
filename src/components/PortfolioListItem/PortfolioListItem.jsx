import React, { useState, useEffect, useRef, Children } from 'react';
import './Accordion.css';
import Chevron from './chevron.svg';

export default function Portfolio({ children }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        <span>Lorem ipsum dolor sit amet.</span>
        <img className={toggle && 'active'} src={Chevron} alt="" />
      </button>

      <div
        className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
        style={{ height: toggle ? `${heightEl}` : '0px' }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? 'true' : 'false'}>Dnipro-M</p>
        {Children.map(children, child => (
          <img className="Row" alt="">
            {child}
          </img>
        ))}
      </div>
    </div>
  );
}
