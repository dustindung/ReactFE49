import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {

    sinhVien = {
        hoTen:'Nguyen Van Teo',
        hinhAnh:'https://api.adorable.io/avatars/250/abott@adorable.png',
        lop:'FE 49',
    }


    render() {
        return (
            <div>
                {/* <ThongTinSinhVien hoTen="Nguyen Van Teo" lop="FrontEnd49"></ThongTinSinhVien>
                <ThongTinSinhVien hoTen="Nguyen Van A" lop="FrontEnd50"></ThongTinSinhVien>
                <ThongTinSinhVien hoTen="Nguyen Van B" lop="FrontEnd51"></ThongTinSinhVien> */}
                <ThongTinSinhVien sinhVien={this.sinhVien}></ThongTinSinhVien>
            </div>
        )
    }
}
