import React,{Component} from 'react'
import LanguageContext from '../context/LanguageContext'

class LanguageSelector extends Component{
    //links to our Context object
    static contextType = LanguageContext;
    render(){
    console.log(this.context)
    return (
        <div>
            Select a language
            <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
            <i className="flag jp" onClick={() => this.context.onLanguageChange('japanese')}/>
        </div>
        )
    }
}

export default LanguageSelector