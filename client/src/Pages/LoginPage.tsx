import React, { Component } from 'react'
import Header from '../components/Header/Header'
import LoginForm from '../components/Login/LoginForm'


export default class extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <LoginForm></LoginForm>
            </div>
        )
    }
}
