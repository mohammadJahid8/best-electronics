import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <>

            <div className="container mt-5 mb-5">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What are differences between JavaScript and nodejs?</Accordion.Header>
                        <Accordion.Body>
                            Javascript is a programming language that is used for writing scripts on the website but NodeJS is a Javascript runtime environment. JavaScript is used for client side and NodeJS is used for server side. Nodejs does not have capability to add HTML tags but JavaScript can add HTML tags using DOM.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>When should we use NodeJS and when should MongoDB?</Accordion.Header>
                        <Accordion.Body>
                            NodeJS is JavaScript runtime environment and MongoDB is a NoSQL database. NodeJS is used for server side where it can get, post, update or delete any data from database. When it comes to store something we will use MondoDB and to access data from database we will use NodeJS
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What are the differences between NoSQL and SQL?</Accordion.Header>
                        <Accordion.Body>
                            NoSQL have dynamic schema where SQL have static schema. NoSQL are horizontally scalable but SQL are vertically scalable. NoSQL is used for storing data in the form of JSON but SQL is used for storing data in the form of SQL.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is JWT and how does it work?</Accordion.Header>
                        <Accordion.Body>
                            The full form of JWT is JSON Web Token. It is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. When an user logs in jwt creates a token for that user and using that token it verifies if user is authorized or not. If not it takes action.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </>
    );
};

export default Blogs;