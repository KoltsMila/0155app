import { NavLink } from "react-router-dom";
import backgroundImg from ".././assets/img/background.jpg"
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


export const Friends = (props) => {
  let users = props.function();
  // console.log(Object.keys(users).length);
  let usersCount = Object.keys(users).length;
  let userRow = [];

  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TableRow id={users[i].id} key={i} index={i} name={users[i].name} lastname={users[i].lastname}/>);
  }
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
          {userRow}
        </tbody>
      </table>
    </div>
    <div className="row">
      <div className="col-xl-6 p-5 text-white fluid" style={{backgroundImage: `url(${backgroundImg})`}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat vel quibusdam repellendus, rem aliquid omnis a amet, accusantium vitae repudiandae quae soluta consequuntur eius similique. Ex ullam recusandae rem! Sed!
      </div>
      <div className="col-xl-6 p-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iure maxime, quibusdam exercitationem, a atque voluptate labore ullam placeat quae autem earum deleniti delectus quia distinctio mollitia quidem ea ut.
      </div>
    </div>
    </>
  );
};