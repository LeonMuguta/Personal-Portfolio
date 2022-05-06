import Picture1 from "./Images/blog-project.PNG";
import Picture2 from "./Images/link-shortener.PNG";
import Picture3 from "./Images/todolist.PNG";
import Picture4 from "./Images/crudapp.PNG";

const collection = [
    {
        id: 1,
        picture: Picture1,
        title: "Blog Project",
        description:
        "This application is a blogging site, allowing users to add & delete their own custom blog entries",
        stack: "Stack - HTML, CSS, JavaScript & ReactJS"
    },
    {
        id: 2,
        picture: Picture2,
        title: "Link Sortener",
        description:
        "This application can by used by users to shorten long links, for cases where they may want to share a particular webpage. This was accomplished by using the bitly API.",
        stack: "Stack - HTML, CSS, JavaScript & ReactJS"
    },
    {
        id: 3,
        picture: Picture3,
        title: "To-Do List App",
        description:
        "This is a simple to-do list app where users can input tasks they need to complete.",
        stack: "Stack - HTML, CSS & JavaScript"
    },
    {
        id: 4,
        picture: Picture4,
        title: "CRUD Application",
        description: "This is a short application where users input fruits and their weekly consumption of them. Users can also delete and update their entries.",
        stack: "Stack - HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS & MongoDB"
    }
  ];
  
  export default collection;