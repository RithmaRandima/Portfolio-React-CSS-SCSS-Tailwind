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
    description: `With a strong foundation in web development, I specialize in creating dynamic, responsive, and visually appealing websites using the latest technologies like HTML, CSS, React, and Next.js. Expert in CSS for custom design, JavaScript for interactivity and PHP for backend development, Tailwind uses Bootstrap for intuitive responsive layouts and Framer Motion for smooth animations.`,
    img: img1,
    icon: <FaHtml5 />,
  },
  {
    id: 2,

    title: "Software development",
    description: `I have a strong foundation in Java and C#, with hands-on experience developing real-world applications. Specifically, I developed hospital management systems using Java for New Lanka Hospital and Pro Health Hospital, designed to streamline operations such as patient records, billing and appointments. Additionally, I designed a C#-based cruise reservation system for Oceanlink Express, a POS system that efficiently manages reservations, payments and customer data.`,
    img: img2,
    icon: <RiUserSettingsFill />,
  },
  {
    id: 3,
    title: "Database Management",
    description: `I have hands-on experience in database management, utilizing MySQL Workbench and XAMPP to design, implement, and manage databases effectively. In projects like the Hospital Management Website and Systems for New Lanka Hospital and Pro Health Hospital, I integrated robust databases to manage patient records, appointments, and billing. Similarly, in the Ship Booking System developed in C# for Oceanlink Express, I created a database to efficiently handle bookings, customer data, and payments.`,
    img: img3,
    icon: <BsDatabaseFillGear />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: `UI/UX design is a key aspect of my skill set, where I seamlessly blend creativity and functionality to enhance user experiences. Proficient in tools like Figma, Adobe Photoshop, Adobe XD, and Canva, I am adept at crafting intuitive and visually appealing interfaces.`,
    img: img4,
    icon: <MdOutlineDraw />,
  },
];
