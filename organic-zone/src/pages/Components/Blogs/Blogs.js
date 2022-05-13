import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <h1>Blogs</h1>

      <div className="blogs-container">
        <div className="blog">
          <h3>Difference between authorization and authentication</h3>
          <p>
            Authentication is the process of verifying who a user is, while
            authorization is the process of verifying what they have access to.
            Authentication is used to verify that users really are who they
            represent themselves to be. Once this has been confirmed,
            authorization is then used to grant the user permission to access
            different levels of information and perform specific functions,
            depending on the rules established for different types of users.
          </p>
        </div>
        <div className="blog">
          <h3>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p>
            Google Firebase offers many features that pitch it as the go-to
            backend development tool for web and mobile apps. It reduces
            development workload and time. And it's a perfect prototyping tool.
            Firebase is simple, lightweight, friendly, and industrially
            recognized.
          </p>
          <p>
            I am using firebase for authentication. There is many options for
            implementing authentication like Supabase, Auth0, OAuth2.
          </p>
        </div>
        <div className="blog">
          <h3>
            What other services does firebase provide other than authentication
          </h3>
          <p>
            Realtime Database, Cloud Functions, Cloud messaging, Cloud Storage,
            Hosting, and many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
