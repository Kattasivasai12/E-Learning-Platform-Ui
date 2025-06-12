import htmlImg from './assets/html.jpg';
import cssImg from './assets/css.jpg';
import jsImg from './assets/js.jpg';
import reactImg from './assets/react.jpg';

const courses = [
  {
    id: "html101",
    title: "HTML for Beginners",
    shortDesc: "Start your web development journey with HTML.",
    longDesc:
      "This course covers the basics of HTML, including elements, tags, structure, and semantic markup. Build real web pages from scratch as you learn.",
    image: htmlImg,
    videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
  },
  {
    id: "css-mastery",
    title: "CSS Mastery",
    shortDesc: "Take your CSS skills to the next level with advanced techniques.",
    longDesc:
      "From Flexbox and Grid to animations and responsive design, this course helps you create beautiful, modern web interfaces.",
    image: cssImg,
    videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
  },
  {
    id: "js-advanced",
    title: "Advanced JavaScript",
    shortDesc: "Deep dive into ES6+, async programming, and more.",
    longDesc:
      "Master advanced JavaScript concepts such as closures, promises, async/await, and the latest ES6+ features with practical examples.",
    image: jsImg,
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
  },
  {
    id: "react101",
    title: "React for Beginners",
    shortDesc: "Kickstart your React journey with hands-on lessons.",
    longDesc:
      "This course covers the basics of React, including components, state, props, and hooks. Build real-world projects and learn by doing.",
    image: reactImg,
    videoUrl: "https://www.youtube.com/embed/x4rFhThSX04?si=ApAafAjYyWBulrqJ",
  },
];

export default courses;
