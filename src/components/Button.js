import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext'

class Button extends Component {
//created a link to the context object
    static contextType = LanguageContext;
    render() {
        const text = this.context === 'english' ? 'Submit' : 'Teishutsu suru'
        return (
            <button className="ui button primary">
                {text}
            </button>
        );
    }
}

export default Button;