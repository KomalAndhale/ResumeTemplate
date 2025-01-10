
// import './index.css';
// import './App.css';
// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";

// import OtpInput from "otp-input-react";
// import { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { auth } from "./firebase.config";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { toast, Toaster } from "react-hot-toast";

// const App = () => {
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOTP, setShowOTP] = useState(false);
//   const [user, setUser] = useState(null);

//   function onCaptchVerify() {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: (response) => {
//             onSignup();
//           },
//           "expired-callback": () => {},
//         },
//         auth
//       );
//     }
//   }

//   function onSignup() {
//     setLoading(true);
//     onCaptchVerify();

//     const appVerifier = window.recaptchaVerifier;

//     const formatPh = "+" + ph;

//     signInWithPhoneNumber(auth, formatPh, appVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         setLoading(false);
//         setShowOTP(true);
//         toast.success("OTP sent successfully!");
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }

//   function onOTPVerify() {
//     setLoading(true);
//     window.confirmationResult
//       .confirm(otp)
//       .then(async (res) => {
//         console.log(res);
//         setUser(res.user);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }

//   return (
//     <section className="relative bg-emerald-500 flex items-center justify-center h-screen">
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-opacity-50 backdrop-blur-none"
//         style={{ backgroundImage: "url(/mountain.jpg)" }}
//       ></div>
//       <div className="relative z-10 w-80 flex flex-col gap-4 rounded-lg p-8 bg-white bg-opacity-30 shadow-xl backdrop-blur-sm">
//         <Toaster toastOptions={{ duration: 2500 }} />
//         <div
//           id="recaptcha-container"
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             zIndex: -1,
//             opacity: 0,
//           }}
//         ></div>
//         {user ? (
//           <h2 className="text-center text-black font-medium text-2xl">
//             😊 Login successfully 😊
//           </h2>
//         ) : (
//           <div className= "flex flex-col gap-4 rounded-lg p-4">
//             <h1 className="text-center leading-normal text-black font-medium text-3xl mb-6">
//               Welcome <br /> Buddy
//             </h1>
//             {showOTP ? (
//               <>
//                 <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
//                   <BsFillShieldLockFill size={30} />
//                 </div>
//                 <label
//                   htmlFor="otp"
//                   className="font-bold text-xl text-black text-center"
//                 >
//                   Enter your OTP
//                 </label>
//                 <OtpInput
//                   value={otp}
//                   onChange={setOtp}
//                   OTPLength={6}
//                   otpType="number"
//                   disabled={false}
//                   autoFocus
//                   className="opt-container "
//                 ></OtpInput>
//                 <button
//                   onClick={onOTPVerify}
//                   className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
//                 >
//                   {loading && (
//                     <CgSpinner size={20} className="mt-1 animate-spin" />
//                   )}
//                   <span>Verify OTP</span>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <div className="bg-white text-blue-500 w-fit mx-auto p-4 rounded-full">
//                   <BsTelephoneFill size={30} />
//                 </div>
//                 <label
//                   htmlFor=""
//                   className="font-bold text-xl text-black text-center"
//                 >
//                   Verify your phone number
//                 </label>
//                 <PhoneInput country={"in"} value={ph} onChange={setPh} />
//                 <button
//                   onClick={onSignup}
//                   className="bg-blue-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
//                 >
//                   {loading && (
//                     <CgSpinner size={20} className="mt-1 animate-spin" />
//                   )}
//                   <span>Send code via SMS</span>
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default App;




 // "name": "my-reactapp",

 




 /* ********************************** */
//  import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   const [resumeData, setResumeData] = useState({
//     name: "John Doe",
//     profession: "Software Developer",
//     contact: "john.doe@example.com",
//     phone: "123-456-7890",
//     address: "123 Main Street, City, Country",
//     summary: "Passionate software developer with 5 years of experience in building scalable web applications and working with cross-functional teams.",
//     skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
//     experience: [
//       {
//         title: "Frontend Developer",
//         company: "Tech Solutions Inc.",
//         duration: "Jan 2020 - Present",
//         description: "Developed and maintained responsive web applications using React and Bootstrap."
//       },
//       {
//         title: "Web Developer",
//         company: "Web Innovators",
//         duration: "Jun 2017 - Dec 2019",
//         description: "Created dynamic websites and improved user experiences with modern JavaScript frameworks."
//       }
//     ],
//     education: [
//       {
//         degree: "Bachelor of Science in Computer Science",
//         institution: "University of Tech",
//         year: "2017"
//       }
//     ]
//   });

