import React,{Component} from 'react'

//created context object with a default value
const Context = React.createContext('english');

export class LanguageStore extends Component {
    state = {language: 'english'}

    onLanguageChange = (language) => {
        this.setState({language})
    }

    render(){
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange }}>
                {this.props.children}
                </Context.Provider>
        )
    }
}

export default Context


