import React, { Component } from 'react'
import './StyleGame/StyleGame.css'
import IronManUser from './IronManUser'
import ThanosComputer from './ThanosComputer'
import { connect } from 'react-redux'



class BaiTapOanTuTi extends Component {
    render() {
        const { soBanThang, soBanChoi } = this.props;
        return (
            <div className="gameOanTuTi">

                <div className="container">
                    <div className="row mt-5" >
                        <div className="col-3">
                            <IronManUser></IronManUser>
                        </div>
                        <div className="col-6">
                            <div className="display-4 text-center text-warning">I'm iron man, i love you 3000</div>
                            <div className="display-4 text-center text-success">So ban thang: <span className="text-warning">{soBanThang}</span></div>
                            <div className="display-4 text-center text-success">So ban choi: <span className="text-warning">{soBanChoi}</span></div>
                            <button className="btn btn-success buttonPlayGame" onClick={() =>{this.props.playGame()}}>Play Game</button>
                        </div>
                        <div className="col-3">
                            <ThanosComputer></ThanosComputer>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        soBanThang: state.GameOanTuTiReducer.soBanThang,
        soBanChoi: state.GameOanTuTiReducer.soBanChoi,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            dispatch({
                type:'PLAY_GAME',
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaiTapOanTuTi)
