import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const routeError = useRouteError();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  }
  if(routeError.status ===404){
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-6">
          <img
            className="max-w-svh max-h-[50vh]"
            src="https://www.vascon.com/images/404/hanging_404.gif"
            alt="not found image"
          />
          <div className="text-3xl text-center mt-10">
            <h1>Oops! An error occurred.</h1>
            <h1>{routeError.statusText}</h1>
            <h1>{routeError.status}</h1>
            <h1>{routeError.error.message}</h1>
          </div>
          <button onClick={handleNavigate}>Go Back</button>
        </div>
      </>
    );
  }
};


