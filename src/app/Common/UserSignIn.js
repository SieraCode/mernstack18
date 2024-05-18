
import React from 'react'

class UseerSignIn extends React.Component {
    constructir(props){
        super(props)
        this.state = {username:"", password:""}

        this.username = React.createRef()
        this.password = React.createRef()
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({usernmame: this.username.current.value},{password: this.password.current.value})
        const inputUsername = document.getElementById('inputUsername')
        const inputPassword = document.getElementById('inputPassword')
    }

    render(){
        return(
            <div className="UserSignIn">
                <header><h2>Sign In</h2></header>
                <form onSubmit={this.handleSubmit}>
                    <input id='inputUsername' ref={this.username}/>
                    <input id='inputPassword' ref={this.password}/>
                </form>
            </div>
        )
    }
}