//Tổ chức reducer để lưu trữ và xử lý state của bài tập game xúc xắc
const mangXucXac = [
    { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
    { ma: 2, hinhAnh: './img/gameXucXac/2.png' },
    { ma: 3, hinhAnh: './img/gameXucXac/3.png' },
    { ma: 4, hinhAnh: './img/gameXucXac/4.png' },
    { ma: 5, hinhAnh: './img/gameXucXac/5.png' },
    { ma: 6, hinhAnh: './img/gameXucXac/6.png' },
]

const stateDefault = {
    banChon: true,
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangXucXac: [
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
        { ma: 6, hinhAnh: './img/gameXucXac/6.png' },
        { ma: 6, hinhAnh: './img/gameXucXac/6.png' },

    ]
}

export const gameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC_TAI_XIU': {
            state.banChon = action.ketQuaChon; //Vì là kiểu dữ liệu cơ sở (boolean) nên cập nhập đơn giản hơn, ko cần {...}
            return { ...state }
        }
        case 'PLAY_GAME': {
            //tạo ra 3 viên xúc xắc ngẫu nhiên add vào mãng
            let mangXucXacNgauNhien = [];
            //thực hiện random 3 lần để tạo ra 3 viên xúc xắc ngẫu nhiên đưa vào mảng
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                //từ ngẫu nhiên tạo ra xúc xắc ngẫu nhiên
                let xucXacNgauNhien = mangXucXac[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            //cập nhập lại state.mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien;
            //cập nhập số bàn chơi
            state.tongSoBanChoi += 1;

            //tính điểm từ mangXucXacNgauNhien
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXacNgauNhien, index) => {
                return tongDiem += xucXacNgauNhien.ma;
            }, 0);

            //so sánh tongDiem và giá trị người dùng chọn
            //nếu tổng điểm lớn hơn 9 và banChon = true => tahngws
            //nếu tổng điểm <= 9 và banChon = false => thua
            if ((tongDiem > 9 && state.banChon) || (tongDiem <= 9 && !state.banChon)) {
                state.soBanThang += 1;
            }
            return { ...state };
        }


        default: return { ...state };
    }

}