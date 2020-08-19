import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="row">
                    <div className="col-4">
                        <Menu></Menu>
                    </div>
                    <div className="col-8">
                        <Content></Content>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
