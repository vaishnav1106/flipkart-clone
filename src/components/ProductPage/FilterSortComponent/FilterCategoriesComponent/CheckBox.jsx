import styles from "./FilterCategories.module.css";

function CheckBox(props) {
  return (
    <>
      <div className={styles.checkBox}>
        <input
          type="checkbox"
          id={props.name.toLowerCase()}
          value={props.value}
          onChange={props.onChange}
        />
        <label htmlFor={props.name.toLowerCase()}>{props.name}</label>
      </div>
    </>
  );
}



export default CheckBox;