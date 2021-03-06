import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {

    //state giỏ hàng
    state = {
        gioHang: [
            // { maSP: 1, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 1000, soLuong: 1 }
        ]
    }

    mangSanPham = [

        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }

    ]

    //hàm setState phải viết cùng với state
    //Phương thức thêm giỏ hàng
    themGioHang = (spClick) => {
        // console.log('spClick',spClick);

        //Tạo ra 1 sản phẩm giỏ hàng từ sản phẩm được click
        let spGioHang = {
            maSP: spClick.maSP,
            tenSP: spClick.tenSP,
            hinhAnh: spClick.hinhAnh,
            gia: spClick.giaBan,
            soLuong: 1,
        }

        //setState giỏ hàng tại đây
        let gioHangUpdate = this.state.gioHang;
        // gioHangUpdate.push(spGioHang);

        //Tìm sp đó có trong giỏ hàng không

        let index = gioHangUpdate.findIndex(spGH => spGH.maSP === spGioHang.maSP);

        if (index != -1) {//Tìm thấy vị trí index => tăng số lượng
            gioHangUpdate[index].soLuong += 1;
        } else {
            //Không tìm thấy trong giỏ hàng => thêm sản phầm vào giỏ hàng
            gioHangUpdate.push(spGioHang);
        }

        this.setState({
            gioHang: gioHangUpdate
        })
    }

    // xoaGioHang = (maSP) => {
    //     let gioHangUpdate = this.state.gioHang;

    //     //Tìm xem trong giỏ hàng có mã SP được click(xoá) không?
    //     let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP);

    //     if (index !== -1) {
    //         gioHangUpdate.splice(index, 1)
    //     }

    //     // Sau khi xoá SP giỏ hàng thì cập nhập lại state
    //     this.setState({
    //         gioHang: gioHangUpdate
    //     })
    // }

    xoaGioHang = (maSP) => {
        //Tìm ra trong mảng, sản phẩm nào không có mã đó, thì lấy sản phẩm đó ra
        this.setState({
            gioHang: this.state.gioHang.filter(sp => sp.maSP !== maSP)
        })
    }

    tangGiamSoLuong = (maSP,tangGiam) => { //tangGiam = true => tăng | tangGiam = false => giảm
        console.log(maSP,tangGiam)

        let gioHangUpdate = this.state.gioHang;

        let index = gioHangUpdate.findIndex(spGioHang => spGioHang.maSP === maSP);

        if(index !== -1){
            if(tangGiam){ //Tăng giảm = true => tăng số lượng
                gioHangUpdate[index].soLuong += 1;
            } else {
                //Nếu sp giảm thì xem số lượng > 1 mới cho giảm
                if(gioHangUpdate[index].soLuong > 1){
                    gioHangUpdate[index].soLuong -= 1;
                } else {
                    alert('Số lượng tối thiểu là 1!')
                }
            }
        }

        this.setState({
            gioHang: gioHangUpdate
        })
    }

    tinhSoLuongGH = () => {
        return this.state.gioHang.reduce((soLuong, spGH, index) => {
            return soLuong += spGH.soLuong;
        }, 0)
    }

    render() {
        //Bước 1: Xây dựng giao diện (dàn layout)
        //Bước 2: Xác định giá trị thay đổi trên giao diện => Tổ chức lữu trữ state
        //Bước 3: THực hiện xử lý chức năng => Thay đổi state
        return (
            <div className="container">
                <h3 className="text-center">Bài Tập Giỏ Hàng</h3>

                <div className="gioHang">
                    <div className="text-right text-danger">
                        <span data-toggle="modal" data-target="#modelId" style={{ cursor: 'pointer' }}>Giỏi hàng ({this.tinhSoLuongGH()})</span>
                    </div>
                    <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}></GioHang>
                </div>


                <DanhSachSanPham mangSanPham={this.mangSanPham} themGioHang={this.themGioHang}></DanhSachSanPham>
            </div>
        )
    }
}
