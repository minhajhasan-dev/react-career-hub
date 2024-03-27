import { LuBadgeDollarSign } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
            {job_type}
          </button>
        </div>
        <div className="mt-4 flex gap-6">
          <h2 className="flex gap-2 items-center">
            <MdLocationOn className="text-2xl" /> {location}
          </h2>
          <h2 className="flex gap-2 items-center">
            <LuBadgeDollarSign className="text-2xl" /> Salary : {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`} >
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
