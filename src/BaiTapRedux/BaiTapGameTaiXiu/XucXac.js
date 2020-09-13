import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    renderXucXac = () => {
        //lấy mảng xúc xắc từ redux và binding ra giao diện
        const { mangXucXac } = this.props;
        return mangXucXac.map((xucXac, index) => {
            return <img key={index} className="ml-5" src={xucXac.hinhAnh} style={{ width: 50 }} alt={xucXac.hinhAnh} ></img>
        })
    }
    render() {
        const {banChon} = this.props;   
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <button style={{ fontSize: 50, border: banChon ? '5px solid yellow' : 'none'  }} className="btn display-4 text-white bg-primary p-5 ml-5" onClick={() => {
                            this.props.datCuocTaiXiu(true)
                        }}>TÀI</button>
                    </div>
                    <div className="col-6 text-center">
                        {this.renderXucXac()};
                        {/* <img className="ml-5" src={"./img/gameXucXac/1.png"} style={{ width: 50 }}></img>
                        <img className="ml-5" src="./img/gameXucXac/1.png" style={{ width: 50 }}></img>
                        <img className="ml-5" src="./img/gameXucXac/1.png" style={{ width: 50 }}></img> */}
                    </div>
                    <div className="col-3">
                        <button style={{ fontSize: 50, border: !banChon ? '5px solid yellow' : 'none' }} className="btn display-4 text-white bg-primary p-5 ml-5" onClick={() => {
                            this.props.datCuocTaiXiu(false)
                        }}>XỈU</button>
                    </div>
                </div>
            </div>
        )
    }
}
//Lấy dữ liệu từ redux về
const mapStateToProps = state => {
    return {
        mangXucXac: state.GameXucXacReducer.mangXucXac,
        banChon: state.GameXucXacReducer.banChon,
    }
}

//Tạo ra props đưa dữ liệu lên redux store
const mapDispatchToProps = (dispatch) => {
    return {
        datCuocTaiXiu: (ketQuaChon) => {
            console.log('ketQuaChon', ketQuaChon);
            const action = {
                type: 'DAT_CUOC_TAI_XIU', //Phải khác tên đối với các type nghiệp vụ khác
                ketQuaChon
            }
            //đưa action lên tất cả reducer
            dispatch(action);
        }
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(XucXac)
