import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router";
import View1 from "./View1";
import Modal from "./Modal";
import Loader from "./Loader";
function Navigation() {
  const [show, setShow] = useState(false);
  const [state, setState] = useState([]);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingDelay, setLoadingDelay] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDelay(false);
    }, 2000);

    callApi();

    return () => clearTimeout(timer);
  }, []);

  const callApi = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setState(resp.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading || loadingDelay) {
    return <Loader />;
  }

  return (
    <>
      <Sidebar />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {state.slice(0, 6).map((data, index) => (
            <tr key={data.id}>
              <th scope="row">{index + 1}</th>
              <td>{data.title}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/view", { state: data })}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => setData(data)}
                >
                  Props
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => setShow(true)}
                >
                  Modal
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data && <View1 data={data} />}
      {show && <Modal handleClose={handleClose} show={show} />}
    </>
  );
}

export default Navigation;
