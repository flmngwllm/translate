import React,{Component} from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'
import LanguageSelector from './LanguageSelector'

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
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <ColorContext.Provider value={"red"}>
            <LanguageContext.Provider value={this.state.language}>
                <UserCreate />
            </LanguageContext.Provider>
        </ColorContext.Provider>
        </div>
     )
    }
}

export default App