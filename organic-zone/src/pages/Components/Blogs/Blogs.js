import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <h1>Blogs</h1>

      <div className="blogs-container">
        <div className="blog">
          <h3>Difference between javascript and nodejs.</h3>
          <p>
            JavaScript is normally used for any client-side activity for one web
            application. Whereas Node JS is mainly used for accessing or running
            any operating system for non-blocking operation. JavaScript is a
            simple programming language that runs in any browser JavaScript
            Engine. Whereas Node JS is an interpreter or running environment for
            a JavaScript programming language that holds many excesses, it
            requires libraries that can easily be accessed from JavaScript
            programming for better use.
          </p>
        </div>
        <div className="blog">
          <h3>When should you use nodejs and when should you use mongodb?</h3>
          <p>
            NodeJS is a JavaScript runtime environment. It actually helps
            JavaScript to run outside of the server. It's used in server-side
            development. And if we need a database to store the data or
            information so here we can use MongoDB. But to be connected with
            MongoDB we need a connector, so here we can use NodeJS which will
            help our website to run outside of the server.
          </p>
        </div>
        <div className="blog">
          <h3>Differences between SQL and NoSQL databases.</h3>
          <p>
            SQL databases display data in form of tables so it is known as
            table-based database. NoSQL databases display data as collection of
            key-value pairs, documents, graph databases, or wide-column stores.
            SQL databases have fixed or static or predefined schema. NoSQL
            databases have dynamic schema. SQL databases use a powerful language
            "Structured Query Language" to define and manipulate the data. In
            NoSQL databases, collection of documents are used to query the data.
          </p>
        </div>
        <div className="blog">
          <h3>What is the purpose of JWT and how does it work?</h3>
          <p>
            JWT or JSON Web Token is an open standard for securely transmitting
            information between parties as JSON object. The purpose of using JWT
            is to ensure the authenticity of the data. JWT is signed and
            encoded, not encrypted. JWT is a token-based stateless
            authentication mechanism. Since it is a client-side-based stateless
            session, the server doesn’t have to completely rely on a database to
            save session information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