//   const handleChange = (field, value) => {
//     setResumeData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleArrayChange = (field, index, key, value) => {
//     const updatedArray = [...resumeData[field]];
//     updatedArray[index][key] = value;
//     setResumeData((prev) => ({ ...prev, [field]: updatedArray }));
//   };

//   return (
//     <div className="container my-5">
//       <div className="card p-4">
//         <div className="text-center">
//           <input
//             type="text"
//             className="form-control mb-2 text-center"
//             value={resumeData.name}
//             onChange={(e) => handleChange("name", e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control mb-2 text-center"
//             value={resumeData.profession}
//             onChange={(e) => handleChange("profession", e.target.value)}
//           />
//         </div>
//         <div className="text-center">
//           <p>
//             <b>Contact:</b> <input
//               type="text"
//               className="form-control d-inline w-auto"
//               value={resumeData.contact}
//               onChange={(e) => handleChange("contact", e.target.value)} />
//           </p>
//           <p>
//             <b>Phone:</b> <input
//               type="text"
//               className="form-control d-inline w-auto"
//               value={resumeData.phone}
//               onChange={(e) => handleChange("phone", e.target.value)} />
//           </p>
//           <p>
//             <b>Address:</b> <input
//               type="text"
//               className="form-control d-inline w-auto"
//               value={resumeData.address}
//               onChange={(e) => handleChange("address", e.target.value)} />
//           </p>
//         </div>
//         <div className="mt-4">
//           <h4>Summary</h4>
//           <textarea
//             className="form-control"
//             value={resumeData.summary}
//             onChange={(e) => handleChange("summary", e.target.value)}
//           />
//         </div>
//         <div className="mt-4">
//           <h4>Skills</h4>
//           <ul className="list-group">
//             {resumeData.skills.map((skill, index) => (
//               <li key={index} className="list-group-item">
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={skill}
//                   onChange={(e) => {
//                     const updatedSkills = [...resumeData.skills];
//                     updatedSkills[index] = e.target.value;
//                     handleChange("skills", updatedSkills);
//                   }}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-4">
//           <h4>Experience</h4>
//           {resumeData.experience.map((job, index) => (
//             <div key={index} className="mb-3">
//               <input
//                 type="text"
//                 className="form-control mb-1"
//                 value={job.title}
//                 placeholder="Job Title"
//                 onChange={(e) => handleArrayChange("experience", index, "title", e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="form-control mb-1"
//                 value={job.company}
//                 placeholder="Company"
//                 onChange={(e) => handleArrayChange("experience", index, "company", e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="form-control mb-1"
//                 value={job.duration}
//                 placeholder="Duration"
//                 onChange={(e) => handleArrayChange("experience", index, "duration", e.target.value)}
//               />
//               <textarea
//                 className="form-control"
//                 value={job.description}
//                 placeholder="Description"
//                 onChange={(e) => handleArrayChange("experience", index, "description", e.target.value)}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="mt-4">
//           <h4>Education</h4>
//           {resumeData.education.map((edu, index) => (
//             <div key={index} className="mb-3">
//               <input
//                 type="text"
//                 className="form-control mb-1"
//                 value={edu.degree}
//                 placeholder="Degree"
//                 onChange={(e) => handleArrayChange("education", index, "degree", e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="form-control mb-1"
//                 value={edu.institution}
//                 placeholder="Institution"
//                 onChange={(e) => handleArrayChange("education", index, "institution", e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="form-control"
//                 value={edu.year}
//                 placeholder="Year"
//                 onChange={(e) => handleArrayChange("education", index, "year", e.target.value)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



