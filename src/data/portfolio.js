import ABC_LOGO from "../img/project/AblockLogo.jpg";
import poster from "../img/project/Poster_design.jpg";
import des from "../img/project/des_pic.jpg";
import web3 from "../img/project/web3_proj.jpg";

const portfolios = [
  {
    categories: ["Design", "Canva"],
    image: ABC_LOGO,
    title: "Logo Design",
    text: "Created using Canva",
  },
  {
    categories: ["Design", "Canva"],
    image: poster,
    title: "Poster Design",
    text: "Created using Canva",
  },
  {
    title: "Discrete Event Simulator",
    image: des,
    categories: ["Java", "Object Oriented Programming", "Software Engineering"],
    text: "Shop simulator, completed as part of CS2030",
    links: {
      github: "https://github.com/WenJJ2000/CS2030",
    },
  },
  {
    title: "Web3 app (In Progress)",
    image: web3,
    categories: ["React", "JavaScript", "Software Engineering", "firebase"],
    text: "Web App to display NFT Transactions",
    links: {
      github: "https://github.com/WenJJ2000/Web3.0",
    },
  },
];

export default portfolios;
