import React, { Component } from 'react'

export default class SanPhamKinh extends Component {
    render() {
        return (
            <div className="container mt-4" style={{ backgroundColor: 'white', width: "100%", height: 200 }}>
                <div className="container p-5">
                    <div className="row">
                        {this.props.arrProduct.map((sanPham, index) => {
                            return <div className="col-2" key={index}>
                                <img className="border img-fluid" src={sanPham.url} onClick={() => {
                                    this.props.xemChiTiet(sanPham)
                                }}></img>

                            </div>
                        })}
                    </div>

                </div>
            </div>
        )
    }
}
