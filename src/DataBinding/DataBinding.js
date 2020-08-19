import React, { Component } from 'react'

export default class DataBinding extends Component {
    //Thuộc tính
    product = {
        id: 1,
        name: 'iphoneX',
        price: 1000,
    }

    //Phương thức
    renderCard = () => {
        return <div className="card" style={{ width: '18rem' }}>
            <img src="http://picsum.photos/180/180" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.product.name}</h5>
                <p className="card-text">{this.product.price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    }

    render() {
        //Binding data
        let title = 'Hello Front End 49';
        let photo = 'http://picsum.photos/200/200';

        //Binding function
        let renderImg = () => {

            return <img src="http://picsum.photos/100/100" />
        }

        return (
            <div>
                <h1 id="title">{title}</h1>
                <img src={photo} />
                <img src="./img/logo.jpg" />

                <div>
                    {renderImg()}
                </div>

                <div>
                    {this.renderCard()}
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src="http://picsum.photos/210/210" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.product.name}</h5>
                        <p className="card-text">{this.product.price}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        )
    }
}
