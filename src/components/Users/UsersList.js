import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(({ name, age, id}) => (
          <li key={id}>
            {name} ({age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList;
