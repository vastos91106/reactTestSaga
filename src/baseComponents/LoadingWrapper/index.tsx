import * as React from 'react';

import Props from "./Props";

const LoadingWrapper: React.FunctionComponent<any> = (props) => {
    return (
        props.Loading ? <span>Loading</span> : props.children
    )
};

export default LoadingWrapper;