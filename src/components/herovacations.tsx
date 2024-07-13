import { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    depart: "",
    return: "",
    class: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/submit-form",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="hero-bg">
        <div className="row align-items-center g-lg-5 py-5 container">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              Vertically centered hero sign-up form
            </h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-2 p-md-3 border rounded-3 bg-light mb-5"
              onSubmit={handleSubmit}
            >
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="from"
                      placeholder="From"
                      value={formData.from}
                      onChange={handleChange}
                    />
                    <label htmlFor="from">From*</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="to"
                      placeholder="To"
                      value={formData.to}
                      onChange={handleChange}
                    />
                    <label htmlFor="to">To*</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id="depart"
                      placeholder="Depart*"
                      value={formData.depart}
                      onChange={handleChange}
                    />
                    <label htmlFor="depart">Depart*</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id="return"
                      placeholder="Return*"
                      value={formData.return}
                      onChange={handleChange}
                    />
                    <label htmlFor="return">Return*</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="class"
                      value={formData.class}
                      onChange={handleChange}
                    >
                      <option value="">Select Class</option>
                      <option value="economy">Economy</option>
                      <option value="business">Business</option>
                      <option value="first">First Class</option>
                    </select>
                    <label htmlFor="class">Class</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: "100px" }}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
