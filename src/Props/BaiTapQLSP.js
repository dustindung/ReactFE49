import React, { Component } from 'react'

export default class BaiTapQLSP extends Component {

    state = {
        sanPhamChiTiet: (
            { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" }
        )
    }

    renderSanPham = () => {
        return this.props.mangSP?.map((item, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left" >
                    <img className="card-img-top" src={item.hinhAnh} style={{ height: 250 }} alt={item.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        <p className="card-text">{item.giaBan}</p>
                        <button className="btn btn-success" onClick={() =>{
                            this.xemChiTiet(item)
                        }}>Xem Chi Tiet</button>
                    </div>
                </div>
            </div>

        })
    }

    xemChiTiet = (spClick) => {
        console.log('spClick', spClick);
        //setState cho sản phẩm chi tiết = sản phẩm được click
        this.setState({
            sanPhamChiTiet:spClick
        })
    }

    render() {



        //Bóc tác phần tử ES6 destruction, xem lại slide ES^
        let { maSP, tenSP, hinhAnh, manHinh, cameraTruoc, cameraSau, heDieuHanh, gia, ram, rom } = this.state.sanPhamChiTiet;

        return (
            <div className="container">
                <h3>Danh Sach San Pham</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <hr />
                <div className="row">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img src={hinhAnh} className="img-fluid" alt={hinhAnh} />
                    </div>
                    <div className="col-8">
                        <h3>Thong so ky thuat</h3>
                        <table className="table">
                            <tr>
                                <th>Man hinh</th>
                                <th>{manHinh}</th>
                            </tr>
                            <tr>
                                <th>He Dieu Hanh</th>
                                <th>{heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera truoc</th>
                                <th>{cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <th>{cameraSau}</th>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <th>{ram}</th>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <th>{rom}</th>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
