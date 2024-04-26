import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/App.module.scss";
import { actionType } from "./store/reducer.js";

export function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const save = () => {
    dispatch({ type: actionType.save, payload: state.value });
  };

  const add = () => {
    dispatch({ type: actionType.add, payload: state.inputValue });
  };

  const subtract = () => {
    dispatch({ type: actionType.subtract, payload: state.inputValue });
  };

  const reset = () => {
    if (confirm("Вы точно хотите обнулить все числа?")) {
      dispatch({ type: actionType.reset });
    } else {
      return;
    }

    dispatch({ type: actionType.setInput, payload: "" });
    dispatch({ type: actionType.resetSaved });
  };

  const handleInput = (event) => {
    const value = Number(event.target.value);
    dispatch({ type: actionType.setInput, payload: value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.sum}>{state.value}</h1>
        <button className={styles.button} onClick={save}>
          Save number
        </button>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={add}>
            +
          </button>

          <input
            type="number"
            value={state.inputValue}
            onChange={handleInput}
          />

          <button className={styles.button} onClick={subtract}>
            -
          </button>
        </div>

        <button className={styles.button} onClick={reset}>
          Reset
        </button>
      </div>

      <div className={styles.saved}>
        <h2 className={styles.saved_title}>Saved numbers:</h2>
        {state.saved.length ? (
          <ul className={styles.saved_list}>
            {state.saved.map((num) => (
              <li>{num}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.saved_empty}>No saved numbers</p>
        )}
      </div>
    </div>
  );
}
