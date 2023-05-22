import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import graph from "./assets/graph.png";

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <div className="upper-section">
                    <div className="header">
                        <div
                            className="header-dashboard "
                            style={{ fontSize: "12px" }}
                        >
                            <i class="fa-solid fa-house fa-sm"></i>
                            &nbsp;/&nbsp;Dashboard &nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa-solid fa-bars"></i>
                        </div>

                        <div className="left-part">
                            <div class="input-container">
                                <span class="search-icon">&#128269;</span>
                                <input type="text" placeholder="Type here..." />
                            </div>
                            <div className="para">
                                <i
                                    className=" circle-icon fa-solid fa-user fa-sm"
                                    style={{
                                        marginTop:"0px",
                                        backgroundColor: "white",
                                        height: "25px",
                                        width: "25px",
                                        color: "black",
                                    }}
                                ></i>

                                <p style={{ marginRight: "5px" }}> sign in </p>
                                <i
                                    className="fa-sharp fa-solid fa-gear"
                                    style={{ marginRight: "5px" }}
                                ></i>&nbsp;&nbsp;
                                <i class="fa-sharp fa-regular fa-bell"></i>
                            </div>
                        </div>
                    </div>
                    <div
                        className="first-row "
                        style={{ marginLeft: "30%", color: "white" }}
                    >
                        <h6>Dashboard</h6>
                    </div>
                    <div className="sec-row">
                        <div class="box-container">
                            <div class="box-content ">
                                <h2 className="box-heading">TODAY'S MONEY</h2>
                                <div class="numerical-data">$53,000</div>
                                <p>
                                    <span style={{ color: "green" }}>+55%</span>{" "}
                                    since yesterday
                                </p>
                            </div>
                            <div className="circle-icon blue">
                                <i className="icon fa-solid fa-money-check-dollar"></i>
                            </div>
                        </div>

                        <div class="box-container">
                            <div class="box-content ">
                                <h2 className="box-heading">TODAY'S USERS</h2>
                                <div class="numerical-data">2,300</div>
                                <p>
                                    <span style={{ color: "green" }}>+3%</span>{" "}
                                    since last week
                                </p>
                            </div>
                            <div class="circle-icon red">
                                <i className="fa-solid fa-users"></i>
                            </div>
                        </div>

                        <div class="box-container">
                            <div class="box-content ">
                                <h2 className="box-heading">NEW CLIENTS</h2>
                                <div class="numerical-data">+3,4662</div>
                                <p>
                                    <span style={{ color: "red" }}>-2%</span>{" "}
                                    since last quarter
                                </p>
                            </div>
                            <div class="circle-icon light-green">
                                <i className="fa-solid fa-users"></i>
                            </div>
                        </div>

                        <div class="box-container">
                            <div class="box-content ">
                                <h2 className="box-heading">SALES</h2>
                                <div class="numerical-data">$103,430</div>
                                <p>
                                    <span style={{ color: "green" }}>+5%</span>{" "}
                                    than last month
                                </p>
                            </div>
                            <div class="circle-icon orange">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-section">
                    <div className="containers-lower-section">
                        <div className="lower-container"></div>
                    </div>
                </div>
            </div>
            

            <div className="lower_container">
                <div className="box1">
                    <div className="box_header">
                        <h4>Sales Overview</h4>
                        <p style={{ fontSize: "12px" }}>
                            <b>
                                <i
                                    className="fa-solid fa-arrow-up fa-sm"
                                    style={{ color: "green" }}
                                ></i>{" "}
                                4% more
                            </b>{" "}
                            in 2022
                        </p>
                    </div>
                    <div className="box-graph">
                        <img src={graph} alt="" />
                    </div>
                </div>
                <div className="box2">
                    <div className="box2-header " style={{float:"right",padding:"20px",color:"white"}}>
                        <i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="box2-middle">
                        <p className="loc-icon"><i class="fa-solid fa-location-crosshairs fa-sm" style={{color:"black"}}></i></p>
                        <p><b>Faster way to create web pages</b></p>
                        <p>That's my skill. I'm not really specifically talented at anything except for the ability to learn.</p>
                        <div class="box2-footer circle-icon "style={{backgroundColor:"white",color:"black"}}>
                                <i className="fa-sharp fa-solid fa-gear"></i>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default App;
