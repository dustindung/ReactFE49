import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'iPhone X', price: 1000 },
        { id: 2, name: 'Samsung Note 10 Plus', price: 1000 },
        { id: 3, name: 'HTC m10', price: 2000 },
    ]

    renderProduct = () => {
        // let content = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];
        //     let cardProduct = <div key={i} className="col-4">
        //         <div className="card text-left">
        //             <img className="card-img-top" src="holder.js/100px180/" alt />
        //             <div className="card-body">
        //                 <h4 className="card-title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>

        //     </div>;

        //     content.push(cardProduct);


        // }
        // console.log('content',content);

        let arrJSXProduct = this.productList.map((product, index) => {
            return <div classname="col-4" key="{index}">
                <div classname="card text-left">
                    <img classname="card-img-top" src="https://picsum.photos/200/200" alt="{product.name}" />
                    <div classname="card-body">
                        <h4 classname="card-title">{product.name}</h4>
                        <p classname="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        })

        return arrJSXProduct;

        

    }

    renderTable = () =>{
        return this.productList.map((item, index) => {
            return <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <button className="text-danger">Xoa</button>
                </td>

            </tr>
        })

         
    }

    render() {
        return (
            // [ <div key={1}>
            //     123
            // </div>,
            // <div key={2}>
            //     FrontEnd49
            // </div> ]

            <div className="container">
                {/* <div className="row">
                    {this.renderProduct()}
                </div> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
