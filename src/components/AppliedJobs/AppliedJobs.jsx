import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const storedJobIds = getStoredJobApplications();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      // console.log(jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-2xl text-center">
        Jobs I Applied {appliedJobs.length}{" "}
      </h2>

      <div className="flex justify-center my-6">
        <details className="dropdown ">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

      <ul>
        {displayJobs.map((job) => (
          <div key={job.id} className="my-6  ">
            <li className="flex hover:bg-slate-700 justify-between items-center border px-6 rounded-xl">
              <div>
                <h3 className="text-2xl font-extrabold font-mono">
                  {job.job_title}
                </h3>
                <p>{job.company_name}</p>
                <div className="flex">
                  <span className="border font-semibold bg-slate-800 rounded-xl p-2 mt-3">
                    {job.remote_or_onsite}
                  </span>
                </div>
              </div>
              <div>
                <img src={job.logo} alt="" />
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
