import React, { Component } from 'react'
import ChillComponent from './ChillComponent'
import Header from './Header';

export default class LifeCycle extends Component {

    constructor(props){
        super(props);

        console.log('constructor');
        this.state = {
            sinhVien: {
                id: 1,
                name: 'Nguyen Van A'
            }, // giá trị là object
            number: 1,
        }
    }

    static getDerivedStateFromProps(newState, currentState){
        console.log('getDerivedStateFromProps cha');

        return currentState;
    }

    shouldComponentUpdate(newProps, newState){
        console.log('shouldComponentUpdate cha')

        return true;
    }

    render() {
        console.log('render component cha')
        return (

            <div className="container">
                <h1>{this.state.sinhVien.name}</h1>
                <button  onClick={()=>{
                    // let sinhVien = this.state.sinhVien; 
                    // phai copy lại state thì header mới render lại
                    let sinhVien = {...this.state.sinhVien}; 
                    sinhVien.name = 'Nguyen Van B';

                    this.setState({
                        sinhVien: sinhVien
                    })                    
                }}>+</button>

                <h1>{this.state.number}</h1>
                
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>setNumber</button>

                {this.state.number < 3 ? 
                <Header sinhVien={this.state.sinhVien}></Header>: ''}

                <ChillComponent></ChillComponent>
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount cha')
    }

    componentDidUpdate(propsCu, stateCu){
        console.log('componentDidUpdate cha')
    }
}
