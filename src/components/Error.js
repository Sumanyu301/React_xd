import { useRouteError } from "react-router-dom";

const Errors = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>Error route not found</h1>
      <h2>Error smh.</h2>
      <h3>error {err.data}</h3>
    </div>
  );
};
export default Errors;
