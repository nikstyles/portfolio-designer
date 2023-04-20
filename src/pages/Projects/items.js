import { nanoid } from 'nanoid';
import dnipro from '../../images/dnipro_m.jpg';
import foresta from '../../images/foresta.jpg';
import apro from '../../images/apro.jpg';

const items = [
  {
    id: nanoid(),
    text: 'Dnipro-M',
    image: dnipro,
  },
  {
    id: nanoid(),
    text: 'Foresta',
    image: foresta,
  },
  {
    id: nanoid(),
    text: 'Apro',
    image: apro,
  },
  {
    id: nanoid(),
    toSite: 'https://mkundeev.github.io/team-project/',
    toGithub: 'https://github.com/mkundeev/team-project',
    text: 'IceCream',
    tech: 'HTML, SASS, JS, WEBPACK, BEM, GIT',
    image: '',
  },
  {
    id: nanoid(),
    toSite: 'https://nikstyles.github.io/goit-markup-hw-08/',
    toGithub: 'https://github.com/nikstyles/goit-markup-hw-08/',
    text: 'WebStudio',
    tech: 'HTML, CSS, GIT',
    image: '',
  },
];

export default items;
