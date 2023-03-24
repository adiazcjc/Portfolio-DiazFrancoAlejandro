import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Inicio
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  Sobre mí
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Formación
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Proyectos
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Skills
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
