import React from "react";
class Pagination extends React.Component {
  state = {
    pageNumber: 1,
    users: [],
  };
  getUsersData = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "61421a5a6a9b4d3ad64b8cb1",
        },
      }
    );
    const { data } = await response.json();
    // console.log(data);
    this.setState({ users: data });
  };
  componentDidMount() {
    this.getUsersData();
  }
  componentDidUpdate(prevsProps, prevsState) {
    // console.log(prevsState, prevsProps);
    // 1!=2
    if (prevsState.pageNumber !== this.state.pageNumber) {
      this.getUsersData();
    }
    // this.getUsersData();
  }
  //   updateTheUserData = (number)=>{

  //   }

  handleButtonClick = (num) => {
    //   update the state  type
    num = parseInt(num);

    this.setState({ pageNumber: num });
    //   const response
    // alert(num);
    // console.log(num);
    // this.updateTheUserData(num);
  };
  componentWillUnmount() {
    // Clean up the code
    console.log("Component Will unmount");
  }
  render() {
    return (
      <div>
        {this.state.users && this.state.users.length > 0 ? (
          <div className="container mt-4">
            <div>
              <div className="row">
                {this.state.users &&
                  this.state.users.length > 0 &&
                  this.state.users.map((user) => (
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
                    this.handleButtonClick(num);
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
}
export default Pagination;
