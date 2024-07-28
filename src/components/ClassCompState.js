import React, {Component} from 'react';

class ClassCompState extends Component {
    constructor(props) {
        super(props);
        //tạo đối tượng state
        this.state = {
            name: "Devmaster",
            age: 30,
            address: "Ha Noi",
            email: "devmaster.com",
            list: [
                "Toán" , "Văn ", "Anh"
            ]
        }
    }

    //hàm xử lý sự kiện

    ChangeName = () => {
        this.setState({
            name: "Phạm Lê Sơn"
        })
    }

    render() {
        return (
            <div className={"alert alert-primary"}>
                <h1>
                    hiển thị và thay đổi dữ liệu trong state
                </h1>
                <hr/>
                <h5>Name: {this.state.name}</h5>
                <h5>Age: {this.state.age}</h5>
                <h5>Address: {this.state.address}</h5>
                <h5>Email: {this.state.email}</h5>
                <h5>List: {this.state.list}</h5>
                <hr/>
                <button onClick={this.ChangeName}>Change name</button>
            </div>
        );
    }
}

export default ClassCompState;