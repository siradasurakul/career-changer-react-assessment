import Layout from "./layout";

const User = () => {
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
      <table class="table-user">
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
        <tr>
          <td> 1</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td> 2</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td> 3</td>
          <td> </td>
          <td> </td>
        </tr>
      </table>
      </div>
    </Layout>
  );
};

export default User;
