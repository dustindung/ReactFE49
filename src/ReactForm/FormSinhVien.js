import React, { Component } from 'react'
import { connect } from 'react-redux'
import swal from 'sweetalert2'
import { themSinhVienAction, capNhatSinhVien } from '../redux/actions/QuanLySinhVienActions'


class FormSinhVien extends Component {

    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        }
    }

    handleChangeInput = (event) => { //event là sự kiện trên control, gọi hàm này khi onChange
        // let value = event.target.value;
        // let name = event.target.name;
        let { value, name } = event.target;

        let type = event.target.getAttribute('type_'); //lấy ra 1 giá trị thuộc tính trên thẻ do ta tự định nghĩa


        let newValues = { ...this.state.values }; //chép giá trị this.state.values ra 1 biến
        newValues = {
            ...newValues,
            [name]: value,
        };

        let newErrors = { ...this.state.errors, [name]: value.trim() === '' ? `${name} không được bỏ trống !` : '' };

        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (type === 'email') {
            if (!regexEmail.test(value)) {
                newErrors[name] = 'Email không hợp lệ!';
            }
        }

        this.setState({
            values: newValues,
            errors: newErrors,
        }, () => {
            console.log(this.state)
        });

        // let newErros = {...this.state.erros};
    }

    handleSubmit = (event) => {
        event.preventDefault(); // Chặn sự kiện submit của trình duyệt

        //validation
        let valid = true;
        //Nếu value = rỗng || lỗi khác rỗng thì không hợp lệ

        for (let key in this.state.values) {
            if (this.state.values[key] === '') {
                valid = false;
            }
        }

        for (let key in this.state.errors) {
            if (this.state.errors[key].trim() !== '') {
                valid = false;
            }
        }

        if (!valid) {
            swal.fire(
                'Thất bại',
                'Dữ liệu không hợp lệ!',
                'error'
            )
            return;
        }

        //thêm sinh viên
        // const action = {
        //     type:'THEM_SINH_VIEN',
        //     sinhVien:this.state.values
        // }
        const action = themSinhVienAction(this.state.values);
        //Dùng props.dispatch có sẵn khi liên kết với redux sẽ có props này => dispatch action lên reducer
        this.props.dispatch(action);
        swal.fire(
            'Thành Công',
            'Thêm sinh viên thành công!',
            'success'
        )
    }

    // componentWillReceiveProps(newProps) {
    //     //Lifecycle chạy sau khi props thay đổi và trước khi render
    //     //Component không chạy lại khi setState
    //     //Mỗi lần người dùng bấm chỉnh sửa thì props thay đổi => newProps chính là props mới (state.sinhVienSua của redux) => đem props mới gán vào this.state.values

    //     this.setState({
    //         values: newProps.sinhVienSua
    //     })
    // }

    render() {

        // let {sinhVienSua} = this.props;
        let sinhVienSua = this.state.values;

        return (
            <form className="container-fluid" onSubmit={this.handleSubmit}>
                <div className="card text-left">
                    <div className="card-header text-white bg-dark font-weight-bold">THÔNG TIN SINH VIÊN</div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mã Sinh Viên</p>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} value={sinhVienSua.maSinhVien}></input>
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>

                                <div className="form-group">
                                    <p>Tên Sinh Viên</p>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} value={sinhVienSua.tenSinhVien}></input>
                                    <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type_="email" className="form-control" name="email" onChange={this.handleChangeInput} value={sinhVienSua.email}></input>
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>

                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input type_="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput} value={sinhVienSua.soDienThoai}></input>
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-right">
                                <button className="btn btn-success mr-3" type="submit">Thêm sinh viên</button>

                                <button className="btn btn-primary" type="button" onClick={()=>{
                                    //dispatch giá trị sau khi người dùng thay đổi lên redux
                                    let action = capNhatSinhVien(this.state.values);

                                    this.props.dispatch(action)
                                }}>Cập nhập sinh viên</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    componentDidUpdate(propsCu, stateCu) {
        //setState trong Didupdate phải có if
        if (this.props.sinhVienSua.maSinhVien !== stateCu.values.maSinhVien) {
            this.setState({
                values: propsCu.sinhVienSua
            })
        }


    }
}

const mapStateToProps = (state) => {
    return {
        sinhVienSua: state.QuanLySinhVienReducer.sinhVienSua
    }
}

export default connect(mapStateToProps)(FormSinhVien)
