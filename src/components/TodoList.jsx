import style1 from "./TodoList.module.css";
import { v4 as uuid } from "uuid";

export function TodoList({ list, handleDelete, handleDone }) {
  //console.log("handleDelete", handleDelete);
  console.log("ele", list);
  return (
    <div className={style1.colorWhite}>
      {list
        .filter((ele) => ele.status !== true)
        .map((ele) => (
          <div className={`${style1.displayFlex}`} id={uuid()}>
            <span className={`${style1.spanspacing} `}>{ele.title}</span>
            <div>
              <button
                className={style1.buttonspacing}
                onClick={() => handleDone(ele.id)}
              >
                Done
              </button>
              <button
                className={style1.buttonspacing}
                onClick={() => handleDelete(ele.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      {list.length !== 0 ? (
        <>
          <hr />
          <span>
            <span
              style={{ color: "red", background: "white", fontSize: "1.3rem" }}
            >
              Doing &uArr;
            </span>
            <br />
            <span
              style={{
                color: "green",
                background: "white",
                fontSize: "1.3rem"
              }}
            >
              Completed &dArr;
            </span>
          </span>
          <hr />
          <div>
            {list
              .filter((ele) => ele.status === true)
              .map((ele) => (
                <div>
                  <span className={`${style1.spanspacing} `}>{ele.title}</span>
                  <button
                    className={style1.buttonspacing}
                    onClick={() => handleDelete(ele.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
