import Navbar from "../Heading-Part/Navbar";
import Footer from "../Heading-Part/Footer";

const Service = () => {
  return (
    <>
      <Navbar />
      <h1
        class="preFade fadeIn my-4"
        style={{
          textAlign: "center",
          color: "rgb(58, 56, 58)",
          fontFamily: "Trebuchet MS",
          fontSize: "40px",
          fontWeight: "lighter",
        }}
      >
        Interior Design Services
      </h1>
      <div class="container text-center">
        <div class="row">
          <div class="col my-2">
            <img
              src="Image1.png"
              style={{ height: "600px", width: "500px", opacity: "1" }}
            />
            <p
              style={{
                whiteSpace: "pre-wrap",
                msTransitionTimingFunction: "ease",
                transitionDuration: "1.5s",
                transitionDelay: "0.216s",
                fontSize: "30px",
              }}
            >
              Premium Interior Design Services
            </p>
            <p style={{ fontSize: "18px" }}>Elevate your space to opulence.</p>
            <p style={{ fontSize: "18px" }}>
              Discover the essence of luxury and sophistication tailored just
              for you.
            </p>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                height: "60px",
                width: "200px",
              }}
            >
              View Recent Designs
            </button>
          </div>
          <div class="col my-2">
            <img
              src="Image2.png"
              style={{ height: "600px", width: "500px", opacity: "1" }}
            />
            <p
              style={{
                whiteSpace: "pre-wrap",
                msTransitionTimingFunction: "ease",
                transitionDuration: "1.5s",
                transitionDelay: "0.216s",
                fontSize: "30px",
              }}
            >
              Custom Lighting Solutions
            </p>
            <p style={{ fontSize: "18px" }}>
              When a special one-of-a-kind look is what you’re after, Marc
              Pridmore Interiors excels in creating custom sized lighting
              fixtures and solutions tailored for your space and lifestyle.
            </p>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                height: "60px",
                width: "200px",
              }}
            >
              View Recent Designs
            </button>
          </div>
          <div class="col my-2">
            <img
              src="Image3.png"
              style={{ height: "600px", width: "500px", opacity: "1" }}
            />
            <p
              style={{
                whiteSpace: "pre-wrap",
                msTransitionTimingFunction: "ease",
                transitionDuration: "1.5s",
                transitionDelay: "0.216s",
                fontSize: "30px",
              }}
            >
              Elegant Drapery Design
            </p>
            <p style={{ fontSize: "18px" }}>
              Imagine the luxurious feel of custom drapery cascading down your
              windows, adding a touch of elegance and sophistication to any
              room. Whether you prefer rich fabrics, intricate patterns, or
              minimalist designs, we have a wide range of options to choose from
              to bring your vision to life.
            </p>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                height: "60px",
                width: "200px",
              }}
            >
              View Recent Designs
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
