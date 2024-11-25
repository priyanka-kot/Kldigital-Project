import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import c1 from '../assets/brands/c1.png'
import c2 from '../assets/brands/c2.png'
import c3 from '../assets/brands/c3.png'
import c4 from '../assets/brands/c4.png'

export const MenuLinks = [

  {
    id: 1,
    name: "Home",
    link: "/#hero",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Services",
    link: "/#services",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#Blogs",
  },
  {
    id: 5,
    name: "Contact",
    link: "/#contact",
  },
];



export const skillsData = [
    {
      name: "App Development",
      icon: <FaCameraRetro className="text-4xl text-primary" />,
      link: "#",
      description:"A Complete solution for designing and developing of any Apps .“Innovate, Create, Connect: Empowering the Digital World through App Development.It can be done by a single developer or a large team, and there are many factors to consider when developing an app. ",
      aosDelay: "0",
    },
    {
      name: "Web Designing",
      icon: <GiNotebook className="text-4xl text-primary" />,
      link: "#",
      description:
        "Unlock the Power of Web Presence with our Professional Website Designing Service! Elevate Your Online Presence with Stunning Website Designs.Front-end development, on the other hand, involves implementing the design into a functional website using coding languages like React Js And CMS And other tools.",
      aosDelay: "300",
    },
    {
      name: "Graphic Designing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "Graphic design is an interdisciplinary branch of design and of the fine arts. Its practice involves creativity, innovation and lateral thinking using manual or digital tools, where it is usual to use text and graphics to communicate visually.",
      aosDelay: "500",
    },
    {
      name: "Digital Marketing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services.",
      aosDelay: "700",
    },
  ];

 export const testimonialData = [
    {
      id: 1,
      name: "Ronlad Thor, Customer, New York",
      text: "Im extremly thrilled with KLDigital services.i have been a customer for over 4years now and the seller is excellent at communicating with you and answering question and they provide service on time.",
      img: c1,
    },
    {
      id: 1,
      name: "Eulie jona -Customer, Miami",
      text: "Im much more satisfied with KLDigital services.i have been a customer for over 3 years now and they are just awsome and they provide service on time.",
      img: c2,
    },
    {
      id: 1,
      name: "Donna Stroupe, Paris",
      text: "Im absolutely in love with KLDigital services.i have been a customer for over 2 years now and they are just best and they provide service on time.",
      img: c3 ,
    },
    {
      id: 1,
      name: "Lorna Alvarado, London",
      text: "Im so pleased with KLDigital services.i have been a customer for over 2 years now and they are just best and the service is remarkable.",
      img: c4 ,
    },
  ];
  
  export const packages = [
    {
      name:'Basic Package',
      price: '$99',
      description: 'Ideal for individual creators',
      features: [
        'Everything in Simple',
        '34GB of business storage',
        'Unlimited management',
        'Unlimited collaborators',
        'Social Media Handle',
        'Website Development',
        'Links with password protection'

      ],
    },

    {
      name:'Premium Package',
      price: '$199',
      description: 'Ideal for individual creators',
      features: [
        'Everything in Advanced',
        '128GB of business storage',
        'Unlimited management',
        'Unlimited collaborators',
        'Social Media Handle',
        'Website Development',
        'Links with password protection'

      ],
    },

    {
      name:'Enterprise Package',
      price: '$299',
      description: 'Ideal for individual creators',
      features: [
        'Everything in Bussiness',
        '512GB of business storage',
        'Unlimited management',
        'Unlimited collaborators',
        'Social Media Handle',
        'Website Development',
        'Links with password protection'

      ],
    },
     



  ]
