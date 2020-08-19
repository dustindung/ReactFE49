import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = () =>{
        alert('hello');
    }

    showInfo = (name) => {
        alert(`name ${name}`);
    }

    render() {
        return (
            <div className="container">
                {/* Cách 1: Truyền callback function thông qua thuộc tính*/}
                <button className="btn btn-primary mr-2" onClick={this.handleClick}>Click me</button>
                <br />
                <button className="btn btn-primary mr-2 my-2" onClick={this.showInfo.bind(this,'Mẫn 2')}>Click me</button>
                <br />
                {/* Có dấu () là tự động gọi hàm, còn không có dấu (), phải click vào hàm mới đc gọi */}

                {/* Cách 2: Dùng arrow function */}
                <button className="btn btn-primary mr-2" onClick={() => {
                    alert('haha');
                    //Click vào gọi nhiều hàm thực hiện ...
                    this.handleClick();
                }}>Show Message</button>
                <br></br>

                <button className="btn btn-primary my-2" onClick={() =>{
                    this.showInfo('Mẫn')
                }}>Show Info</button>
            </div>
        )
    }
}
