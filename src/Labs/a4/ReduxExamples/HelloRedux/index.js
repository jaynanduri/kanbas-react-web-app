import { useSelector, useDispatch } from "react-redux";
function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  return (
    <div>
      <h2>Hello Redux</h2>
      <h3>{message}</h3>
    </div>
  );
}
export default HelloRedux;