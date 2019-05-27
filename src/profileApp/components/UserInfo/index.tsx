import * as React from 'react';

import Props from "./Props";

const UserInfo: React.FunctionComponent<Props> = (props) => {
    return (
        <>
            <p>
                {props.name}
            </p>
            <p>
                {props.phone}
            </p>
            <p>
                {props.email}
            </p>
            <p>
                <a target={"_blank"} href={props.webSite}>
                    {props.webSite}
                </a>
            </p>
            <p>
                <button
                    onClick={props.edit}
                    type="button"
                    className="btn btn-primary">
                    Редактировать
                </button>
            </p>
        </>
    )
};

export default UserInfo;