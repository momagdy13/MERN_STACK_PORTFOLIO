import ecommerce from "../Components/asset/website.png";
import social from "../Components/asset/social.png";
import crm from "../Components/asset/CRM.png";
import wheather from "../Components/asset/wheather.png";

const projects = {
  Recent: [
    {
      id: "1",
      image: ecommerce,
      title: "MERN Stack E-commerce",
      description:
        "The project is a MERN (MongoDB, Express.js, React, Node.js) stack e-commerce website. It includes features such as user authentication, product management, cart functionality, order processing, and payment integration using Stripe. The front-end is built with React and Material-UI for the UI components, while the back-end is powered by Node.js and Express.js. The database used is MongoDB. The project aims to provide a fully functional e-commerce platform with a modern and responsive user interface. ",
      url: "https://github.com/momagdy13/MERN-Stack-E-commerce",
      deployment: "https://moshop24.netlify.app/",
    },
    {
      id: "2",
      image: social,
      title: "Social Web Site",
      description:
        "The project is a front-end prototype for a social networking website, built with HTML, CSS, and JavaScript. It includes a responsive design with pages for a home feed, profile, and settings. Features such as post creation, comments, and likes are implemented. The prototype provides a visual representation of the website's potential final design and functionality.",
      url: "https://github.com/momagdy13/Scoial-website",
      deployment: "https://mosocial.netlify.app/",
    },
    {
      id: "3",
      image: crm,
      title: "CRM_MERN_Stack",
      description:
        "This project is a Customer Relationship Management (CRM) system built using the MERN (MongoDB, Express.js, React, Node.js) stack. It is designed to help businesses manage their interactions with current and potential customers. The system includes features such as customer data management, task tracking, appointment scheduling, and sales pipeline management. The front-end is developed using React and Material-UI for the UI components, while the back-end is powered by Node.js and Express.js. MongoDB is used as the database. The project aims to provide a comprehensive CRM solution for businesses to improve customer relationships and increase efficiency.",
      url: "https://github.com/momagdy13/CRM-Project",
      deployment: "https://crm232.netlify.app/",
    },
    {
      id: "4",
      image: wheather,
      title: "Wheather",
      description:
        "The project is a weather application that allows users to check the weather forecast for different locations. It is built using HTML, CSS, and JavaScript. The application uses the OpenWeather API to fetch weather data based on the user's input. Users can search for a location and view the current weather conditions as well as the forecast for the next few days. The interface is simple and user-friendly, displaying the weather information in a clear and concise manner. Overall, the project provides a useful tool for quickly checking the weather forecast for any location.",
      url: "https://github.com/momagdy13/Wheater-app",
      deployment: "https://wheather-app2266.netlify.app/",
    },
  ],
};

export default projects;
