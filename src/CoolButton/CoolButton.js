import React from 'react';
import 'bulma/css/bulma.css';

function CoolButton(props) {

    return (
        <div>
                <button class="button is-rounded my-class is-danger is-small">{props.name}</button>
        </div>
    );
};

export default CoolButton;