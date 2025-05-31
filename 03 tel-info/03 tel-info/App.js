import React, { useState } from 'react';

const InputForm = () => {
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  // const [date, setDate] = useState('');
  const [userInput, setUserInput] = useState({
    title: '',
    content: '',
    date: '',
  });

  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,np
    //   title: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const contentChangeHandler = (event) => {
    // setContent(event.target.value);
    setUserInput({
      ...userInput,
      content: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setUserInput({
      ...userInput,
      date: event.target.value,
    });
  };

  return (
    <form>
      <div>
        <div>
          <label>제목</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div>
          <label>내용</label>
          <input type='text' onChange={contentChangeHandler} />
        </div>
        <div>
          <label>날짜</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type='submit'>추가</button>
      </div>
    </form>
  );
};

export default InputForm;
