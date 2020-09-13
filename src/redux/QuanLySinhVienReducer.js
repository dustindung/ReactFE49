import { THEM_SINH_VIEN } from "./types/QuanLySinhVienTypes"

const initialState = {
    mangSinhVien:[
        {maSinhVien: 1, tenSinhVien: 'Nguyen Van A', soDienThoai: 12345678, email: 'nguyenvanA@gmail.com'},
        {maSinhVien: 2, tenSinhVien: 'Nguyen Van B', soDienThoai: 87654321, email: 'nguyenvanB@gmail.com'},
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case THEM_SINH_VIEN: {
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return {...state}
        }
    

    default:
        return state
    }
}
