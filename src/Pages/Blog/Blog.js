import React from 'react';

const Blog = () => {
    return (
        <div>
            q:Difference between SQL and NoSQL? <br />
            ans:SQL is the programming language used to interface with relational databases. <br />
            (Relational databases model data as records in rows and tables with logical links between them). <br />
            NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
            q: What is JWT, and how does it work? <br />
            ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting <br />
            information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
            <br />
            q: What is the difference between javascript and NodeJS? <br />
            ans: JavaScript is a simple programming language that can be used with <br />
            any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution <br />
            environment for the JavaScript programming language
            <br />
            q:How does NodeJS handle multiple requests at the same time?<br />

ans:How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture.br NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them

        </div>
    );
};

export default Blog;