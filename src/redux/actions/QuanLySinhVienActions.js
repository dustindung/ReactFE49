import {THEM_SINH_VIEN, CHINH_SUA_SINH_VIEN, CAP_NHAT_SINH_VIEN} from "../types/QuanLySinhVienTypes"



export const themSinhVienAction = (sinhVien) => {
    return {
        type: THEM_SINH_VIEN,
        sinhVien
    }
}

export const chinhSuaSinhVienAction = (sinhVien) => {
    return {
        type: CHINH_SUA_SINH_VIEN,
        sinhVien
    }
}

// { return noiDung} => ( noiDung )
// rxaction - snipet

export const capNhatSinhVien = (sinhVienCapNhat) => ({
    type: CAP_NHAT_SINH_VIEN,
    sinhVienCapNhat
})

