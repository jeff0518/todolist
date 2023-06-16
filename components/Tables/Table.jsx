import style from "./Table.module.css";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from "../../database/data.json";

function Tr({ id, name, avatar, email, salary, date, status }) {
  return (
    <tr className={style.tbody_tr}>
      <td className={style.tbody_td}>
        <div className={style.td_img}>
          <img src={avatar || "#"} alt="" />
          <span className={style.td_span}>{name || Unknown}</span>
        </div>
      </td>
      <td className={style.tbody_td}>
        <span>{email || Unknown}</span>
      </td>
      <td className={style.tbody_td}>
        <span>{salary || Unknown}</span>
      </td>
      <td className={style.tbody_td}>
        <span>{date || Unknown}</span>
      </td>
      <td className={style.tbody_td}>
        <button className={style.td_but}>
          <span className={style.td_but_span}>{status || Unknown}</span>
        </button>
      </td>
      <td className={style.tbody_td}>
        <div className={style.tbody_but}>
          <button className={style.td_but}>
            <BiEdit size={25} color={"rgb(24,197,94)"} />
          </button>
          <button className={style.td_but}>
            <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
          </button>
        </div>
      </td>
    </tr>
  );
}

function Table() {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr className={style.thead_tr}>
          <th className={style.thead_th}>
            <span className={style.thead_span}>Name</span>
          </th>
          <th className={style.thead_th}>
            <span className={style.thead_span}>Email</span>
          </th>
          <th className={style.thead_th}>
            <span className={style.thead_span}>Salary</span>
          </th>
          <th className={style.thead_th}>
            <span className={style.thead_span}>Birthday</span>
          </th>
          <th className={style.thead_th}>
            <span className={style.thead_span}>Status</span>
          </th>
          <th className={style.thead_th}>
            <span className={style.thead_span}>Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className={style.tbody}>
        {data.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
