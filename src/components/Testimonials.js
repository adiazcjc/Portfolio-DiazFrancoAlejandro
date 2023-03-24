import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="row skill">
          <h2 style={{ color: "black", textAlign: "center", marginTop: "5%" }}>
            FRONT END
          </h2>
          <h1 style={{ color: "black", textAlign: "center" }}>
            JS | CSS | BOOTSTRAP | REACT | REDUX
          </h1>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                alt="javascript"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.w3schools.com/css/" target="_blank">
              {" "}
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
                alt="css3"
                width="40"
                height="40"
              />{" "}
            </a>
            <a href="https://getbootstrap.com" target="_blank">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"
                alt="bootstrap"
                width="40"
                height="40"
              />{" "}
            </a>
            <a href="https://reactjs.org/" target="_blank">
              {" "}
              <img
                src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
                alt="react"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://redux.js.org" target="_blank">
              {" "}
              <img
                src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
                alt="redux"
                width="40"
                height="40"
              />{" "}
            </a>
          </div>
          

          <h2 style={{ color: "black", textAlign: "center", marginTop: "5%" }}>
            BACK END
          </h2>
          <h1 style={{ color: "black", textAlign: "center" }}>
            NODEJS | EXPRESS | POSTGRESQL
          </h1>
          <div style={{ textAlign: "center" }}>
          <a href="https://nodejs.org" target="_blank">
            {" "}
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"
              alt="nodejs"
              width="120"
              height="120"
            />{" "}
          </a>{" "}
          <a href="https://expressjs.com" target="_blank">
            {" "}
            <img
              src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png"
              alt="express"
              width="120"
              height="120"
            />{" "}
          </a>{" "}
          <a href="https://www.postgresql.org" target="_blank">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              alt="postgresql"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://postman.com" target="_blank">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width="40"
              height="40"
            />{" "}
          </a>
          </div>


          
          {/* <div className="nine columns main-col">
            <h3 style={{marginTop:"5%"}}>{resumeData.skillsDescription}</h3>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        />
                        <em>{item.skillname}</em>
                      </li>
                      
                    );
                  })}
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}
