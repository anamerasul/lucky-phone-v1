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
                            What are the differences between props and state?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">

                            <p>props:
                                <ol>
                                    <li>Props are read-only.</li>
                                    <li>Props are immutable.</li>
                                    <li>Props enable you to pass information from one element to different parts as Associate in Nursing argument..</li>
                                    <li>Props are often accessed by the kid element.</li>
                                    <li>Props are use to communicate between components.</li>
                                    <li>Stateless element will have Props.</li>
                                    <li>Props are external and controlled by whatever renders the component.</li>
                                </ol>

                                <p>
                                    State:
                                    <ol>
                                        <li>State changes can be asynchronous.</li>
                                        <li>State is mutable .</li>
                                        <li>State changes will be asynchronous.</li>
                                        <li>State can not be accessed by kid elements.</li>
                                        <li>States are often used for rendering dynamic changes with the component</li>
                                        <li>Stateless elements cannot have State.</li>
                                        <li> The State is internal and controlled by the React elements itself.</li>
                                    </ol>
                                </p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How useState work?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>
                                useState may be a Hook that enables you to own state variables in practical elements. You pass the initial state this function perform and it returns a variable with the current state worth (not essentially the initial state) and another perform to update this value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;