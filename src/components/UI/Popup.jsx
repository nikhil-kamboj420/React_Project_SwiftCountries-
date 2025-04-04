export const Popup = ({ formData, showPopup, setShowPopup }) => {
  const { username, email, message } = formData;
  const mainDivStyles = "absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  max-w-[98rem] grid place-content-center justify-center z-50";
  return (
    <div className={showPopup ? `${mainDivStyles}` : "hidden"}>
      <div className=" container-card rounded-md shadow-md ">
        <h1 className="text-4xl"> We got your Info 😉</h1>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Message: {message}</p>
        <button onClick={() => setShowPopup(false)}>Back</button>
      </div>
    </div>
  );
};
