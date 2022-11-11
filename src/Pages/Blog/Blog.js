import React from 'react';

const Blog = () => {
    return (
        <div>
          q:Difference between SQL and NoSQL?
          ans:SQL is the programming language used to interface with relational databases. <br />
           (Relational databases model data as records in rows and tables with logical links between them). <br />
           NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
           q: What is JWT, and how does it work?
           ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting <br />
            information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
        </div>
    );
};

export default Blog;