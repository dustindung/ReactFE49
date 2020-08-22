import React from 'react'
import BT3Header from './BT3Header'
import BT3Sidebar from './BT3Sidebar'
import BT3Carousel from './BT3Carousel'
import BT3Content from './BT3Content'
import BT3ProductList from './BT3ProductList'
import BT3Footer from './BT3Footer'

export default function BaiTapThucHanhLayout() {
    return (
        <div>
            <BT3Header></BT3Header>
            <div className="row">
                <div className="col-2"><BT3Sidebar></BT3Sidebar></div>
                <div className="col-8"><BT3Carousel></BT3Carousel>
                <BT3ProductList></BT3ProductList>
                </div>
                <div className="col-2"><BT3Content></BT3Content></div>
            </div>
            <BT3Footer></BT3Footer>


        </div>
    )
}
