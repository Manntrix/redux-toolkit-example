import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from "../store/Actions/CourseListAction";

const getRows = (data) => {
  return data.map((row) => {
    return (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.course}</td>
        <td>
          <button>
            <Link to={`/enquire/${row.course && row.course.toLowerCase()}`}>
              Enquiry
            </Link>
          </button>
        </td>
      </tr>
    );
  });
};

const CourseListing = () => {
  const dispatch = useDispatch();
  const CourseList = useSelector((state) => state.course);

  const { data, isLoading, isSuccess, errorMessage } = CourseList;

  useEffect(() => {
    dispatch(getCourseList());
  }, []);

  if (errorMessage) {
    return <div>Error Fetching Data.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess && data && data.length === 0) {
    return <div>No Records found.</div>;
  }

  return (
    <>
      <table className="table width-100">
        <thead>
          <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{data && getRows(data)}</tbody>
      </table>
    </>
  );
};

export default CourseListing;
