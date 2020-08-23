import React, { Component } from 'react'

export default class RenderWithState extends Component {

    //Quản lý những giá trị thay đổi trên giao diện
    state = {
        login: false
    }

    //Thuộc tính
    // login = false;
    userName = 'Man';

    renderLogin = () =>{
        if(this.state.login){
            return <p>
                Hello {this.userName}
            </p>
        }
        return <div>
            <button className="btn btn-success" onClick = {() => {
                this.handleLogin();
            }}>Dang Nhap</button>
        </div>
    }

    handleLogin = () => {
        //this.state.login = true; //Không được gán state trực tiếp

        //Phương thức setState => 
        //  Làm thay đổi giá trị state
        //  Gọi lại hàm render chạy lại
        //  setState là phương thức bất đồng bộ
        
        let newState = {login:true};

        this.setState(newState, () => {
            console.log(this.state.login);
        });

        // console.log(this.state.login);
    }

    render() {
        return (
            <div>
                {/* Biểu thức 3 ngôi */}
                {/* {this.login ? <p>Hello {this.userName}</p> : <div><button className="btn btn-success">Dang Nhap</button></div>} */}

                {this.renderLogin()}
            </div>
        )
    }
}
