import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThanosComputer extends Component {
    render() {
        const { mayChon } = this.props;
        return (
            <div>
                <div className="chuaHinhBaoBuaKeo"><img src={mayChon.hinhAnh} width={100}></img></div>
                <div className="speech-bubble"></div>
                <img src="./img/gameOanTuTi/playerComputer.png" width={300}></img>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mayChon: state.GameOanTuTiReducer.mayChon,
    }
}

export default connect(mapStateToProps)(ThanosComputer)
