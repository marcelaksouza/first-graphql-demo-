import React from "react";

const DeleteBookButton = (props) => {
  const deleteBookFunc = () => {
    console.log(props.bookId)
  };

  return (
    <div className="p-4">
      <button className="shadow border font-bold bg-white border-pink-300 text-pink-500 hover:border-pink-500 hover:boder-2 focus:border-pink-500 py-2 px-4 rounded"
      onClick={deleteBookFunc}
      > 
      Delete Book </button>
    </div>
  );
};

export default DeleteBookButton;