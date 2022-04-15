import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import LogoVN from "../../assets/vi.svg";
import LogoEN from "../../assets/en.svg";
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';
import { FormattedMessage } from 'react-intl';

class Header extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions

    }

    render() {
        const { processLogout, language, userInfo } = this.props;
        console.log('"Check userinfo:', userInfo);

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                <div className="header-right">
                    <span className="Welcome"><FormattedMessage id="homeheader.welcome" />, {userInfo && userInfo.lastName ? userInfo.lastName : ''}!</span>
                    <div className="dropdown" >
                        <button type="button" className="dropdown-language">
                            {
                                language === LANGUAGES.VI &&
                                <>
                                    <img src={LogoVN} value="vi" className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} onClick={() => { this.changeLanguage(LANGUAGES.VI) }} />
                                    <ul className="list-language">
                                        <li value="en" className="list-language-li" onClick={() => { this.changeLanguage(LANGUAGES.EN) }}>
                                            <img src={LogoEN} />
                                            <span className="sp-li">EN</span>
                                        </li>
                                    </ul>

                                </>
                            }
                            {
                                language === LANGUAGES.EN &&
                                <>
                                    <img src={LogoEN} style={{ width: "20px", height: "20px" }} value="en" className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} onClick={() => { this.changeLanguage(LANGUAGES.EN) }} />
                                    <ul className="list-language" >
                                        <li value="vi" className="list-language-li" onClick={() => { this.changeLanguage(LANGUAGES.VI) }}>
                                            <img src={LogoVN} />
                                            <span className="sp-li">VI</span>
                                        </li>
                                    </ul>

                                </>

                            }

                        </button>
                    </div>

                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title="logout">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
