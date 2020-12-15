import React from 'react';
import 'bulma/css/bulma.css';

function FormField(props) {

    return (
        <div>
            <div className="field">
                <label className="label">{props.name}</label>
                <div className="control"></div>
                {/* <h1>{props.potato}</h1> */}
                <input label={props.label} type={props.type} placeholder={props.pla} />
            </div>
        </div>
    );
};

export default FormField;


