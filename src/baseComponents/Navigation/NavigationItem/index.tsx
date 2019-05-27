import * as React from 'react';


import Props from "./Props";

const NavigationItem: React.FunctionComponent<Props> = (props) => {

    function getClsModification(isActive: boolean) {
        const baseCls = "nav-item";
        const modification = isActive ? "active" : "";

        return `${baseCls} ${modification}`;
    }

    return (
        <li className={getClsModification(props.Active)}>
            <a className="nav-link" href={props.Link}>{props.Title}</a>
        </li>
    );
};

export default NavigationItem;