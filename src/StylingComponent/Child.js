import React, { Component } from 'react'
import './Styling.scss';
import style from './Styling.module.scss';

export default class Child extends Component {
    render() {
        //let objectStyle = {borderColor:'red', color:'white'};
        return (
            <div>
                child component
                <div className={style.content}>
                    child component 2

                    
                </div>

                
                

                {/* <p style={objectStyle}>
                    Hello cybersoft fe49! Day la doan van ban
                </p> */}
                
                <p style={{borderColor:'red', background:'orange', fontSize:'15px', border:'5px solid red'}}>
                    Hello cybersoft fe49! Day la doan van ban
                </p>
                
            </div>
        )
    }
}
