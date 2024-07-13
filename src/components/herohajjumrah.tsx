import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface FormData {
  destination:string;
  checkIn:string;
  checkOut:string;
  adults:string;
  childrens:string;
  email:string;
  starRating:string;
}

const Hero: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    destination:'',
      email:'',
      checkIn:'',
      checkOut:'',
      childrens:'',
      starRating:'',
      adults:'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
console.log("_________", formData)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4040/api/v1/flight/new', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
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
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="col-lg-7 mx-auto "
          >
            <form className="p-2 p-md-3 border rounded-3  mb-5" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="destination"
                      placeholder="From"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                    />
                    <label>Destination*</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      name="checkIn"
                      placeholder="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                    />
                    <label>CheckIn*</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      name="checkOut"
                      placeholder="checkOut*"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                    />
                    <label>CheckOut*</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      name="childrens"
                      placeholder="childrens*"
                      value={formData.childrens}
                      onChange={handleChange}
                      required
                    />
                    <label>Childrens*</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      placeholder="Adults"
                      name="class1"
                      value={formData.adults}
                      onChange={handleChange}
                      required
                    >
                    </input>
                    <label>Adults*</label>
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
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Send
              </button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;