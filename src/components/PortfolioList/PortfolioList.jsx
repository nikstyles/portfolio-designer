import React, { useState, useEffect, useRef } from 'react';
import s from './PortfolioList.module.css';
import Chevron from './chavron.svg';
import content1 from '../../images/portfolio/Kovpak Nikita_02.jpg';

export default function PortfolioList() {
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
    <div className={s.accordion}>
      <button onClick={toggleState} className={s.accordion_visible}>
        <span>Dnipro-M</span>
        <img className={toggle && s.active} src={Chevron} alt="" />
      </button>

      <div
        className={
          toggle ? `${s.accordion_toggle} ${s.animated}` : s.accordion_toggle
        }
        style={{ height: toggle ? `${heightEl}` : '0px' }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? 'true' : 'false'}>
          Іміджевий розворот у журнал
        </p>
        <img width="800" alt="" src={content1} className={toggle && s.img} />
      </div>
    </div>
  );
}
