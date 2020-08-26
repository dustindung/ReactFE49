import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {
    render() {
        return (

            //this.props là thuộc tính có sẵn của component.
            //Lưu ý: dùng để nhận giá trị từ component cha truyền vào, và không thay đổi được giá trị đó
            <div>
                {/* <p>Ho Ten: {this.props.hoTen}</p>
                <p>Lop: {this.props.lop} </p> */}

                <div className="card text-left" style={{width:200}}>
                    <img className="card-img-top" src={this.props.sinhVien.hinhAnh}  />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.sinhVien.hoTen}</h4>
                        <p className="card-text">{this.props.sinhVien.lop} </p>
                    </div>
                </div>

            </div>
        )
    }
}
