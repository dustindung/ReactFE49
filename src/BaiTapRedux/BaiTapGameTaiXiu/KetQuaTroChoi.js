import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        const { banChon, soBanThang, tongSoBanChoi, mangXucXac } = this.props;
        console.log(this.props.banChonCom)

        return (
            <div>
                <div className="display-4 text-center">Tổng điểm: <span className="text-primary">{mangXucXac.reduce((tongDiem, xxnn, index) => { return tongDiem += xxnn.ma; }, 0)}</span></div>
                <div className="display-4 text-center">BẠN CHỌN: <span className="text-danger">{banChon ? 'TÀI' : 'XỈU'}</span></div>
                <div className="display-4 text-center">SỐ BÀN THẮNG: <span className="text-success">{soBanThang}</span></div>
                <div className="display-4 text-center">TỔNG SỐ BÀN CHƠI: <span className="text-warning">{tongSoBanChoi}</span></div>
                <div className="display-4 text-center">
                    <button className="btn btn-success p-3" onClick={() => { this.props.playGame() }}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}
//Hàm lấy giá trị từ state redux về biến đổi thành props của component
const mapStateToProps = state => { //state là giá trị từ root reducer truyền vào component
    return {
        banChon: state.GameXucXacReducer.banChon,
        soBanThang: state.GameXucXacReducer.soBanThang,
        tongSoBanChoi: state.GameXucXacReducer.tongSoBanChoi,
        mangXucXac: state.GameXucXacReducer.mangXucXac,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)
