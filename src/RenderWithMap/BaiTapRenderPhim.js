import React, { Component } from 'react';
import data from './DataFilms.json';
// import './BaiTapRenderPhim.css';


export default class BaiTapRenderPhim extends Component {



    renderCardMovie = () => {
        return data.map((item, index) => {
            return <div className="col-2 mb-5" key={index}>
                <div className="card bg-dark text-white text-left" >
                    <img src={item.hinhAnh} style={{ height: 300 }} className="card-img-top" alt={item.hinhAnh} />
                    <div className="card-body">
                        <h5 className="card-title" style={{ height: 50 }}>{item.tenPhim.length > 20 ? <span>{item.tenPhim.substring(0, 20)}...</span> : <span>{item.tenPhim}</span>}</h5>
                        <p className="card-text" style={{ height: 125 }}>{item.moTa.length > 75 ? <span>{item.moTa.substring(0, 75)}...</span> : <span>{item.moTa}</span>}</p>

                    </div>
                </div>
            </div>
        })
    }
    render() {
        return (
            <div style={{ backgroundImage: 'url("./img/avenger.jpg")', backgroundSize: '100%', width: '100%', minHeight: 1000 }} >

                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(108, 99, 171, .5)' }}>
                    <a className="navbar-brand" href="#">CYBERLEARN MOVIE</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>

                <div style={{ width: '100%', minheight: 1000, backgroundColor: 'rgba(0,0,0,.5' }}>


                    <h3 className="mt-2 mb-2 text-center display-4 text-light">Danh Sach Phim</h3>
                    <div className="container-fluid">
                        <div className="row">
                            {this.renderCardMovie()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
