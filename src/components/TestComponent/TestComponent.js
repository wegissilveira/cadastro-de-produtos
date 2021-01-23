import React, { useState, useRef } from 'react';
import './TestComponent.css';

const App = () => {
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const [list, setList] = useState([
    'Chicken Biriyani',
    'Mutton Pulao',
    'Paneer Masala',
    'Tandoori Chicken',
    'Dal Makhana',
    'Malai Kofta',
  ]);

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(e.target.innerHTML);
    const listCopy = [...list];
    // console.log(draggingItem.current, dragOverItem.current);
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setList(listCopy);
  };

  return (
    <>
      {list &&
        list.map((item, index) => (
          <h1
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => handleDragEnter(e, index)}
            key={index}
            draggable
          >
            {item}
          </h1>
        ))}
    </>
  );
};

export default App;