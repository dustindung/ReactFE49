import React, { Component } from 'react'
import { connect } from 'react-redux'

class GioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGioHang, index) => {
            return <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td><img src={spGioHang.hinhAnh} width={50}></img></td>
                <td>{spGioHang.tenSP}</td>
                <td>{spGioHang.gia}</td>
                <td>
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGioHang.maSP, true)
                    }}>+</button>
                    {spGioHang.soLuong}
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGioHang.maSP, false)
                    }}>-</button>
                </td>
                <td>{spGioHang.soLuong * spGioHang.gia}</td>
                <td><button className="btn btn-danger" onClick={() => {
                    this.props.xoaGiohang(spGioHang.maSP)
                }}>Xoá</button></td>
            </tr>
        });
    }

    render() {
        console.log(this.props.gioHang)

        return (
            <div>
                <h3>Giỏ hàng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Tổng tiền</td>
                            <td>
                                {
                                    this.props.gioHang.reduce((tongTien, spGH, index) => {
                                        return tongTien += spGH.gia * spGH.soLuong
                                    }, 0).toLocaleString()
                                }
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
//Hàm tạo ra 1 props là function đưa dữ liệu lên redux store (reducer)
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGiohang: (maSP) => {
            //Tạo ra action
            const action = {
                type: 'XOA_GIO_HANG',
                maSP: maSP,
            }
            //Gửi dữ liệu lên reducer
            dispatch(action)
        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            //Tạo ra action đua lên reducer
            // const action = {
            //     type:'TANG_GIAM_SOLUONG',
            //     maSP,
            //     tangGiam,
            // }

            // dispatch(action);

            dispatch({
                type: 'TANG_GIAM_SOLUONG',
                maSP,
                tangGiam,
            });
        }
    }
}


//Hàm biến đổi stateRedux => props của component
const mapStateToProps = (state) => {//state là rootReducer
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
