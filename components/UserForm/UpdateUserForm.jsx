import { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import Success from "../Success/Success";
import Bug from "../Bug/bug";
import style from "../UserForm/UpdateUserForm.module.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function UpdateUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0)
      return console.log("Don't have Form Data");

    console.log(formData);
  };
  if (Object.keys(formData).length > 0) return <Bug message={"Error"} />;

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="FirstName"
          placeholder="FirstName"
          onChange={setFormData}
        />
      </div>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="LastName"
          placeholder="LastName"
          onChange={setFormData}
        />
      </div>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="Email"
          placeholder="Email"
          onChange={setFormData}
        />
      </div>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="Salary"
          placeholder="Salary"
          onChange={setFormData}
        />
      </div>
      <div className={style.container}>
        <input
          className={style.container_input_date}
          type="date"
          name="Date"
          placeholder="Date"
          onChange={setFormData}
        />
      </div>

      <div className={style.form_option}>
        <div className={style.form_check}>
          <input
            className={style.form_check_input}
            type="radio"
            value="Active"
            id="radioDefault1"
            name="status"
            onChange={setFormData}
          />
          <label htmlFor="radioDefault1" className={style.form_check_label}>
            Active
          </label>
        </div>

        <div className={style.form_check}>
          <input
            className={style.form_check_input}
            type="radio"
            value="Inactive"
            id="radioDefault2"
            name="status"
            onChange={setFormData}
          />
          <label htmlFor="radioDefault2" className={style.form_check_label}>
            Inactive
          </label>
        </div>
      </div>

      <button className={style.form_but}>
        Update
        <span>
          <BiBrush size={24} />
        </span>
      </button>
    </form>
  );
}

export default UpdateUserForm;