/***************************************************** */

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main Street, Cityville, USA",
    objective: "To leverage my skills and experience in software development to contribute to innovative projects.",
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "XYZ University",
        year: "2022",
      },
    ],
    experience: [
      {
        role: "Software Developer",
        company: "ABC Tech",
        year: "2022 - Present",
        description: "Developed and maintained web applications using React and Node.js."
      }
    ],
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (index, arrayName, field, value) => {
    const updatedArray = formData[arrayName].map((item, idx) => 
      idx === index ? { ...item, [field]: value } : item
    );
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h2>Dynamic Resume</h2>
        </div>
        <div className="card-body">
          <form>
            <h3>Personal Details</h3>
            <div className="mb-3">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Phone:</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Address:</label>
              <textarea
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Objective:</label>
              <textarea
                className="form-control"
                name="objective"
                value={formData.objective}
                onChange={handleChange}
              />
            </div>
            <h3>Education</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) =>
                    handleArrayChange(index, "education", "degree", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) =>
                    handleArrayChange(index, "education", "institution", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) =>
                    handleArrayChange(index, "education", "year", e.target.value)
                  }
                />
              </div>
            ))}
            <h3>Experience</h3>
            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Role"
                  value={exp.role}
                  onChange={(e) =>
                    handleArrayChange(index, "experience", "role", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) =>
                    handleArrayChange(index, "experience", "company", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Year"
                  value={exp.year}
                  onChange={(e) =>
                    handleArrayChange(index, "experience", "year", e.target.value)
                  }
                />
                <textarea
                  className="form-control"
                  placeholder="Description"
                  value={exp.description}
                  onChange={(e) =>
                    handleArrayChange(index, "experience", "description", e.target.value)
                  }
                />
              </div>
            ))}
            <h3>Skills</h3>
            {formData.skills.map((skill, index) => (
              <input
                key={index}
                type="text"
                className="form-control mb-2"
                value={skill}
                onChange={(e) =>
                  handleArrayChange(index, "skills", "", e.target.value)
                }
              />
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

/************************************************ */


//App.js
// import React from "react";
// import "./App.css";

// const App = () => {
//   const candidate = {
//     objective: "To secure a challenging position in a reputable organization to expand my learning and skills.",
//     education: [
//       {
//         degree: "Bachelor of Technology in Computer Science",
//         institution: "ABC University",
//         year: "2020 - 2024",
//       },
//       {
//         degree: "Higher Secondary Education",
//         institution: "XYZ School",
//         year: "2018 - 2020",
//       },
//     ],
//     projects: [
//       {
//         name: "Portfolio Website",
//         description: "Developed a responsive portfolio website using React and Bootstrap to showcase my skills and projects."
//       },
//       {
//         name: "E-commerce App",
//         description: "Built a full-stack e-commerce application with React and Node.js, supporting user authentication and payment integration."
//       }
//     ],
//     certifications: [
//       "Certified React Developer",
//       "AWS Fundamentals",
//     ],
//     contacts: {
//       email: "candidate@example.com",
//       mobile: "123-456-7890",
//       address: "123 Main Street, City, Country",
//       linkedin: "https://www.linkedin.com/in/candidate",
//     },
//     skills: ["React", "JavaScript", "Bootstrap", "HTML", "CSS", "Node.js"],
//   };

//   return (
//     <div className="container resume-template">
//       <div className="row">
//         <div className="col-md-8 section-left">
//           <h2>Objective</h2>
//           <p>{candidate.objective}</p>

//           <h2>Education</h2>
//           <ul>
//             {candidate.education.map((edu, index) => (
//               <li key={index}>
//                 <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
//               </li>
//             ))}
//           </ul>

//           <h2>Projects</h2>
//           {candidate.projects.map((project, index) => (
//             <div key={index} className="project">
//               <h5>{project.name}</h5>
//               <p>{project.description}</p>
//             </div>
//           ))}

//           <h2>Certifications</h2>
//           <ul>
//             {candidate.certifications.map((cert, index) => (
//               <li key={index}>{cert}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="col-md-4 section-right">
//           <h2>Contact</h2>
//           <p><strong>Email:</strong> {candidate.contacts.email}</p>
//           <p><strong>Mobile:</strong> {candidate.contacts.mobile}</p>
//           <p><strong>Address:</strong> {candidate.contacts.address}</p>
//           <p><strong>LinkedIn:</strong> <a href={candidate.contacts.linkedin} target="_blank" rel="noreferrer">{candidate.contacts.linkedin}</a></p>

//           <h2>Skills</h2>
//           <ul>
//             {candidate.skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


/************************************* */


