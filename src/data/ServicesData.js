import web_develop from "../Components/asset/web.png";
import pwa from "../Components/asset/pwa.png";
import ui from "../Components/asset/ui.png";
import digtal_markting from "../Components/asset/digtal.png";
import ecommerce from "../Components/asset/ecommerce.png";
import backend from "../Components/asset/side.png";
import home from "../Components/asset/house.png";
import car from "../Components/asset/car.png";
import retail from "../Components/asset/retail.png";
import distnation from "../Components/asset/destination.png";
import logistics from "../Components/asset/logistics.png";

const services = {
  services: [
    {
      id: "1",
      image: web_develop,
      title: "Web Development",
      description:
        "Expand your business outreach by capitalizing on web development services.",
    },

    {
      id: "2",
      image: pwa,
      title: "PWA development",
      description:
        "Progressive Web Apps, it can be said that this is a new technology for interacting with the target audience.",
    },
    {
      id: "3",
      image: ui,
      title: "UX/UI Designs",
      description:
        "intuitive, user-friendly products for the success of your business to create a human-friendly visual language.",
    },
    {
      id: "4",
      image: digtal_markting,
      title: "Digital Marketing",
      description:
        "Data-driven strategies maximize lifecycle value by align your technology and marketing execution.",
    },
  ],
  Industry: [
    {
      id: "1",
      image: home,
      title: "Construction",
      description:
        "Advanced software solutions that take Construction into the Digital Era.",
    },
    {
      id: "2",
      image: car,
      title: "Healthcare",
      description:
        "Patient-friendly software that empowers healthcare industry workers.",
    },
    {
      id: "3",
      image: retail,
      title: "Retail & ECommerce ",
      description:
        "Engaging and exciting software solutions for modern retail.",
    },

    {
      id: "4",
      image: distnation,
      title: "Travel & Hospitality",
      description:
        "Extend the comfort of your resort with practical software solutions.",
    },
    {
      id: "5",
      image: logistics,
      title: "Logistics",
      description:
        "Use all the latest tech available to make your logistics run like clockwork.",
    },
  ],
  Technology: [
    {
      id: "1",
      image: ui,
      title: "UX/UI Designs",
      items: [
        {
          id: "1",
          name: "Sketch",
        },
        {
          id: "2",
          name: "Figma",
        },
        {
          id: "3",
          name: "Flinto",
        },
        {
          id: "4",
          name: "Adobe XD",
        },
        {
          id: "5",
          name: "Blender",
        },
      ],
    },
    {
      id: "2",
      image: backend,
      title: "Web Development",
      items: [
        {
          id: "1",
          name: "HTML",
        },
        {
          id: "2",
          name: "CSS",
        },
        {
          id: "3",
          name: "ReactJs",
        },
        {
          id: "4",
          name: "Jquery",
        },
        {
          id: "5",
          name: "JSON",
        },
      ],
    },
    {
      id: "3",
      image: ecommerce,
      title: "E-commerce",
      items: [
        {
          id: "1",
          name: "Shopify",
        },
        {
          id: "2",
          name: "WooCommerce",
        },
        {
          id: "3",
          name: "Drubal",
        },
        {
          id: "4",
          name: "Magento",
        },
      ],
    },
    {
      id: "4",
      image: backend,
      title: "Server Side",
      items: [
        {
          id: "1",
          name: "Node.js",
        },
        {
          id: "2",
          name: "PHP",
        },
        {
          id: "3",
          name: "Express.js Framework",
        },
        {
          id: "4",
          name: "Laravel Framework",
        },
      ],
    },
  ],
};

export default services;
