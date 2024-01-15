import mainBody from "@/styles/mainBody.module.css";
import header from "@/styles/header.module.css";
import { PlayerBar } from "@/components/PlayerBar";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  let players = [
    { title: "Player-1", score: count, id: 1 },
    { title: "Player-2", score: count2, id: 2 },
    { title: "Player-3", score: count3, id: 3 },
  ];

  const [scores, setScores] = useState(players);

  scores.sort((a, b) => {
    return b.score - a.score;
  });

  const increase = (id) => {
    const updatedPlayers = [...scores];
    updatedPlayers[id].score += 1;
    setScores(updatedPlayers);
  };

  const decrease = (id) => {
    const updatedPlayers = [...scores];
    updatedPlayers[id].score -= 1;
    setScores(updatedPlayers);
  };

  function reset() {
    const updatedPlayers = [...scores];
    updatedPlayers.map((w) => {
      return (w.score = 0);
    });
    setScores(updatedPlayers);
    updatedPlayers.sort((a, b) => {
      return a.id - b.id;
    });
  }

  return (
    <div className={mainBody.mainBody}>
      <div className={header.header}>
        <div className={header.titles}>
          <h2>Play Score</h2>
          <svg
            width="32"
            height="29"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.8267 5.03906C31.8267 5.20312 32.8658 9.6875 29.8579 13.9531C27.7798 17.0156 24.3345 19.1484 19.5767 20.4062C18.5923 20.6797 17.8814 21.6094 17.8814 22.6484C17.8814 23.9609 18.9204 25 20.2329 25H20.5064C21.9283 25 23.1314 26.2031 23.1314 27.625C23.1314 28.1172 22.8033 28.5 22.3111 28.5H10.1158C9.67826 28.5 9.29544 28.1172 9.29544 27.625C9.29544 26.2031 10.4439 25 11.9204 25H12.1392C13.4517 25 14.5454 23.9609 14.4908 22.6484C14.4908 21.6094 13.8345 20.6797 12.7954 20.4062C8.03763 19.1484 4.59232 17.0156 2.56888 13.9531C-0.329556 9.6875 0.709507 5.20312 0.709507 5.03906C0.873569 4.4375 1.42044 4 2.02201 4H7.54544C7.49076 3.34375 7.49076 2.74219 7.54544 2.19531C7.54544 1.26562 8.31107 0.5 9.29544 0.5H23.2408C24.2251 0.5 24.9908 1.26562 24.9908 2.19531C25.0454 2.74219 25.0454 3.34375 24.9908 4H30.5142C31.1158 4 31.6626 4.4375 31.8267 5.03906ZM4.75638 12.5312C6.01419 14.4453 8.03763 15.9219 10.7173 17.0156C8.69388 13.8438 7.87357 9.90625 7.54544 6.625H3.17044C3.11576 7.9375 3.22513 10.2891 4.75638 12.5312ZM27.7798 12.5312C29.3111 10.2891 29.4204 7.9375 29.3658 6.625H24.9908C24.6626 9.90625 23.8423 13.8438 21.8189 17.0156C24.4986 15.9219 26.522 14.4453 27.7798 12.5312Z"
              fill="#DB890E"
            />
          </svg>
        </div>
        <div className="desc">
          <p>Hidden in the middle of text</p>
        </div>
      </div>
      <div className={mainBody.bars}>
        {scores.map((items) => {
          return (
            <PlayerBar
              name={items.title}
              value={items.score}
              countUp={() => {
                increase(items.id - 1);
              }}
              countDown={() => {
                decrease(items.id - 1);
              }}
            />
          );
        })}
      </div>
      <button className={mainBody.resetBtn} onClick={reset}>
        Reset
      </button>
    </div>
  );
}
