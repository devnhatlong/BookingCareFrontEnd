import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import LogoVN from "../../assets/vi.svg";
import LogoEN from "../../assets/en.svg";
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions';


class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions

    }

    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                {/* HEADER */}
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars icon-menu"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-center-content">
                                <div>
                                    <b><FormattedMessage id="homeheader.speciality" /></b>
                                </div>
                                <div className="subs-title"><FormattedMessage id="homeheader.searchdoctor" /></div>
                            </div>
                            <div className="child-center-content">
                                <div>
                                    <b><FormattedMessage id="homeheader.health-facility" /></b>
                                </div>
                                <div className="subs-title"><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className="child-center-content">
                                <div>
                                    <b><FormattedMessage id="homeheader.doctor" /></b>
                                </div>
                                <div className="subs-title"><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className="child-center-content">
                                <div>
                                    <b><FormattedMessage id="homeheader.fee" /></b>
                                </div>
                                <div className="subs-title"><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle icon-question"></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
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
                                            <img src={LogoEN} style={{ width: "20px", height: "20px", margin: "-6px" }} value="en" className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} onClick={() => { this.changeLanguage(LANGUAGES.EN) }} />
                                            <ul className="list-language" style={{ marginLeft: "-7px" }}>
                                                <li value="vi" className="list-language-li" onClick={() => { this.changeLanguage(LANGUAGES.VI) }}>
                                                    <img src={LogoVN} />
                                                    <span className="sp-li">VI</span>
                                                </li>
                                            </ul>

                                        </>

                                    }

                                </button>
                            </div>
                            {/* <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => { this.changeLanguage(LANGUAGES.VI) }}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => { this.changeLanguage(LANGUAGES.EN) }}>EN</span></div> */}
                        </div>
                    </div>
                </div >
                {/* BANNER */}
                <div className="home-header-banner">
                    <div className="banner-bg">
                        <div className="title-1">
                            <FormattedMessage id="banner.Medical-background" />
                        </div>
                        <div className="title-2">
                            <FormattedMessage id="banner.Comprehensive-health-care" />
                        </div>
                        <div className="search">
                            <i class="fas fa-search icon-search"></i>
                            <input className="search-input" id="search-input" type="text" placeholder="Tìm kiếm chuyên khoa khám bệnh" />
                        </div>
                        <div className="app-link">
                            <div className="app-GooglePlay"></div>
                            <div className="app-AppStore"></div>
                        </div>
                        <div className="options">
                            <div className="options-bg">
                                <div className="options-child">
                                    <div className="icon-child icon-child-1"></div>
                                    <div className="text-child">
                                        <FormattedMessage id="banner.Specialized-examination" />
                                    </div>
                                </div>
                                <div className="options-child">
                                    <div className="icon-child icon-child-2"></div>
                                    <div className="text-child">
                                        <FormattedMessage id="banner.Remote-medical-examination" />
                                    </div>
                                </div>
                                <div className="options-child">
                                    <div className="icon-child icon-child-3"></div>
                                    <div className="text-child">
                                        <FormattedMessage id="banner.General-examination" />
                                    </div>
                                </div>
                                <div className="options-child">
                                    <div className="icon-child icon-child-4"></div>
                                    <div className="text-child">
                                        <FormattedMessage id="banner.Medical-test" />
                                    </div>
                                </div>
                                <div className="options-child">
                                    <div className="icon-child icon-child-5"></div>
                                    <div className="text-child">
                                        <FormattedMessage id="banner.Mental-health" />
                                    </div>
                                </div>
                                <div className="options-child">
                                    <div className="icon-child icon-child-6"></div>
                                    <div className="text-child">
                                        <FormattedMessage id="banner.Dental-examination" />
                                    </div>
                                </div>
                                <div className="options-child">
                                    <div className="icon-child icon-child-7"></div>
                                    <div className="text-child">
                                        <FormattedMessage id="banner.Surgery-pack" />

                                    </div>
                                </div>
                                <div className="options-child">
                                    <div className="icon-child icon-child-8"></div>
                                    <div className="text-child">
                                        <FormattedMessage id="banner.Medical-products" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment >
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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
