import React from 'react';
import ReactDom from 'react-dom';
import TodoArea from './components/ToDoArea.js';

ReactDom.render(
    <TodoArea />,
    document.getElementById('content')
);