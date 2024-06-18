import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">TODO List</h1>
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r"
            onClick={addTask}
          >
            <FaPlus />
          </button>
        </div>
        {tasks.length === 0 ? (
          <div className="text-center text-gray-500">No tasks available</div>
        ) : (
          <ul className="bg-white shadow rounded p-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`flex justify-between items-center mb-2 p-2 border-b border-gray-200 ${task.completed ? 'line-through text-gray-500' : ''}`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                  />
                  {task.text}
                </div>
                <button
                  className="text-red-500"
                  onClick={() => deleteTask(index)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Index;