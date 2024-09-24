import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ProgressBar,
} from "react-bootstrap";

const Jobs = () => {
  const [job, setJob] = useState(null);
  const [applicant, setApplicant] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null); // Store analysis results
  const [loadingAnalysis, setLoadingAnalysis] = useState(false); // Loading state for analysis

  // Fetch Job and Applicant data
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobResponse = await axios.get(process.env.REACT_APP_GET_JOBS);
        setJob(
          jobResponse.data.jobs ? jobResponse.data.jobs[0] : jobResponse.data[0]
        );
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    const fetchApplicant = async () => {
      try {
        const applicantResponse = await axios.get(
          process.env.REACT_APP_GET_APPLICANTS
        );
        setApplicant(
          applicantResponse.data.applicant
            ? applicantResponse.data.applicant[0]
            : applicantResponse.data[0]
        );
      } catch (error) {
        console.error("Error fetching applicant data:", error);
      }
    };

    fetchJob();
    fetchApplicant();
  }, []);

  // Function to handle the analysis button click
  const handleAnalyzeClick = async () => {
    setLoadingAnalysis(true);
    try {
      const response = await axios.get(process.env.REACT_APP_GET_JOBS_AI);
      // console.log(response.data); // Log the response to inspect its structure

      const resultsArray = response.data.data;

      setAnalysisResults(resultsArray);
    } catch (error) {
      console.error("Error fetching analysis results:", error);
    } finally {
      setLoadingAnalysis(false);
    }
  };

  return (
    <Container className="mt-5">
      {/* Intro section */}
      <Row className="mb-5">
        <Col className="text-center">
          <h2>Job Application Matching with AI</h2>
          <p className="lead">
            Here, we display a job on the right and the applicant on the left.
            Our AI will analyze how closely the applicant matches the job they
            applied for.
          </p>
          {/* Add the Analyze button here */}
          <Button
            variant="primary"
            className="mt-3"
            onClick={handleAnalyzeClick}
            disabled={loadingAnalysis}
          >
            {loadingAnalysis ? "Analyzing..." : "Let's Analyze!"}
          </Button>
        </Col>
      </Row>

      {/* Display Analysis Results */}
      {analysisResults && (
        <Row className="justify-content-center my-4">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <h4>Match Analysis Result</h4>
                {analysisResults.map((result, index) => (
                  <Card key={index} className="my-3">
                    <Card.Body>
                      <h5>Applicant: {result.name}</h5>
                      <h6>Job Title: {result.title}</h6>
                      <div className="my-3">
                        <h6>Match Percentage: {result.match}%</h6>
                        <ProgressBar
                          now={result.match}
                          label={`${result.match}%`}
                          variant={
                            result.match > 75
                              ? "success"
                              : result.match > 50
                              ? "warning"
                              : "danger"
                          }
                        />
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Main content - Applicant on the left, Job on the right */}
      <Row>
        {/* Applicant Section */}
        <Col md={6}>
          {applicant ? (
            <Card className="shadow-lg mb-5">
              <Card.Header className="bg-primary text-white">
                <h5>Applicant Details</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title>{applicant.ApplicantName}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {applicant.Email}
                </Card.Text>
                <Card.Text>
                  <strong>Phone:</strong> {applicant.Phone}
                </Card.Text>
                <Card.Text>
                  <strong>Location:</strong> {applicant.Location}
                </Card.Text>
                <Card.Text>
                  <strong>Education:</strong> {applicant.Education}
                </Card.Text>
                <Card.Text>
                  <strong>Experience:</strong> {applicant.Experience}
                </Card.Text>
                <Card.Text>
                  <strong>Skills:</strong> {applicant.Skills}
                </Card.Text>
                <Card.Text>
                  <strong>Certifications:</strong> {applicant.Certifications}
                </Card.Text>
                <Card.Text>
                  <strong>Preferred Start Date:</strong>{" "}
                  {applicant.PreferredStartDate}
                </Card.Text>
                <Card.Text>
                  <strong>Availability for Interview:</strong>{" "}
                  {applicant.AvailabilityForInterview}
                </Card.Text>
                <h6 className="mt-4">Employment History</h6>
                <Card.Text>
                  <strong>{applicant.Employer1_Name}</strong> -{" "}
                  {applicant.Employer1_JobTitle} (
                  {applicant.Employer1_JobDuration})
                </Card.Text>
                <Card.Text>{applicant.Employer1_Responsibilities}</Card.Text>
                <Card.Text>
                  <strong>{applicant.Employer2_Name}</strong> -{" "}
                  {applicant.Employer2_JobTitle} (
                  {applicant.Employer2_JobDuration})
                </Card.Text>
                <Card.Text>{applicant.Employer2_Responsibilities}</Card.Text>
                <Card.Text>
                  <strong>{applicant.Employer3_Name}</strong> -{" "}
                  {applicant.Employer3_JobTitle} (
                  {applicant.Employer3_JobDuration})
                </Card.Text>
                <Card.Text>{applicant.Employer3_Responsibilities}</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <p>Loading applicant data...</p>
          )}
        </Col>

        {/* Job Section */}
        <Col md={6}>
          {job ? (
            <Card className="shadow-lg mb-5">
              <Card.Header className="bg-success text-white">
                <h5>Job Details</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title>{job.JobTitle}</Card.Title>
                <Card.Text>
                  <strong>Department:</strong> {job.Department}
                </Card.Text>
                <Card.Text>
                  <strong>Location:</strong> {job.Location}
                </Card.Text>
                <Card.Text>
                  <strong>Job Type:</strong> {job.JobType}
                </Card.Text>
                <Card.Text>
                  <strong>Salary:</strong> {job.Salary}
                </Card.Text>
                <Card.Text>
                  <strong>Posted Date:</strong> {job.PostedDate}
                </Card.Text>
                <Card.Text>
                  <strong>Description:</strong> {job.Description}
                </Card.Text>
                <Card.Text>
                  <strong>Responsibilities:</strong> {job.Responsibilities}
                </Card.Text>
                <Card.Text>
                  <strong>Requirements:</strong> {job.Requirements}
                </Card.Text>
                <Card.Text>
                  <strong>Benefits:</strong> {job.Benefits}
                </Card.Text>
                <Card.Text>
                  <strong>Application Deadline:</strong>{" "}
                  {job.ApplicationDeadline}
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <p>Loading job data...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
