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
    description: `I specialize in web development, creating dynamic, responsive websites using HTML, CSS, React, and Next.js, with backend skills in PHP and Node.js. `,
    img: img1,
    icon: <FaHtml5 />,
    bgcolor: "#e03da3",
  },
  {
    id: 2,

    title: "Software development",
    description: `I have strong Java, Python, and C# skills, with experience developing Hospital, School Management Systems, and Cruise Reservation Systems.`,
    img: img2,
    icon: <RiUserSettingsFill />,
    bgcolor: "#20d19e",
  },
  {
    id: 3,
    title: "Database Management",
    description: `I have hands-on experience with MySQL Workbench, Node.js, and XAMPP for managing databases in various projects.`,
    img: img3,
    icon: <BsDatabaseFillGear />,
    bgcolor: "#767676",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: `Skilled in UI/UX design, I create intuitive, engaging interfaces using Figma, Photoshop, XD, and Canva.`,
    img: img4,
    icon: <MdOutlineDraw />,
    bgcolor: "#f34a0d",
  },
];
