import React, { Component } from 'react';
import { connect } from 'react-redux'; //Kết nối redux
import BaiTapGioHangRedux from './BaiTapGioHangRedux';


class SanPhamRedux extends Component {


    render() {
        let { sanPham } = this.props;

        return (
            <div className="card">
                <img className={sanPham.hinhAnh} src={sanPham.hinhAnh} style={{ width: 250 }} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={() => {
                        this.props.themGioHang(sanPham)
                    }}>Thêm sản phẩm</button>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => { //dispatch là hàm giống hàm setState
    return {
        themGioHang: (sanPhamClick) => {
            console.log('sanPhamClick', sanPhamClick)
            const action = {
                type: 'THEM_GIO_HANG', //đây là thuộc tính bắt buộc
                sanPham: sanPhamClick, //Nội dung đưa lên store của redux

            }
            //Dùng hàm dispatch gửi action lên redux
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)