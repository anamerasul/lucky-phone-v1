import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className="container">
            <h3 className="text-center">Frequently Asked Questions </h3>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How react works?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>
                                React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It’s ‘V’ in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible.It's maintained by Facebook.

                                While building client-side apps, a team of Facebook developers accomplished that the DOM is slow (The Document Object Model (DOM) is AN application programming interface (API) for hypertext mark-up language and XML documents. It defines the logical structure of documents and also the means a document is accessed and manipulated.). So, to create it quicker, React implements a virtual DOM that's essentially a DOM tree illustration in JavaScript. thus once it has to scan or write to the DOM, it'll use the virtual illustration of it. Then the virtual DOM can try and realize the foremost economical thanks to update the browser’s DOM.
                                Unlike browser DOM parts, React parts ar plain objects and ar low cost to make. React DOM takes care of change the DOM to match the React parts. the rationale for this is often that JavaScript is incredibly quick and it’s value keeping a DOM tree in it to hurry up its manipulation.

                            </p>

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;