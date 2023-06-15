import AddUserForm from "../UserForm/AddUserForm";
import UpdateUserForm from "../UserForm/UpdateUserForm";
import style from "./Form.module.css";

function Form() {
  const flag = true;
  return (
    <div className={style.form}>
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  );
}

export default Form;
