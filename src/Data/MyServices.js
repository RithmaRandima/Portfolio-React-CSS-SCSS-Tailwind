import { BsDatabaseFillGear } from "react-icons/bs";
import img1 from "../Asset/service-1.png";
import img2 from "../Asset/service-2.png";
import img3 from "../Asset/service-3.png";
import img4 from "../Asset/service-4.png";
import { FaHtml5 } from "react-icons/fa6";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdOutlineDraw } from "react-icons/md";

export const myServices = [
  {
    id: 1,
    title: "Web Development",
    description: `I specialize in web development, creating dynamic and responsive websites using HTML, CSS, React, Node.js and Next.js. I’m skilled in CSS for custom design, JavaScript for interactivity, PHP for backend work, and use Tailwind, Bootstrap, and lots of npm utility packages `,
    img: img1,
    icon: <FaHtml5 />,
  },
  {
    id: 2,

    title: "Software development",
    description: `I have a solid foundation in Java, Python, and C#, with experience in real-world applications. I developed hospital management systems, Music School management system in Java, and a C#-based cruise reservation system, managing reservations, payments, and customer data.`,
    img: img2,
    icon: <RiUserSettingsFill />,
  },
  {
    id: 3,
    title: "Database Management",
    description: `I have hands-on experience with MySQL Workbench, Node.js and XAMPP for database management. I’ve integrated robust databases for projects like hospital manage, E-Commerces Sites`,
    img: img3,
    icon: <BsDatabaseFillGear />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: `Skilled in UI/UX design, I excel in creating intuitive and engaging interfaces using Figma, Adobe Photoshop, Adobe XD, and Canva, balancing creativity with functionality.`,
    img: img4,
    icon: <MdOutlineDraw />,
  },
];
