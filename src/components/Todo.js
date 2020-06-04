import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick1, completed, text }) => {
  const handleClick = () => {
    onClick1();
  };

  return (
    <li onClick={handleClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
};

Todo.propTypes = {
  onClick1: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
