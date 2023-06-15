import { BiPlus } from "react-icons/bi";
import style from "./Bug.module.css";
function Bug({ message }) {
  return (
    <div className={style.container}>
      <div className={style.container_add}>
        {message}
        <BiPlus size={25} color={"rgb(248,113,113)"} />
      </div>
    </div>
  );
}

export default Bug;
