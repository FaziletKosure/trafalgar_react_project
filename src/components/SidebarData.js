import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Testimonials',
      path: '/Testimonials',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'FindDoctor',
      path: '/findDoctor',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    {
      title: 'Team',
      path: '/team',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'About',
      path: '/about',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Apps',
      path: '/apps',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ];