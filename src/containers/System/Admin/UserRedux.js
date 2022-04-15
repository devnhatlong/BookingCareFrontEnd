import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="user-redux-container">
                <div className="title">User products</div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">Thêm mới người dùng</div>
                            <div className="col-3">
                                <label>Email</label>
                                <input className="form-control" type="email" />
                            </div>
                            <div className="col-3">
                                <label>Password</label>
                                <input className="form-control" type="password" />
                            </div>
                            <div className="col-3">
                                <label>First name</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label>Last name</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label>Phone number</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-9">
                                <label>Address</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label>Gender</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label>Position</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label>RoleID</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label>Image</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);