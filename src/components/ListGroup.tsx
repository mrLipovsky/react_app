function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // variable or function
  //   const message = items.length === 0 ? <p>No Item found</p> : null;
  // // function
  // const getMessage = () => {
  //     return items.length === 0 ? <p>No Item found</p> : null;;
  // };

  return (
    <>
      <h1>List</h1>
      {/* { getMessage()} */}
      {/* { message} */}
      {items.length === 0 ? <p>No Item found</p> : null}
      {items.length === 0 && <p>No Items found</p>}
      {/* // if firs is true then it will show p */}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("Clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
