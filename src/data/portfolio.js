import ABC_LOGO from '../img/project/AblockLogo.jpg';
import poster from '../img/project/Poster_design.jpg';
import des from '../img/project/des_pic.jpg';
import web3 from '../img/project/web3_proj.jpg';
import CI from '../img/project/CIX-6.png';
import TRANS from '../img/project/translate-logo.png';
import SB from '../img/project/scam_buster.png';
const portfolios = [
  {
    title: 'ScamBusters',
    image: SB,
    categories: [
      'React Native',
      'Firebase',
      'Expo CLI',
      'Software Engineering',
    ],
    text: 'A project for CODE_EXP 2025 to help raise awareness of scams in Singapore. (STILL IN PROGRESS)',
    links: {},
  },
  {
    title: 'Linguify',
    image: TRANS,
    categories: ['JavaScript', 'React', 'Software Engineering'],
    text: 'A project for CS3240 taken on exchange in KTH Stockholm. \nRan out of api calls',
    links: {
      github: 'https://dh2642-c7916.web.app/',
    },
  },
  {
    title: 'Continuous Integration',
    image: CI,
    categories: ['Java', 'Continuous Intergration', 'Software Engineering'],
    text: 'Private Continuous Integration server for private repo',
    links: {
      github: 'https://github.com/DD2480-Group-3/Assignment-2-CI',
    },
  },
  {
    title: 'Data Analysis App (in progress)',
    image: des,
    categories: ['Python', 'Data Analysis', 'Software Engineering'],
    text: 'Data analysis web app to help users find the right data analysis method as part of EG2605',
    links: {
      github: 'https://github.com/WenJJ2000/understats',
    },
  },
  {
    title: 'Discrete Event Simulator',
    image: des,
    categories: ['Java', 'Object Oriented Programming', 'Software Engineering'],
    text: 'Shop simulator, completed as part of CS2030',
    links: {
      github: 'https://github.com/WenJJ2000/CS2030',
    },
  },
  {
    title: 'Web3 app (In Progress)',
    image: web3,
    categories: ['React', 'JavaScript', 'Software Engineering', 'firebase'],
    text: 'Web App to display NFT Transactions',
    links: {
      github: 'https://github.com/WenJJ2000/Web3.0',
    },
  },
];

export default portfolios;
