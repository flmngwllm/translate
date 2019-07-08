import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext'

class Button extends Component {
//created a link to the context object
    static contextType = LanguageContext;
    render() {
        return (
            <button className="ui button primary">
                Submit
            </button>
        );
    }
}

export default Button;