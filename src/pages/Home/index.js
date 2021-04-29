import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../layouts/Wrapper";
import Image from "../../assets/images";
import { getAllUser } from "../../redux/actions/crudOperationAction"
import "./index.scss";

const Home = () => {
  const allUserData = useSelector((state) => state.allUserData);
  const dispatch = useDispatch();
  const [selecteddata, setSelectedData] = useState(null)
  const [data, setData] = useState();

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  useEffect(() => {
    const data = allUserData.allUserData.result && allUserData.allUserData.result.data;
    setData(data)
  }, [allUserData]);


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
            {data && data.map((element, i) => {
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7-B6570-NFXksWl3BPArESJxRo6nc5M26X_9OVnn3dvVfJrGgkw4B-J1Qbh1eoohrI8&usqp=CAU" />
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
