import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast.success("Job Applied Successfully");
  };

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border md:col-span-3 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-4xl">{job.job_title} </h2>
            <p className="text-xl">Company: {job.company_name} </p>
            <p className="text-xl">Salary: {job.salary} </p>
            <p className="text-sm mt-6">More Details Coming Soon...</p>
          </div>
          <div>
            <img src={job.logo} alt="" />
          </div>
        </div>
        <div className="border md:col-span-1 p-6 flex flex-col items-center justify-between">
          <h2 className="text-2xl">Side Things</h2>
          <Link to={"/applied"}>
            <button onClick={handleApplyJob} className="btn btn-primary w-full">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
