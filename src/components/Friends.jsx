import { NavLink } from "react-router-dom";
import backgroundImg from ".././assets/img/background.jpg";
import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.lastname} {props.name}
        </NavLink>
      </td>
    </tr>
  );
}

export class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userRow: [] };
  }

  componentDidMount() {
    this.props.function().then((users) => {
      // let usersCount = Object.keys(users).length;
      let userRow = [];

      for (let i = 0; i < users.length; i++) {
        userRow.push(
          <TableRow 
            id={users[i].id} 
            key={i} 
            index={i} 
            name={users[i].name} 
            lastname={users[i].lastname}
          />
        );
      }
      this.setState({userRow: userRow})
    });
  }

  render() {
    return (
      <>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Фамилия и имя</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userRow}
            </tbody>
          </table>
        </div>
        <div className="mt-5 row">
          <div className="p-5 text-white col-xl-6" style={{backgroundImage: `url(${backgroundImg})`}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat vel quibusdam repellendus, rem aliquid omnis a amet, accusantium vitae repudiandae quae soluta consequuntur eius similique. Ex ullam recusandae rem! Sed!
          </div>
          <div className="p-5 col-xl-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iure maxime, quibusdam exercitationem, a atque voluptate labore ullam placeat quae autem earum deleniti delectus quia distinctio mollitia quidem ea ut.
          </div>
        </div>
      </>
    );
  }
}

// export const Friends = (props) => {
//   let users = props.function();
//   // console.log(Object.keys(users).length);
//   
// }