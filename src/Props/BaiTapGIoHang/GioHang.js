import React, { Component } from 'react'

export default class GioHang extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td><img src={spGH.hinhAnh} style={{ width: 50 }}></img></td>
                <td>{spGH.tenSP}</td>
                <td>{spGH.gia}</td>
                <td>
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, true)
                    }}>+</button>
                    {spGH.soLuong}
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, false)
                    }}>-</button>
                </td>
                <td>{spGH.gia * spGH.soLuong}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        this.props.xoaGioHang(spGH.maSP)
                    }}>Xoá</button>
                </td>
            </tr>
        });
    }

    render() {
        return (
            <div>
                {/* Button trigger modal */}
                {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Launch
  </button> */}
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
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
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
