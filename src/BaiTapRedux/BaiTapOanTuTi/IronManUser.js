import React, { Component } from 'react'
import { connect } from 'react-redux'
//border:"solid 3px orange",
class IronManUser extends Component {

    renderBaoBuaKeo = () => {
        const {mangBaoBuaKeo} = this.props;
        console.log('mangBaoBuaKeo',mangBaoBuaKeo)
        return mangBaoBuaKeo.map((baoBuaKeo, index) => {
            return <img key={index} src={baoBuaKeo.hinhAnh} width={50} style={{ background: "white"}} className="ml-4 buttonBaoBuaKeo" onClick={()=>{
                {this.props.onClickLuaChon(baoBuaKeo)}
            }}></img>
        })
    }

    render() {  
        const {banChon} = this.props;
        return (
            <div>
                <div className="chuaHinhBaoBuaKeo"><img src={banChon.hinhAnh} width={100}></img></div>
                <div className="speech-bubble"></div>
                <img src="./img/gameOanTuTi/player.png" width={300}></img>
                {this.renderBaoBuaKeo()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        mangBaoBuaKeo: state.GameOanTuTiReducer.mangBaoBuaKeo,
        banChon: state.GameOanTuTiReducer.banChon
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onClickLuaChon: (ketQua) => {
            const action = {
                type:'ONCLICK_LUA_CHON',
                ketQua
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IronManUser)
