import Layout from "./layout";

const Admin = () => {
  return (
    <Layout>
      <div class="body">
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
        <br />
        <br />

        <div class="button-home">
          <a href="./User">
            <button>User Home Sector</button>
          </a>

          <a href="./Admin">
            <button>Admin Home Sector</button>
          </a>
        </div>

        <br />
        <br />

        <br />
        <br />
        <form>
          <label htmlFor="Name">Create User Here</label> <br />
          <input type="text" id="Name" value="Name" />
          <input type="text" id="Last Name" value="Last Name" />
          <input type="text" id="Position" value="Position" />
          <button>Save</button>
          <br />
          <br />
          <br />
          <table class="table-admin">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
            <tr>
              <td> 1</td>
              <td> </td>
              <td> </td>
              <td>Delete</td>
            </tr>
            <tr>
              <td> 2</td>
              <td> </td>
              <td> </td>
              <td>Delete</td>
            </tr>
            <tr>
              <td> 3</td>
              <td> </td>
              <td> </td>
              <td>Delete</td>
            </tr>
          </table>
        </form>
      </div>
    </Layout>
  );
};

export default Admin;
