// App.js
import './App.css';
import React, { useRef, useState } from 'react';
import User from './UserList';
import AddUser from './AddUser';

function App() {
  const [inputs, setInputs] = useState({
    userName: '',
    phone: ''
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      name: '짱구',
      phone: '010-1234-1023',
      info: '📞mobile',
    },
    {
      id: 2,
      name: '짱아',
      phone: '02-2345-3442',
      info: '🏠home',
    },
    {
      id: 3,
      name: '흰둥이',
      phone: '010-1321-3423',
      info: '📞mobile',
    },
  ]);

  const changeHandler = e => {
    let { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const id = useRef(4);

  const addUserHandler = () => {
    // 입력 유효성 검사
    if (inputs.userName === '' || inputs.phone === '') {
      return alert('정보를 입력하십시오');
    }

    const user = {
      id: id.current,
      name: inputs.userName,
      phone: inputs.phone,
      info: '📞mobile'
    };

    setUsers((prevState) => {
      return [user, ...prevState];
    });

    setInputs({
      userName: '',
      phone: ''
    });

    id.current += 1;
  };

  return (
    <div className='container'>
      <AddUser
        name={inputs.userName}
        phone={inputs.phone}
        onChangeInput={changeHandler}
        onAddUser={addUserHandler}
      />
      <div className='user-list-wrap'>
        {
          users.map((user) => (
            <User user={user} key={user.id} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
