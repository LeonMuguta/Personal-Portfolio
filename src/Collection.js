import Picture1 from "./Images/blog-project.PNG";
import Picture2 from "./Images/link-shortener.PNG";
import Picture3 from "./Images/todolist.PNG";
import Picture4 from "./Images/crudapp.PNG";
import Picture5 from "./Images/sneaker-bot.PNG";

const collection = [
    {
        id: 1,
        picture: Picture1,
        title: "Blog Project",
        description:
        "This application is a blogging site, allowing users to add & delete their own custom blog entries",
        stack: "Stack - HTML, CSS, JavaScript & ReactJS",
        link: "https://github.com/LeonMuguta/React-Blog-Project"
    },
    {
        id: 2,
        picture: Picture2,
        title: "Link Sortener",
        description:
        "This application can by used by users to shorten long links, for cases where they may want to share a particular webpage. This was accomplished by using the bitly API.",
        stack: "Stack - HTML, CSS, JavaScript & ReactJS",
        link: "https://github.com/LeonMuguta/Link-Shortener"
    },
    {
        id: 3,
        picture: Picture3,
        title: "To-Do List App",
        description:
        "This is a simple to-do list app where users can input tasks they need to complete.",
        stack: "Stack - HTML, CSS & JavaScript",
        link: "https://github.com/LeonMuguta/ToDoList"
    },
    {
        id: 4,
        picture: Picture4,
        title: "CRUD Application",
        description: "This is a short application where users input fruits and their weekly consumption of them. Users can also delete and update their entries.",
        stack: "Stack - HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS & MongoDB",
        link: "https://github.com/LeonMuguta/MERNstack-CRUD"
    },
    {
        id: 5,
        picture: Picture5,
        title: "Sneaker Bot",
        description: "This application is a sneaker bot that I programmed to reserve sneakers to your cart before they sell out. This bot works on the adidas.co.za website specifically for those who are fans of Yeezy's. The bot places ypur specific size in your cart before they sell out",
        stack: "Stack - Python & Selenium",
        link: "https://github.com/LeonMuguta/python-sneaker-bot"
    }
  ];
  
  export default collection;