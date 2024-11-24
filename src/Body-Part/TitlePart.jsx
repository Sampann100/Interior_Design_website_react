import { Link } from "react-router-dom";
import style from "./TitlePart.module.css";

export default function TitlePart() {
  return (
    <main>
      <section>
        <h1 className={`preFade fadeIn ${style.titlePart} my-5`}>
          <span className={`${style.sqsrte} container`}>
            Orange County Interior Design
          </span>
        </h1>
        <div className="container">
          <span className={`${style.para}`}>
            Discover the epitome of luxury and sophistication at Marc Pridmore
            Designs, Southern California's premier interior design firm and
            showroom. With over two decades of experience, we specialize in
            furnishing Orange County mansions and large-scale residential
            properties worldwide. Our curated collections and expert design
            services ensure that every space we touch exudes elegance and
            refinement. Visit our showroom today to elevate your home to new
            heights of lavish living.
          </span>
        </div>
        <div className={`${style.iamgeSection} p-3`}>
          <a href="#">
            <img src="boxImage1.jpg" className={`${style.box1}`}></img>
          </a>
          <div>
            <div className=" p-2">
              <div className="row">
                <div className="col-sm">
                  <a href="#">
                    <img
                      src="boxImage2.png"
                      style={{ height: "800px" }}
                      className={`${style.box1}`}
                    ></img>
                  </a>
                </div>
                <div className="col-sm">
                  <a href="#">
                    <img
                      src="boxImage3.png"
                      style={{ height: "800px" }}
                      className={`${style.box1}`}
                    ></img>
                  </a>
                </div>
                <div className="col-sm">
                  <a href="#">
                    <img
                      src="boxImage4.png"
                      style={{ height: "800px" }}
                      className={`${style.box1}`}
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="row">
                <div className="col-sm">
                  <a href="#">
                    <img
                      src="boxImage5.png"
                      style={{ height: "800px" }}
                      className={`${style.box1}`}
                    ></img>
                  </a>
                </div>
                <div className="col-sm">
                  <a href="#">
                    <img
                      src="boxImage6.png"
                      style={{ height: "800px" }}
                      className={`${style.box1}`}
                    ></img>
                  </a>
                </div>
                <div className="col-sm">
                  <a href="#">
                    <img
                      src="boxImage7.png"
                      style={{ height: "800px" }}
                      className={`${style.box1}`}
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="row">
                <div className="col-sm">
                  <a href="#">
                    <img
                      src="boxImage8.png"
                      style={{ height: "800px" }}
                      className={`${style.box1}`}
                    ></img>
                  </a>
                </div>
                <div className="col-sm">
                  <a href="#">
                    <img
                      src="boxImage9.png"
                      style={{ height: "800px" }}
                      className={`${style.box1}`}
                    ></img>
                  </a>
                </div>
                <div className="col-sm">
                  <a href="#">
                    <img
                      src="boxImage10.png"
                      style={{ height: "800px" }}
                      className={`${style.box1}`}
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row featurette">
          <div className="col-md-7">
            <img className={`${style.MpImage}`} src="Mp.png"></img>
            <h3 className={`${style.MpTitle}`}>
              WELCOME TO MARC PRIDMORE INTERIORS
            </h3>
            <p className={`${style.Mppara}`}>
              Experience the epitome of luxury interior design. Our journey
              began in 2000, and today, we continue to grace Orange County
              mansions and residential properties worldwide with our exquisite
              touch. Explore our world of elegance.
            </p>
            <button onClick={() => alert("Your appointment is Confirmed")} className={`${style.MeetMarc}`}>BOOK APPOINTMENT</button>
          </div>
          <div className="col-md-5">
            <img className={`${style.boxImage11}`} src="boxImage11.png"></img>
          </div>
        </div>

        <div className="row featurette">
          <div className="col-md-5 order-md-2">
            <h4 className={`${style.designTitle}`}>DESIGN SERVICES</h4>
            <p className={`${style.elegant}`}>Elegant Interior Design</p>
            <p>
              Embarki on a journey of sophistication and luxury with
              one-of-a-kind designs and elegant, seamless living solutions
              tailored to your way of living. Our Interior design services{" "}
            </p>
            <Link to="/Contact"><button className={`${style.CallButton}`}>CALL TO ENQUIRE</button></Link>
          </div>
          <div className="col-md-7">
            <img className={`${style.boxImage12}`} src="boxImage12.png"></img>
          </div>
        </div>
      </section>
    </main>
  );
}
