import { useState } from "react";

const Stats = (props) => {
  const [displayValue, setDisplayValue] = useState(false);
  // console.log('init' + displayValue)
  // show and hide stats function. toggle css classes
  const readMore = (target) => {
    console.log(target)
    if (displayValue === false) {
      // console.log(displayValue + 'if false')
      //  !!!
      //  !!! first run displayValue == false pero ejecuta else !!!!
      target.nextSibling.classList.add("stats-expanded");
      target.nextSibling.classList.remove("stats-contracted");
    } else if (displayValue === true){
      // console.log(displayValue + 'if true')
      target.nextSibling.classList.remove("stats-expanded");
      target.nextSibling.classList.add("stats-contracted");
    }
    setDisplayValue(!displayValue);
    // console.log(displayValue)
  };

  //  store stat points elements
  let atkArray = [];
  let defArray = [];
  let specArray = [];
  let speedArray = [];

  for (let i = 0; i < props.atk; i++) {
    atkArray.push(<div key={i} className="dots"></div>);
  }
  for (let i = props.atk; i < 10; i++) {
    atkArray.push(<div key={i} className="dots-gray"></div>);
  }
  for (let i = 0; i < props.def; i++) {
    defArray.push(<div key={i} className="dots"></div>);
  }
  for (let i = props.def; i < 10; i++) {
    defArray.push(<div key={i} className="dots-gray"></div>);
  }
  for (let i = 0; i < props.spec; i++) {
    specArray.push(<div key={i} className="dots"></div>);
  }
  for (let i = props.spec; i < 10; i++) {
    specArray.push(<div key={i} className="dots-gray"></div>);
  }
  for (let i = 0; i < props.speed; i++) {
    speedArray.push(<div key={i} className="dots"></div>);
  }
  for (let i = props.speed; i < 10; i++) {
    speedArray.push(<div key={i} className="dots-gray"></div>);
  }

  //  HTML return
  return (
    <>
    {/* show stats button */}
      <button className="info-button text-hover" onClick={(e) => {readMore(e.target)}}>
        Stats
      </button>
      {/* stats rows | default hidden */ }
     <div className={`stats`}>
        <div className="stat-row">
          <p>Attack</p> <div className="points">{atkArray}</div>
        </div>
        <div className="stat-row">
          <p>Defense</p> <div className="points">{defArray}</div>
        </div>
        <div className="stat-row">
          <p>Special</p> <div className="points">{specArray}</div>
        </div>
        <div className="stat-row">
          <p>Speed</p> <div className="points">{speedArray}</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
