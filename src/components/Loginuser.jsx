import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Header from './Header';

function Loginuser() {
  const navigate = useNavigate();

 
  const [loading, setLoading] = useState(false);

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    navigate("/Login");
  };

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log('token', token)
    if (token) {
      const fetchPosts = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:4000/listpost?page=${currentPage}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const { data, count } = response.data;
          setPosts(data);
          setTotalCount(count);
          setTotalPages(Math.ceil(count / 5));
          setLoading(false); 
        } catch (error) {
          console.error(error);
          setLoading(false); 
        }
      };
      fetchPosts();
    } else {
      navigate("/Login");
    }
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Header />
      <h2 className="loginform">Munish Login Successfully</h2>
      {sessionStorage.getItem("token") ? (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {posts.map((post, index) => (
                <li key={index}>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                </li>
              ))}
            </ul>
          )}
          <div className="pagination">
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            )}
            <span>Page {currentPage} of {totalPages}</span>
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            )}
          </div>
        </div>
      ) : (
        <p>Please login to view data</p>
      )}
      <button type="button" className="btn-2" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}

export default Loginuser;