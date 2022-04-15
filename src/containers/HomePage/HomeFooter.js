import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {


    render() {
        return (
            <div className="home-footer">
                <div className="footer-content">&copy; 2022 - Nguyễn Nhật Long. <a target="_blank" href="https://www.facebook.com/raitokunvn/">More infomation</a></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
