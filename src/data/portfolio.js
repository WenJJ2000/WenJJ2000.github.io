import ABC_LOGO from "../img/project/AblockLogo.jpg";
import poster from "../img/project/Poster_design.jpg";
import des from "../img/project/des_pic.jpg";

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
];

export default portfolios;
