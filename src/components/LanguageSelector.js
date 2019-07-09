import React,{Component} from 'react'

class LanguageSelector extends Component{
    render(){
    
    return (
        <div>
            Select a language
            <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
            <i className="flag jp" onClick={() => this.props.onLanguageChange('japanese')}/>
        </div>
        )
    }
}

export default LanguageSelector