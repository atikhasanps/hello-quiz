import React from 'react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Blog = () => {
    const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
    return (
        <div className='w-1/2 mx-auto text-center justify-center'>    
            
             <h2 className='mt-16 mb-8 font-bold text-3xl'>Question</h2>
            <Fragment>
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              What is the purpose of react router?
            </AccordionHeader>
            <AccordionBody>
            ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              How does context Api work?
            </AccordionHeader>
            <AccordionBody>
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              What is useHref?
            </AccordionHeader>
            <AccordionBody>
            The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.  We may be interested in taking a look at the source for the  component in react-router-dom to see how it uses useHref internally to determine its own href value.
            </AccordionBody>
          </Accordion>
        </Fragment>
        </div>
      );
};

export default Blog;