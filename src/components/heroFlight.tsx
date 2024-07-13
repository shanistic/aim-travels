import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface FormData {
  from: string;
  to: string;
  depart: string;
  ret: string;
  class1: string;
  email: string;
  message1: string;
}

const Hero: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    from: "",
    to: "",
    depart: "",
    ret: "",
    class1: "",
    email: "",
    message1: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  console.log("_________", formData);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4040/api/v1/flight/new",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="container-fluid hero-bg">
        <div className="row align-items-center g-lg-5 py-5 container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="col-lg-5 text-center text-lg-start"
          >
            <h3 className="fw-bold lh-1 mb-3 text-justify">
              Vertically centered hero sign-up form
            </h3>
            <p className="col-lg-10 text-justify">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="col-lg-7 mx-auto "
          >
            <form
              className="p-2 p-md-3 border rounded-3  mb-5"
              onSubmit={handleSubmit}
            >
              <div className="row mb-3">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="from"
                      placeholder="From"
                      value={formData.from}
                      onChange={handleChange}
                      required
                    />
                    <label>From*</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="to"
                      placeholder="To"
                      value={formData.to}
                      onChange={handleChange}
                      required
                    />
                    <label>To*</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      name="depart"
                      placeholder="Depart*"
                      value={formData.depart}
                      onChange={handleChange}
                      required
                    />
                    <label>Depart*</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      name="ret"
                      placeholder="Return*"
                      value={formData.ret}
                      onChange={handleChange}
                      required
                    />
                    <label>Return*</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      name="class1"
                      value={formData.class1}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Class</option>
                      <option value="economy">Economy</option>
                      <option value="business">Business</option>
                      <option value="first">First Class</option>
                    </select>
                    <label>Class</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Email address</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      name="message1"
                      style={{ height: "100px" }}
                      value={formData.message1}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label>Message</label>
                  </div>
                </div>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
