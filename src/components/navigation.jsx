import React from "react";

export const Navigation = ({ onLanguageChange, data }) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {data ? data.brand : "GS Home Care Service"}
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                {data ? data.features : "Features"}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                {data ? data.about : "About"}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                {data ? data.services : "Services"}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                {data ? data.gallery : "Gallery"}
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                {data ? data.contact : "Contact"}
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                {data ? data.language : "Language"} <b className="caret"></b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#" onClick={() => onLanguageChange("en")}>
                    English
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => onLanguageChange("ko")}>
                    Korean
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => onLanguageChange("zh")}>
                    Chinese
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
