import Footer from "../Heading-Part/Footer";
import Navbar from "../Heading-Part/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <br />
      <form className="container my-4 bg-body-tertiary">
        <div className="row g-4">
          <div className="col-sm-6">
            <label for="firstName" className="form-label">
              First name <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              fdprocessedid="ldsz2"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label">
              Last name <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              fdprocessedid="bxqoxc"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>

          <div className="col-12">
            <label for="email" className="form-label">
              Email <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              fdprocessedid="ppf4nq"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-6">
            <label for="address" className="form-label">
              Address <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required=""
              fdprocessedid="9l558d"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-6">
            <label for="address2" className="form-label">
              Address 2 <span className="text-body-secondary">(Optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartment or suite"
              fdprocessedid="i40azp"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
          </div>

          <div className="col-md-5">
            <label for="country" className="form-label">
              Country
            </label>
            <select
              className="form-select"
              id="country"
              required=""
              fdprocessedid="chw9xm"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            >
              <option value="">Choose...</option>
              <option>United States</option>
              <option>India</option>
              <option>Australia</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div className="col-md-4">
            <label for="state" className="form-label">
              State
            </label>
            <select
              className="form-select"
              id="state"
              required=""
              fdprocessedid="2kmels"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            >
              <option value="">Choose...</option>
              <option>Madhya Pradesh</option>
              <option>Mahrashtra</option>
              <option>Rajesthan</option>
              <option>Gujrat</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-md-3">
            <label for="zip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder=""
              required=""
              fdprocessedid="ax9jd"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">Zip code required.</div>
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Message <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Enter the text"
              rows="3"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            ></textarea>
          </div>

          <div>
            <button
              onClick={() => alert("The detail was send. We will contact you.")}
              className="_MeetMarc_kztix_221"
              fdprocessedid="4xb35"
              style={{
                backgroundColor: "black",
                color: "white",
                height: "60px",
                width: "170px",
                marginLeft: "550px",
                marginTop: "100px",
              }}
            >
              SEND
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default Contact;
