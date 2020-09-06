import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachSanPhamRedux extends Component {

    renderSanPham = () => {
        //Nhận props mangSanSanPham từ component cha render ra giao diện
        return this.props.mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPhamRedux sanPham={sanPham}></SanPhamRedux>
            </div>
        })
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Bài tập giỏ hàng redux</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
