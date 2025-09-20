import { div, h1, h2 } from "motion/react-client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "'Poppins', sans-serif",
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(255,255,255,0.3) transparent",
      }}
    >
      {/* Background container */}
      <div
        style={{
          background:
            "linear-gradient(18deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 63%, rgba(0,0,0,1) 80%, rgba(2,2,69,1) 99%)",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* Navigation */}
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              color: "white",
              gap: "100px",
              fontSize: "16px",
              position: "fixed",
              top: "55px",
              right: "85px",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a style={{ color: "white", textDecoration: "none" }} href="#">
                Home
              </a>
            </li>
            <li>
              <a style={{ color: "white", textDecoration: "none" }} href="#">
                About
              </a>
            </li>
            <li>
              <a style={{ color: "white", textDecoration: "none" }} href="#">
                Features
              </a>
            </li>
            <li>
              <a style={{ color: "white", textDecoration: "none" }} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dashboard Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "50px",
        }}
      >
        {/* Text Content */}
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "28%",
            transform: "translate(-42%,-76%)",
            fontSize: "35px",
            color: "white",
          }}
        >
          <h1
            id="my-heading"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontOpticalSizing: "auto",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            Redefining the Attendance <br /> for the Digital Classroom
          </h1>

          <p style={{ fontSize: "20px", color: "white", marginTop: "15px" }}>
            Automated, intelligent attendance tracking for seamless classroom
            management.
          </p>

          <br />

          <button
            style={{
              marginTop: "15px",
              marginLeft: "145px",
              marginRight: "150px",
              padding: "15px 30px",
              border: "none",
              backgroundColor: "rgb(60,60,64)",
              color: "white",
              fontSize: "18px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              marginTop: "15px",
              padding: "15px 30px",
              border: "none",
              backgroundColor: "rgb(60,60,64)",
              color: "white",
              fontSize: "18px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            View Demo
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://www.datocms-assets.com/40521/1611072778-attendance-capture-ghr-1.png?auto=format"
            alt="Image"
            style={{
              width: "450px",
              height: "350px",
              borderRadius: "10px",
              position: "relative",
              left: "950px",
              top: "-550px",
            }}
          />
        </div>
      </section>
    </div>
    </>
  );
}