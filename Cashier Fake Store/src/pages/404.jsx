import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex justify-center items-center flex-col ">
      <h1>Oops!</h1>
      <p>Sorry, as unExpected error has occured</p>
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        alt=""
      />
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
