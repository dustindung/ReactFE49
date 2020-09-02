import React, { Component } from 'react'
import SanPhamKinh from './SanPhamKinh'
import './BaiTapThuKinh.css';


export default class BaiTapThuKinh extends Component {

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ]

    state = {
        matKinhDuocChon:
            { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }

    }

    xemChiTiet = (spClick) => {
        this.setState({
            matKinhDuocChon: spClick
        })
    }


    render() {

        let { name, desc, url } = this.state.matKinhDuocChon;
        return (
            <div style={{ backgroundImage: 'url("./img/glassesImage/background.jpg")', backgroundSize: '100%', width: '100%', minHeight: 1000 }}>

                <div style={{ width: '100%', minHeight: 100, backgroundColor: 'rgba(0,0,0,.8)' }}><h3 className="pt-4 text-white">TRY GLASSES APP ONLINE</h3></div>

                <div style={{ width: '100%', minHeight: 1000, backgroundColor: 'rgba(0,0,0,.5)' }}>

                    <div className="container">
                        <div className="row pt-4">
                            <div className="col-6">

                                <div className="cardThuKinh" style={{ width: 250, height: 300 }}>
                                    <img className="card-img-top" src="./img/glassesImage/model.jpg" />
                                    <img className="cardImgThuKinh" src={url} style={{ width: 120, height: 50 }} />
                                    <div className="cardThuKinh-body" style={{ backgroundColor: 'rgba(240, 198, 81, 0.8)', width: '100%', textAlign: "left" }}>
                                        <h4 className="cardThuKinh-title ">{name}</h4>
                                        <p className="cardThuKinh-text">{desc}</p>
                                    </div>
                                </div>


                            </div>
                            <div className="col-6">
                                <img src="./img/glassesImage/model.jpg" width={250} height={300} ></img>
                            </div>
                        </div>

                        <SanPhamKinh arrProduct={this.arrProduct} xemChiTiet={this.xemChiTiet}></SanPhamKinh>




                    </div>

                </div>
            </div>
        )
    }
}
