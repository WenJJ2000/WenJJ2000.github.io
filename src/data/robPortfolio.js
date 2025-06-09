import ROSPic from '../img/project/ros2.png';
import FYP from '../img/project/FYP_PIC.jpg';

const robPortfolio = [
  {
    title: 'A Compact Wheeled Robot for Gait Analysis Using Computer Vision',
    image: FYP,
    categories: [
      'Python',
      'Mediapipe',
      'Computer Vision',
      'Debian',
      'object detection',
    ],
    text: `Done as a Final Year Thesis to design a compact mobile robot capable of realtime gait analysis using computer vision,
            while being able to track the moving person.`,
    links: {
      github: 'https://github.com/WenJJ2000/RobotGaitAnalysis',
    },
  },
  {
    title: 'ROS2 Turtle Bot',
    image: ROSPic,
    categories: ['ROS2, C++'],
    text: 'A project for Me3243 Robotic System Design',
    links: {
      github: 'https://github.com/WenJJ2000/ROS2TutleBot',
    },
  },
];

export default robPortfolio;
