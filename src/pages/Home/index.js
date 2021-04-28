import React, { useState } from "react";
import Wrapper from "../../layouts/Wrapper";
import Image from "../../assets/images";
import "./index.scss";

const Home = () => {
  const [selecteddata, setSelectedData] = useState(null)
  const [data, setData] = useState([
    {
      _id: "603a2cc602aed73645d5c52c",
      username: "saurabh",
      password: "12345",
      email: "saurabh@gmail.com",
    },
    {
      _id: "603d21d92757e51b60c8aea5",
      username: "ruhi",
      password: 12345,
      email: "ruhi@gmail.com",
    },
    {
      _id: "603d21e52757e51b60c8aea6",
      username: "binita12",
      password: 12345,
      email: "binita12@gmail.com",
    },
    {
      _id: "60403327884b38482844c987",
      username: "ravi",
      password: "12345",
      email: "ravi@gmail.com",
    },
    {
      _id: "60403381dab5c04c2c9aa78c",
      username: "ravi",
      password: "12345",
      email: "ravi@gmail.com",
    },
    {
      _id: "6040344e5131bd5db8346031",
      username: "ravi",
      password: "12345",
      email: "ravi@gmail.com",
    },
    {
      _id: "60403482e4c9972d908c7026",
      username: "ravi",
      password: "12345",
      email: "ravi@gmail.com",
    },
    {
      _id: "604034f3ae368e52a8b49f1a",
      username: "ravi",
      password: "12345",
      email: "ravi@gmail.com",
    },
    {
      _id: "604035663c37de2cd4fc966d",
      username: "ravi",
      password: "12345",
      email: "ravi@gmail.com",
    },
    {
      _id: "6040362e259a813cbc7bbf6c",
      username: "ravi",
      password: "12345",
      email: "ravi@gmail.com",
    },
    {
      _id: "604034f3ae368e52a8b49f1a",
      username: "ravi",
      password: "12345",
      email: "ravi@gmail.com",
    }
  ]);

  const getTableJSX = () => {
    return (
      <div className="table-container-main">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="style-15">
            {data.map((element, i) => {
              return (
                <tr key={i} onClick={()=>setSelectedData(element)}>
                  <td>{element.username}</td>
                  <td>{element.email}</td>
                  <td>
                    <i class="fas fa-edit icon" label="Edit"></i>
                    <i class="fas fa-trash icon" aria-hidden="true"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const getDataCenterJSX = () => {
    return (
      <div className="data__section">
        <div className="data__head">
          <h1>Data Center</h1>
        </div>
        <div className="data__details">
          <img src="https://blog.houm.me/wp-content/uploads/2019/10/houme-1-700x700.jpg" />
          <hr></hr>
          <div className="json__data">
            <span>
              <pre>Username:</pre>&nbsp;<pre>{selecteddata ? selecteddata.username : '-'}</pre>
            </span>
            <span>
              <pre>Email:</pre>&nbsp;<pre>{selecteddata ? selecteddata.email :'-'}</pre>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Wrapper>
      <h1  className="home__heading">Something new today.....</h1>
      <div className="container">
        <div className="table__section">{getTableJSX()}</div>
        <div className="data__view">{getDataCenterJSX()}</div>
      </div>
    </Wrapper>
  );
};

export default Home;
