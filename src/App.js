/* eslint-disable no-unreachable */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/layout.css";
import "./css/portfolio.css";
import "./icon/icofont.css";
import "materialize-css/dist/css/materialize.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import responsive from "./img/sources/responsive.svg";
import userfriendly from "./img/sources/user friendly.svg";
import material from "./img/sources/material.svg";
import gv from "./img/projects/gv.jpg";
import btsupdate from "./img/projects/btsupdate.png";
import btup from "./img/projects/BangtanUP.PNG";
import dbzs from "./img/projects/dbzs.png";
import sherlock from "./img/projects/sherlock.png";
import coinearn from "./img/projects/coinearn.png";
import mavc from "./img/projects/mavc.png";
import crm from "./img/projects/CRM.PNG";
import btsforum from "./img/projects/btsforum.png";
import me from "./img/static/me.svg";

function Canvas(props) {
  const cvs = document.createElement("canvas");
  cvs.id = "canvas";
  cvs.className = "canvas";
  cvs.style.cssText = "position: absolute; top: 0px !important";
  const appendCanvas = document.querySelector("#root").appendChild(cvs);
  const fullwidth = window.innerWidth;
  const fullheight = document.body.scrollHeight;
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = fullwidth;
  canvas.height = fullheight;
  function Ball(x, y, s, ys, c) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.ys = ys;
    this.c = c;
    this.gone = false;
    this.draw = function () {
      ctx.beginPath();
      ctx.fillStyle = this.c;
      ctx.lineWidth = 0;
      ctx.strokeStyle = "rgba(0, 0, 0, 0.0)";
      ctx.arc(this.x, this.y, this.s, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
    };
    this.move = function () {
      this.y += this.ys;
      if (this.y >= fullheight) {
        this.gone = true;
      } else {
        this.gone = false;
      }
    };
  }
  let balls = [],
    colors = [
      "rgba(41, 128, 185, .4)",
      "rgba(155, 89, 182, .4)",
      "rgba(22, 160, 133, .4)",
      "rgba(243, 156, 18, .4)",
      "rgba(236, 240, 241, .4)",
      "rgba(52, 73, 94, .4)",
    ];
  (function setup() {
    setInterval(function () {
      let x = Math.random() * fullwidth;
      let y = 0;
      let s = Math.random() * 5 + 0.5;
      let ys = Math.random() * 1 + 0.5;
      let c = colors[Math.floor(Math.random() * colors.length)];
      balls.push(new Ball(x, y, s, ys, c));
    }, 1000);
  })();
  (function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, fullwidth, fullheight);
    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].move();
      if (balls[i].gone) {
        balls.splice(i, 1);
      }
    }
  })();
  return null;
}
export default class Inscyo extends Component {
  constructor(props) {
    super(props);
    this.txt = "(IM A Web Developer)";
    this.sp = 100;
    this.cur = 0;
    this.typeRefs = React.createRef();
    this.menuRefs = React.createRef();
    this.projShow = React.createRef();
    this.currentYear = new Date().getFullYear();
    this.state = {
      name: "inson",
      scrollHeight: document.body.scrollHeight,
      greetings: "",
      mobileShow: { display: "none" },
    };
  }
  componentDidMount = () => {
    this.Onload();
  };
  Onload = () => {
    this.setState({ scrollHeight: window.scrollY });
    this.Type();
    this.ShowProf();
  };
  ShowProf = () => {
    $(".my-img-projects").click(function (event) {
      let imgModalSrc = $(this).attr("src");
      $(".modal-project-img-src-o").attr("src", imgModalSrc);
      document.querySelector(".modal-project-img-o").style.cssText =
        "transform: scale(1); z-index: 999999;";
    });
    $(".modal-project-img-src-o").click(function (event) {
      document.querySelector(".modal-project-img-o").style.cssText =
        "transform: scale(0); z-index: 999999;";
    });
  };
  ShowMobile = () => {
    $("." + this.menuRefs.className).slideToggle(220);
  };
  Type = () => {
    if (this.cur < this.txt.length) {
      document.querySelector(
        "." + this.typeRefs.className
      ).innerHTML += this.txt.charAt(this.cur);
      this.cur++;
      setTimeout(this.Type, this.sp);
    }
  };
  Warnings = () => {
    console.disableYellowBox = true;
  };
  DownloadResume = () => {
    window.location.href = "./docs/jwenson-resume.docx";
  };
  Email = () => {
    window.location.href = "mailto:jwensonsaygo22@gmail.com";
  };
  Facebook = () => {
    window.location.href = "https://www.facebook.com/jwenson";
  };
  Canvas = () => {
    console.log(document.body.scrollHeight);
  };
  render() {
    return (
      <div className="main-inscyo">
        {/* Hello world */}
        <div className="background-landing-o">
          <Canvas scrollHeight={this.state.scrollHeight} />
          <div className="nav-landing-o">
            {/* Landing Child Nav */}
            <div className="nav-landing-child-o">
              <div className="nav-landing-logo-o">
                <h2>
                  <i className="fas fa-palette" />
                </h2>{" "}
              </div>
              <div className="nav-landing-links-o">
                <ul>
                  <li>
                    <a href="#">Certificates</a>{" "}
                  </li>
                  <li>
                    <a href="https://github.com/jwenson">Github</a>{" "}
                  </li>
                  <li>
                    <a href="#">Designs</a>{" "}
                  </li>
                  <li>
                    <a href="mailto:jwensonsaygo22@gmail.com">Contact |</a>
                  </li>
                  <li className="nav-landing-hire-o">
                    <a href="./docs/jwenson-resume.docx">Hire Me</a>
                  </li>
                </ul>
                <button
                  className="nav-landing-mobile-menu-o"
                  onClick={this.ShowMobile}
                  ref={(re) => (this.menuRefs = re)}
                >
                  Menu
                </button>
              </div>
            </div>
            {/* Landing Child Nav Mobile */}
            <div
              className="nav-landing-mobile-o"
              ref={(re) => (this.menuRefs = re)}
            >
              <ul>
                <li>
                  <a href="https://github.com/jwenson">
                    <i className="fas fa-folder" /> Github
                  </a>{" "}
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-palette" /> Designs
                  </a>{" "}
                </li>
                <li>
                  <a href="mailto:jwensonsaygo22@gmail.com">
                    <i className="fas fa-phone" /> Contact
                  </a>
                </li>
                <li>
                  <a href="./docs/jwenson-resume.docx">
                    <i className="fas fa-users" /> About
                  </a>
                </li>
              </ul>
            </div>
            {/* Landing Child Content */}
            <div className="nav-landing-content-o">
              <div className="nav-landing-content-child-o">
                <div className="nav-landing-content-title-o">
                  <h2>
                    INSON CONCEPCION PORTFOLIO <br />
                    <span
                      className="nav-landing-content-title-type-o"
                      style={{ width: "auto", maxWidth: "250px" }}
                      ref={(re) => (this.typeRefs = re)}
                    ></span>
                  </h2>
                  <p>
                    Hi My Name Is Inson Concepcion. I'm a Passionate Front End |
                    Web Designer
                    <br /> Welcome To My Personal Web Portfolio Feel Free To
                    Read :)
                    <br />
                    <br /> <span className="testEvents" />{" "}
                  </p>
                  <div className="nav-landing-content-btns">
                    {/*<button class="nav-landing-content-projects-btn">Projects</button >*/}
                    <button
                      className="nav-landing-content-designs-btn"
                      onClick={this.DownloadResume}
                    >
                      Download Resume
                    </button>
                  </div>
                </div>
                {/* next */}
                <div className="design-landing-o">
                  <div className="design-landing-skills-o">
                    <div className="design-landing-skills-child-o">
                      {" "}
                      <img src={responsive} />
                      <h5>Backend Development</h5>
                      <p>I can do backend programming .</p>
                    </div>
                  </div>
                  <div className="design-landing-skills-o">
                    <div className="design-landing-skills-child-o">
                      {" "}
                      <img src={userfriendly} />
                      <h5>User friendly web page</h5>
                      <p>I can create a user friendly web page .</p>
                    </div>
                  </div>
                  <div className="design-landing-skills-o">
                    <div className="design-landing-skills-child-o">
                      {" "}
                      <img src={material} />
                      <h5>Frontend Development</h5>
                      <p>I can do material - flat designs web page.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Projects Landing */}
        <div className="my-projects-o">
          <div className="my-projects-projects-o">
            <div className="my-projects-projects-child-o">
              <div className="content-projects-1-o">
                <div className="content-projects-details-1-o">
                  {" "}
                  <img
                    className="my-img-projects"
                    ref={(re) => (this.projShow = re)}
                    src={btsforum}
                  />
                  <h5>BANGTAN Forum</h5>
                  <p>
                    BANGTAN FORUM is developed for bts fans (army) to share
                    questions, answers, thoughts and support to the boy group.
                  </p>
                </div>
              </div>
              <div className="content-projects-1-o">
                <div className="content-projects-details-1-o">
                  {" "}
                  <img
                    className="my-img-projects"
                    ref={(re) => (this.projShow = re)}
                    src={btup}
                  />
                  <h5>BangtanUP (Music)</h5>
                  <p>
                    BANGTANUP music is a list of songs of bts to help bts fans
                    find there favorite albums, track of there boygroup.
                  </p>
                </div>
              </div>
              <div className="content-projects-1-o">
                <div className="content-projects-details-1-o">
                  {" "}
                  <img
                    className="my-img-projects"
                    ref={(re) => (this.projShow = re)}
                    src={btsupdate}
                  />
                  <h5>BTS Fan site</h5>
                  <p>
                    The first Blog Website that i created about BTS. I created
                    this because i noticed this days there are so many kpop fans
                    especially bts fans.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-projects-projects-child-o">
              <div className="content-projects-1-o">
                <div className="content-projects-details-1-o">
                  {" "}
                  <img
                    className="my-img-projects"
                    ref={(re) => (this.projShow = re)}
                    src={sherlock}
                  />
                  <h5>Shecklock Resort</h5>
                  <p>
                    System that i created on my own for my mini thesis when i
                    was a Third Year College (Web development Subject).
                  </p>
                </div>
              </div>
              <div className="content-projects-1-o">
                <div className="content-projects-details-1-o">
                  {" "}
                  <img
                    className="my-img-projects"
                    ref={(re) => (this.projShow = re)}
                    src={mavc}
                  />
                  <h5>Enrollment System (Mavc)</h5>
                  <p>
                    This is the First System that i created on my own for my
                    Thesis when i was a Fourth Year College (System Development
                    Subject).
                  </p>
                </div>
              </div>
              <div className="content-projects-1-o">
                <div className="content-projects-details-1-o">
                  {" "}
                  <img
                    className="my-img-projects"
                    ref={(re) => (this.projShow = re)}
                    src={crm}
                  />
                  <h5>AMA Customer Relationship Management</h5>
                  <p>
                    I developed this system for AMA teachers, deans to help them
                    track students enrollments, student records and to show
                    reports how many student currently applied etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-projects-projects-child-o">
              <div className="content-projects-1-o">
                <div className="content-projects-details-1-o">
                  {" "}
                  <img
                    className="my-img-projects"
                    ref={(re) => (this.projShow = re)}
                    src={gv}
                  />
                  <h5>Game Village (Designs)</h5>
                  <p>
                    Game Village Website Design. This For fun only and also to
                    test my Design Skills
                  </p>
                </div>
              </div>
              <div className="content-projects-1-o">
                <div className="content-projects-details-1-o">
                  {" "}
                  <img
                    className="my-img-projects"
                    ref={(re) => (this.projShow = re)}
                    src={coinearn}
                  />
                  <h5>CoinEarn (Cryptocurrency)</h5>
                  <p>
                    CoinEarn (Cryptocurrency) Website Design. I Created this
                    when i was learning Web Design. This For fun only and also
                    to test my Design Skills
                  </p>
                </div>
              </div>
              <div className="content-projects-1-o">
                <div className="content-projects-details-1-o">
                  {" "}
                  <img
                    className="my-img-projects"
                    ref={(re) => (this.projShow = re)}
                    src={dbzs}
                  />
                  <h5>DBZS(Streaming site)</h5>
                  <p>
                    Website Design. This For fun only and also to test my Design
                    Skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Projects Landing */}
        <div className="me-landing-o" style={{ display: "block" }}>
          <div className="me-landing-child-o">
            <div className="me-landing-details-o">
              <h4>About my Self</h4>
              <p>
                Hi i am Inson Concepcion i graduated Bachelor of Science &amp;
                Information Technology. I'm Passionate on Web Designing. Read
                more about my self by clicking below.{" "}
              </p>
              <button onClick={this.DownloadResume}>Read more</button>
            </div>

            <div className="me-landing-image-o">
              {" "}
              <img src={me} />{" "}
            </div>
          </div>
        </div>
        <div className="me-skill-set-lang-o">
          <div
            className="me-skill-set-lang-child-o"
            style={{ display: "none" }}
          >
            <div className="me-skill-set-html">
              <button>HTML5</button>
              <button className="me-skill-set-cen">60%</button>
            </div>
            <div className="me-skill-set-css">
              <button>CSS3</button>
              <button className="me-skill-set-cen">55%</button>
            </div>
            <div className="me-skill-set-materialD">
              <button>Meterial Design</button>
              <button className="me-skill-set-cen">80%</button>
            </div>
            <div className="me-skill-set-js">
              <button>Javascript</button>
              <button className="me-skill-set-cen">60%</button>
            </div>
            <div className="me-skill-set-jquery">
              <button>Jquery</button>
              <button className="me-skill-set-cen">55%</button>
            </div>
            <div className="me-skill-set-p5">
              <button>p5.js</button>
              <button className="me-skill-set-cen">50%</button>
            </div>
            <div className="me-skill-set-responsive">
              <button>Responsive (RWD)</button>
              <button className="me-skill-set-cen">80%</button>
            </div>
            <div className="me-skill-set-php">
              <button>Php</button>
              <button className="me-skill-set-cen">60%</button>
            </div>
            <div className="me-skill-set-mysql">
              <button>Mysql</button>
              <button className="me-skill-set-cen">50%</button>
            </div>
          </div>
          {/* Contact */}
          <div className="me-contact-o" style={{ marginTop: "0px" }}>
            <div className="me-contact-child-o">
              <h4>Get in touch</h4>
              <p>
                If you have any questions to me feel free to leave a message
                <br /> and i will reply as soon as i can.
              </p>

              <button onClick={this.Email}>Email</button>
              <button onClick={this.Facebook}>Socila Media</button>
              <br />
              <br />
              <p>
                Those projects above is currently not running on the web <br />
                beacuase my domain and hosting plan has expired i will update it
                soon.
              </p>
              {/* Footer */}
              <div className="me-footer-o">
                <div className="me-footer-info">
                  <h6>Location | Contact</h6>
                  <p>
                    056 Camia Road Street Malimpec
                    <br /> Basista Pangasinan
                    <br /> (+63) 9153-080-121
                  </p>
                  <p>© Inson Concepion {this.currentYear}</p>
                </div>
                <div className="me-footer-sitemap">
                  <h6>Sitemap</h6>
                  <ul>
                    <li>
                      <a href="https://github.com/jwenson">My Canvas Game</a>
                    </li>
                    <li>
                      <a href="#">My Designs</a>
                    </li>
                    <li>
                      <a href="./docs/jwenson-resume.docx">Download Resume</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-project-img-o">
          {" "}
          <img className="modal-project-img-src-o" src="" />{" "}
        </div>
      </div>
    );
  }
}
