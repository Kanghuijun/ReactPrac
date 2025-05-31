const UserList = (props) => {
  return (
    <div className='list-box'>
      <h2>{props.user.name}</h2>
      <b>{props.user.phone}</b><span>{props.user.info}</span>
    </div>
  )
}

export default UserList;