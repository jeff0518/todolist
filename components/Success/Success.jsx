import { BiPlus } from "react-icons/bi";
import style from "./Success.module.css";
function Success({ message }) {
  return (
    <div className={style.container}>
      <div className={style.container_add}>
        {message}
        <BiPlus size={25} color={"rgb(34,197,94)"} />
      </div>
    </div>
  );
}

export default Success;
