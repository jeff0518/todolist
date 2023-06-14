import style from "./Form.module.css";

function Form() {
  return (
    <form className={style.form}>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="FirstName"
          placeholder="FirstName"
        />
      </div>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="LastName"
          placeholder="LastName"
        />
      </div>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="Email"
          placeholder="Email"
        />
      </div>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="Salary"
          placeholder="Salary"
        />
      </div>
      <div className={style.container}>
        <input
          className={style.container_input_date}
          type="date"
          name="Date"
          placeholder="Date"
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
          />
          <label htmlFor="radioDefault2" className={style.form_check_label}>
            Inactive
          </label>
        </div>
      </div>

      <button className={style.form_but}>Add</button>
    </form>
  );
}

export default Form;
