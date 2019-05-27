import * as React from 'react';

import Props from "./Props";

const ListItem: React.FunctionComponent<Props> = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <h5 className="mb-1">
                {
                    props.Complete &&
                    <s>
                        {props.Title}
                    </s>
                }
                {
                    !props.Complete &&
                    <>
                        {props.Title}
                    </>
                }
            </h5>
            <small>
                {props.Author}
            </small>
        </li>
    )
};

export default ListItem;