import * as React from 'react';

import Props from "./Props";

import NavigationItem from './NavigationItem';

const Navigation: React.FunctionComponent<Props> = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {
                        props.Items.map((item, index) => {
                            return <NavigationItem key={index} {...item}/>
                        })
                    }
                </ul>
                <span className="navbar-text">
			     	{props.UserName}
			    </span>
            </div>
        </nav>
    )
};

export default Navigation;