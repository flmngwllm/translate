import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

class Button extends Component {
    render() {
        return (
            <ColorContext.Consumer>
            {(color) => 
             <button className={`ui button ${color}`}>
             <LanguageContext.Consumer>
                 {(value) => value === 'english' ? 'Submit' : 'Teishutsu suru'}
             </LanguageContext.Consumer>
         </button>
        }
            </ColorContext.Consumer>
        );
    }
}

export default Button;