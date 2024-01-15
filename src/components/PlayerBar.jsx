import style from "@/styles/bar.module.css";

export function PlayerBar({ name, value, countUp, countDown }) {
  return (
    <div className={style.bar}>
      <h2>{name}</h2>
      <div className={style.pointDiv}>
        <button onClick={() => countDown(value)}>
          <svg
            className={style.minus}
            width="14"
            height="3"
            viewBox="0 0 14 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.16675 1.5H12.8334"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <p>{value}</p>
        <button onClick={() => countUp(value)}>
          <svg
            className={style.minus}
            width="14"
            height="3"
            viewBox="0 0 14 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 1.5H12.8332"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className={style.hori}
            width="2"
            height="15"
            viewBox="0 0 2 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.66666V13.3333"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
