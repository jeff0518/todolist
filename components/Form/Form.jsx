import style from "./Form.module.css";

function Form() {
  return (
    <form>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="firstName"
          placeholder="FirstName"
        ></input>
      </div>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="firstName"
          placeholder="LastName"
        ></input>
      </div>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="firstName"
          placeholder="Email"
        ></input>
      </div>
      <div className={style.container}>
        <input
          className={style.container_input}
          type="text"
          name="firstName"
          placeholder="Salary"
        ></input>
      </div>
      <div>
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
