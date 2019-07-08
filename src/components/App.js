import React,{Component} from 'react'

class App extends Component {
state = {
    laguage: 'english'
}

onLanguageChange = (language) => {
    this.setState({language : language})
}

    render(){
     return (
        <div className="ui container">App
        <div>
            Select a language
            <i className="flag us" onClick={() => this.onLanguageChange('english')} />
            <i className="flag jp" onClick={() => this.onLanguageChange('japanese')}/>
        </div>
        {this.state.language}
        </div>
     )
    }
}

export default App