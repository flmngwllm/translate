import React,{Component} from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'

class App extends Component {

// assigned the language object with a string value to the state
state = {
    laguage: 'english'
}

//setting the state on the laguage object
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


        <LanguageContext.Provider value={this.state.language}>
        <UserCreate />
        </LanguageContext.Provider>
        </div>
     )
    }
}

export default App