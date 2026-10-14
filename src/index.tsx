import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
//import testImage from "./images/test.jpg";

// export default function Greeting() {
//   return <h2> My comp</h2>;
// }
const authorStyle = {
  color: "#677d98",
  fontSize: "0.75",
  marginTop: "0.5rem",
};
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

const title = "Threshing Day (Wing and Claw Collection)";
const author = "Rebecca Yarros";
const img = new URL("./images/test.jpg", import.meta.url).href;

// export function Book() {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// }

const books = [
  {
    id: 1,
    img: new URL("./images/test.jpg", import.meta.url).href,
    title: "hello jim",
    author: "Rebecca Yarros",
  },
  {
    id: 2,
    img: new URL("./images/t2.jpg", import.meta.url).href,
    title: "Threshing Day (Wing and Claw Collection)",
    author: "John XXX Yarros",
  },
];

// const firstBook = {
//   img: new URL("./images/test.jpg", import.meta.url).href,
//   title: "hello jim",
//   author: "Rebecca Yarros",
// };

// const secondBook = {
//   img: new URL("./images/t2.jpg", import.meta.url).href,
//   title: "Threshing Day (Wing and Claw Collection)",
//   author: "John XXX Yarros",
// };
// export function Book({ img, author, title }) {
//   return (
//     <article className="book">
//       <img src={img} />
//       <h2>{title}</h2>
//       <h4 style={authorStyle}>{author?.toUpperCase()}</h4>
//     </article>
//   );
// }

export function Book(props: {
  img: any;
  title: any;
  author: any;
  id: any;
  order: any;
}) {
  const { img, title, author, id, order } = props;
  return (
    <article className="book">
      <p>{`#${order}`}</p>
      <img src={img} />
      <h2>{title}</h2>
      <h4 style={authorStyle}>{author?.toUpperCase()}</h4>
      <button onClick={(e) => console.log(books.find((b) => b.id == id))}>
        {" "}
        Click
      </button>
    </article>
  );
}

function BookList() {
  return (
    <section className="bookList">
      {books.map((book, i) => {
        return <Book {...book} key={book.id} order={i + 1} />;
      })}
    </section>
  );

  function Image() {
    return (
      // <img src="https://images-na.ssl-images-amazon.com/images/I/911TynawjkL._AC_UL600_SR600,400_.jpg" />
      <img src={testImage} />
    );
  }

  function Title() {
    return <h2>Threshing Day (Wing and Claw Collection)</h2>;
  }
  function Author() {
    return <h4 style={authorStyle}>Rebecca Yarros</h4>;
  }

  // function BookList() {
  //   return (
  //     <section className="bookList">
  //       {books.map((item) => (
  //         <Book author={item.author} title={item.title} img={item.img} />
  //       ))}
  //     </section>
  //   );
  // }

  // function BookList() {
  //   return (
  //     <section className="bookList">
  //       {books.map((item) => {
  //         const { img, title, author } = item;
  //         return (
  //           <Book key={item.title} author={author} title={title} img={img} />
  //         );
  //       })}
  //     </section>
  //   );
  // }
}

export default BookList;
