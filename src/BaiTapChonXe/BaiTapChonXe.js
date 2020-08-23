import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    //State là source tấm hình xe
    state = {
        imgCar:'./img/CarBasic/products/black-car.jpg'
    }

    handleChangeColorCar = (imgColor) => {
        //Lấy img được click gán vào state thông qua phương thức setState
        this.setState({
            imgCar:`./img/CarBasic/products/${imgColor}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <img style={{ width: '100%' }} src={this.state.imgCar}></img>
                    </div>
                    <div className="col-4">
                        <div className="card text-left">
                            <div className="card-header">Exterior color</div>
                            <div className="card-body">
                                <div onClick = {() => {
                                    this.handleChangeColorCar('black')
                                    // this.setState({
                                    //     imgCar:'./img/CarBasic/products/black-car.jpg'
                                    // })
                                }} className="row p-2" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '100%' }} src="./img/CarBasic/icons/icon-black.jpg"></img>
                                    </div>
                                    <div className="col-8">
                                        <h5>Crystal Black</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div onClick = {() => {
                                    this.handleChangeColorCar('steel')
                                    // this.setState({
                                    //     imgCar:'./img/CarBasic/products/steel-car.jpg'
                                    // })
                                }} className="row p-2 mt-2" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '100%' }} src="./img/CarBasic/icons/icon-steel.jpg"></img>
                                    </div>
                                    <div className="col-8">
                                        <h5>Modern Steel</h5>
                                        <p>Metallic</p>
                                    </div>
                                </div>

                                <div onClick = {() => {
                                    this.handleChangeColorCar('silver')
                                    // this.setState({
                                    //     imgCar:'./img/CarBasic/products/silver-car.jpg'
                                    // })
                                }} className="row p-2 mt-2" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '100%' }} src="./img/CarBasic/icons/icon-silver.jpg"></img>
                                    </div>
                                    <div className="col-8">
                                        <h5>Lunar Silver</h5>
                                        <p>Metallic</p>
                                    </div>
                                </div>

                                <div onClick = {() => {
                                    this.handleChangeColorCar('red')
                                    // this.setState({
                                    //     imgCar:'./img/CarBasic/products/red-car.jpg'
                                    // })
                                }} className="row p-2 mt-2" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '100%' }} src="./img/CarBasic/icons/icon-red.jpg"></img>
                                    </div>
                                    <div className="col-8">
                                        <h5>Rallye Red</h5>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
