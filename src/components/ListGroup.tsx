// import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;
  // variable or function
  //   const message = items.length === 0 ? <p>No Item found</p> : null;
  // // function
  // const getMessage = () => {
  //     return items.length === 0 ? <p>No Item found</p> : null;;
  // };

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* { getMessage()} */}
      {/* { message} */}
      {items.length === 0 ? <p>No Item found</p> : null}
      {items.length === 0 && <p>No Items found</p>}
      {/* // if firs is true then it will show p */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {selectedIndex = index;}}
            // onClick={handleClick}
            // onClick={(event) => console.log(event)}
            // onClick={(event) => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
