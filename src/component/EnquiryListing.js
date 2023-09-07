import { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEnquiryList } from "../store/Actions/EnquiryListAction";

const getRows = (data) => {
  return data.map((row) => {
    return (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.number}</td>
        <td>{row.query}</td>
        <td>{row.query_for}</td>
      </tr>
    );
  });
};

const EnquiryListing = () => {
  const dispatch = useDispatch();
  const EnquiryList = useSelector((state) => state.enquiry);

  const { data, isLoading, isSuccess, errorMessage } = EnquiryList;
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async function getData() {
    //   try {
    //     setLoading(true);
    //     const response = await axios.get("http://localhost:3030/posts");
    //     setLoading(false);
    //     setData(response.data);
    //   } catch (error) {
    //     setError(error);
    //   }
    // }
    // getData();
    dispatch(getEnquiryList());
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
            <th>Name</th>
            <th>Number</th>
            <th>Query</th>
            <th>Query For</th>
          </tr>
        </thead>
        <tbody>{data && getRows(data)}</tbody>
      </table>
    </>
  );
};

export default EnquiryListing;
