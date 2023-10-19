import React from "react";
import ConditionalOutputIFElse from "./ConditionalOutputIFElse";
import ConditionalOutputInline from "./ConditionalOutputInline";

const ConditionalOutput = () => {
    return (
        <>
            <ConditionalOutputIFElse/>
            <ConditionalOutputInline/>
        </>
    );
};

export default ConditionalOutput;