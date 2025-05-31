const AddUser = (props) => {
  return (
    <div className='input-wrap'>
      <input
        name="userName"
        placeholder="이름"
        onChange={props.onChangeInput}
        value={props.name}
      />
      <input
        name="phone"
        placeholder="전화번호"
        onChange={props.onChangeInput}
        value={props.phone}
      />
      <button onClick={props.onAddUser}>추가</button>
    </div>
  );
};

export default AddUser;
