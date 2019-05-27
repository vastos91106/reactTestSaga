import * as React from 'react';

import Props from "./Props";

import ListItem from './ListItem';

const List: React.FunctionComponent<Props> = (props) => {
    return (
        <ul className="list-group">
            {
                props.Items.map((item, index) => {
                    return <ListItem key={index} {...item}/>
                })
            }
        </ul>
    )
};

export default List;