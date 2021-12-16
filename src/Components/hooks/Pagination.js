// import React from 'react'
import React, { useState, useEffect } from "react";

function Pagination() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getUsersData = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "61421a5a6a9b4d3ad64b8cb1",
        },
      }
    );
    const { data } = await response.json();
    // console.log(data);
    setUsers(data);
  };

  //   ComponentDidMount

  // useEffect(() => {
  //   console.log("Component Did Mount");
  // }, []);

  // useEffect(() => {
  //   console.log("Component Did Update");
  // }, [pageNumber]);
  // // componentWillUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log("Component Will Unmount");
  //   };
  // });
  useEffect(() => {
    getUsersData();
    return () => {
      setUsers([]);
    };
  }, [pageNumber]);
  return (
    <div>
      {users && users.length > 0 ? (
        <div className="container mt-4">
          <div>
            <div className="row">
              {users &&
                users.length > 0 &&
                users.map((user) => (
                  <div key={user.id} className="col-md-6 mt-3">
                    <div className="card p-5">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            className="img-fluid"
                            src={user.picture}
                            alt={user.firstName}
                          />
                        </div>
                        <div className="col-md-8">
                          <div>
                            <p>id:{user.id}</p>
                            <p>
                              {user.title} {user.firstName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="container">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setPageNumber(num);
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <section>
          <img
            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
            alt="loader"
          />
        </section>
      )}
    </div>
  );
}

export default Pagination;
