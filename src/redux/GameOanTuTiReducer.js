const stateDefault = {
    soBanThang: 0,
    soBanChoi: 0,
    // isActive: 1,
    mangBaoBuaKeo: [
        { ma: 1, hinhAnh: './img/gameOanTuTi/bao.png', duocChon: false },
        { ma: 2, hinhAnh: './img/gameOanTuTi/bua.png', duocChon: false },
        { ma: 3, hinhAnh: './img/gameOanTuTi/keo.png', duocChon: false },
    ],
    banChon:
        { ma: 1, hinhAnh: './img/gameOanTuTi/bao.png' },
    mayChon:
        { ma: 2, hinhAnh: './img/gameOanTuTi/bua.png' },



}

export const GameOanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ONCLICK_LUA_CHON': {
            state.banChon = action.ketQua;
            state.mangBaoBuaKeo.duocChon = true;
            // document.getElementsByTagName('img').style.borderColor = "orange";
            return { ...state };
        }
        case 'PLAY_GAME': {

            // let mayChonNgauNhien;
            // for (let i = 0; i < 3; i++) {
            //     let soNgauNhien = Math.floor(Math.random() * 3);
            //     mayChonNgauNhien = state.mangBaoBuaKeo[soNgauNhien];
                
            // }
            let soNgauNhien = Math.floor(Math.random() * 3);
            let mayChonNgauNhien = state.mangBaoBuaKeo[soNgauNhien];

            state.mayChon = mayChonNgauNhien;
            state.soBanChoi += 1;

            if (state.banChon.ma === 1 && state.mayChon.ma === 2) {
                state.soBanThang += 1;
            } else if (state.banChon.ma === 2 && state.mayChon.ma === 3) {
                state.soBanThang += 1;
            } else if (state.banChon.ma === 3 && state.mayChon.ma === 1) {
                state.soBanThang += 1;
            }
            return { ...state }
        }

        default: return { ...state };
    }


}