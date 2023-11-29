import React from "react";
import firstCompnent from './firstComponent';
import namedComponent from "./namedComponent";

const app = () => {
    return (
        <div>
            <firstCompnent />
            <namedComponent name ='John Doe' />
        </div>
    );
};

export default app;