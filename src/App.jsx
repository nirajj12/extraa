import "./App.css";

export default function App() {
  return (
    <>
      {/* TOP CDOD HEADER */}
      <div className="cdod-header">
        <img src="/logo.png" alt="NMIMS" />
       
      </div>

      <div className="page">
        <h1 className="page-title">Badge Details</h1>

        {/* BADGE BLOCK */}
        <div className="block badge-block">
          {/* ISSUED BY (FIXED RIGHT) */}
          <div className="issued-fixed">
            <div className="issued-label">Issued By:</div>
            <div className="issued-value">NCDOE</div>
          </div>

          <div className="badge-layout">
            <div className="badge-left">
              <img
                src="https://d1zm89svq8em6f.cloudfront.net/coursecompletion/PGDBM.png"
                alt="Badge"
              />
            </div>

            <div className="badge-content">
              <h2>
                Post Graduate Diploma In <br />
                Business Management in Human Resources <br />
                Program Completion
              </h2>

              <p>Awarded To <strong>Muskan Kumari</strong></p>
              <p>For <strong>Program Completion</strong></p>
              <p>Issued on <strong>Jan 30, 2023</strong></p>

              <p className="program-text">
                Post Graduate Diploma in Business Management in Human Resources <br />
                Program Completion
              </p>

              <div className="claimed">
                <div className="claimed-circle">✓</div>
                CLAIMED
              </div>
            </div>
          </div>
        </div>

        {/* EARNING CRITERIA */}
        <div className="block">
          <div className="section-row">
            <div className="section-title">EARNING CRITERIA</div>
            <div className="section-content">
              Post Graduate Diploma in Business Management in Human Resources Program Completion
            </div>
          </div>
          <div className="section-sub">
            Recipients must complete the earning criteria to earn this Badge
          </div>
        </div>

        {/* EVIDENCE */}
<div className="block">
  <div className="section-row">
    <div className="section-title">EVIDENCE</div>
    <div className="section-sub">
      Proof that the recipient met the earning criteria
    </div>
  </div>


<p>81 marks out of 100 in Management Principles and Practices subject in the semester 1 exam</p>
<p>88 marks out of 100 in Accounting for Managers subject in the semester 1 exam</p>
<p>85 marks out of 100 in Economics for Managers subject in the semester 1 exam</p>
<p>91 marks out of 100 in Business Statistics subject in the semester 1 exam</p>
<p>73 marks out of 100 in Legal Framework for Business subject in the semester 1 exam</p>
<p>89 marks out of 100 in Human Resource Management subject in the semester 1 exam</p>


<p>85 marks out of 100 in Human Resource Development subject in the semester 2 exam</p>
<p>79 marks out of 100 in Organisational Behaviour subject in the semester 2 exam</p>
<p>97 marks out of 100 in Human Resource Information System subject in the semester 2 exam</p>
<p>92 marks out of 100 in Finance for Managers subject in the semester 2 exam</p>
<p>84 marks out of 100 in Labour and Social Security Laws subject in the semester 2 exam</p>


<p>91 marks out of 100 in Organisational Change and Development subject in the semester 3 exam</p>
<p>89 marks out of 100 in Learning and Development subject in the semester 3 exam</p>
<p>86 marks out of 100 in Management of Industrial Relations subject in the semester 3 exam</p>
<p>79 marks out of 100 in Compensation Management subject in the semester 3 exam</p>
<p>75 marks out of 100 in Negotiations and Union Management Relations subject in the semester 3 exam</p>
<p>81 marks out of 100 in Social Research Methods subject in the semester 3 exam</p>


<p>94 marks out of 100 in International Human Resource Management subject in the semester 4 exam</p>
<p>89 marks out of 100 in Ethics, Corporate Governance and Sustainability subject in the semester 4 exam</p>
<p>81 marks out of 100 in Strategic Human Resource Management subject in the semester 4 exam</p>
<p>82 marks out of 100 in E-Business and Cyber Laws subject in the semester 4 exam</p>
<p>93 marks out of 100 in HR Analytics subject in the semester 4 exam</p>
<p>84 marks out of 100 in Managing Innovation and Transformation subject in the semester 4 exam</p>

</div>


        <a
  href="certs/Certificate_Self_77219855796_09-Aug-2023_hZ9hq .pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="final-btn"
>
  VIEW FINAL CERTIFICATE
</a>


       <div className="note">
  <strong>Note :</strong>
  <p>
    This verification being provisional in nature requires further authorization
    from NMIMS University. For credentials verification, please log on to{" "}
    <a
      href="https://nmims.edu/education-verification"
      target="_blank"
      rel="noreferrer"
    >
      https://nmims.edu/education-verification
    </a>{" "}
    and send mail to{" "}
    <a href="mailto:edu.verification@nmims.edu">
      edu.verification@nmims.edu
    </a>
  </p>
</div>

      </div>
    </>
  );
}
