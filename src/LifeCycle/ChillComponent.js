import React, { Component } from 'react'

export default class ChillComponent extends Component {

    constructor(props){
        super(props);

        console.log('constructor child')

        this.state = {

        }
    }

    static getDerivedStateFromProps(newState, currentState){
        console.log('getDerivedStateFromProps child')

        return currentState;
    }

    shouldComponentUpdate(newProps, newState){
        console.log('shouldComponentUpdate child')

        return true;
    }

    render() {
        console.log('render Child')
        return (
            <div>
                
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount child')
    }

    componentDidUpdate(propCu, StateCu){
        console.log('componentDidUpdate child');
    }
}
