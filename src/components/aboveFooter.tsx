import { CiBookmarkCheck } from "react-icons/ci";
import { FaPhone, FaUserClock } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

const ContactGrid = () => {
    return (
      <section className="contact-section">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-4 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.936252916487!2d-79.24582378450245!3d43.795494979116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3dc5192e0fb%3A0x80b3eeb27e4290ea!2s1825%20Markham%20Rd%2C%20Scarborough%2C%20ON%20M1B%204Z9%2C%20Canada!5e0!3m2!1sen!2sus!4v1686001547894!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, height: "70vh" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              className="col-lg-4 d-flex pt-4"
              style={{ backgroundColor: "#6AB4FF", color: "#FFFFFF" }}
            >
              <div className="w-100">
                <h2 className="mb-4">GET IN TOUCH</h2>
                <div className="getintouch">
                <p>
                <IoIosMailOpen size={20} color="black" />  sbaggia@ikhlas.ca
                </p>
                <p> 
                <FaPhone size={20} color="black" /> Scarborough: 416 754
                  0347
                </p>
                <p>
                <FaUserClock size={20} color="black" /> Monday to Friday: 11:00am
                  to 6:30pm
                </p>
                <p style={{color:"black",fontSize:"16px"}}> <CiBookmarkCheck size={20} color="black" />  Saturday: By Appointment only</p>
                <p>
                <FaMapLocation size={20} color="black" />1825 MARKHAM ROAD, SUITE
                  203 SCARBOROUGH, ON, M1B 4Z9
                </p>
                <p></p>
                <div className="mt-3">
                  <a href="#" className="text-light me-2">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-light me-2">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
              </div>
            </div>
            <div
              className="col-lg-4 d-flex align-items-center"
              style={{ backgroundColor: "#0A4ABF", color: "#FEFFFF" }}
            >
              <div className="p-4 w-100">
                <h3 className="mb-4">REQUEST A CALL?</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      style={{
                        backgroundColor: "#FEFFFF",
                        borderColor: "#374B9A",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Your phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      style={{
                        backgroundColor: "#FEFFFF",
                        borderColor: "#374B9A",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      style={{
                        backgroundColor: "#FEFFFF",
                        borderColor: "#374B9A",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      //   rows="3"
                      style={{
                        backgroundColor: "#FEFFFF",
                        borderColor: "#374B9A",
                      }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{ backgroundColor: "#6AB4FF", color: "#FEFFFF" }}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactGrid;
  