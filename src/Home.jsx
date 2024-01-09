import Layout from "./layout";
import "./index.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);
  const [mockEmployees, setMockEmployees] = useState([
    {
      id: 0,
      name: "mock",
      lastname: "mocklastname",
      position: "Manager",
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer",
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer",
    },
  ]);

  const handleButtonUser = () => {
    setSector("user"); //set sector = user
  };
  const handleButtonAdmin = () => {
    setSector("admin"); //set sector = admin
  };

  return (
    <Layout>
      <div className="body">
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
        <br />
        <br />

        <div className="button-home">
          <button onClick={handleButtonUser}>User Home Sector</button>
          <button onClick={handleButtonAdmin}>Admin Home Sector</button>
        </div>

        {sector === "user" ? (
          <User mockEmployees={mockEmployees} />
        ) : sector === "admin" ? (
          <Admin mockEmployees={mockEmployees} setMockEmployees={setMockEmployees} />
        ) : (
          <Blankpage />
        )}
      </div>
    </Layout>
  );
};

const Admin = (props) => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

  const addUser = (e) => {
    e.preventDefault();
    const id = props.mockEmployees.length

    const newUser = {
        id:id,
        name: name,
        lastname: lastname, 
        position: position,
    }
    props.setMockEmployees([...props.mockEmployees,newUser])
  }

  const clearInput = () => {
    setName("");
    setLastname("");
    setPosition("");
  };

  const removeData = (e,index) => {
    e.preventDefault();
    const updatedEmployees = [...props.mockEmployees.slice(0, index), ...props.mockEmployees.slice(index + 1)];
    props.setMockEmployees(updatedEmployees);
    console.log(updatedEmployees);
  };

  return (
    <>
      <br />
      <br />
      <form>
        <label htmlFor="Name">Create User Here</label> <br />
        <input
          type="text"
          id="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="Last Name"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          id="Position"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            addUser(e)
            clearInput();
          }}
        >
          Save
        </button>
        <br />
        <br />
        <br />
        <table class="table-admin">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.mockEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td>
                  <button onClick={(e) => removeData(e,index)}>Delete</button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

const User = (props) => {
  return (
    <div class="body">
      <br />
      <br />
      <table class="table-user">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {props.mockEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Blankpage = () => {
  return <></>;
};

export default Home;
