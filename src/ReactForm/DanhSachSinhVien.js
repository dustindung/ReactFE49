import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import { connect } from 'react-redux'

class DanhSachSinhVien extends Component {
    renderTableSinhVien = () => {
        let { mangSinhVien } = this.props;
        return mangSinhVien.map((sinhVien, index) => {
            return <tr key={index}>
                <td>{sinhVien.maSinhVien}</td>
                <td>{sinhVien.tenSinhVien}</td>
                <td>{sinhVien.email}</td>
                <td>{sinhVien.soDienThoai}</td>
                <td>
                    <button className="btn btn-primary mr-2">Chỉnh sửa</button>
                    <button className="btn btn-danger">Xoá</button></td>

            </tr>
        })
    }

    render() {
        return (
            <div>
                <FormSinhVien></FormSinhVien>
                <div className="container-fluid"></div>
                <table className="table bg-dark text-white">
                    <thead>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-light text-dark">
                        {this.renderTableSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,

    }
}

export default connect(mapStateToProps)(DanhSachSinhVien)
