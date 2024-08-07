import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App(props) {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src="brandon.jpeg" alt="Brandon Kelly" />;
}

function Intro() {
  return (
    <div>
      <h1>Brandon Kelly</h1>
      <p>
        Full-stack web developer, interested in React libraries. When I'm not
        coding or designing a website I like to exercise, snowboard, or to just
        enjoy the Arizona sunsets.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML + CSS" emoji="✌️" color="orangered" />
      <Skill skill="HandleBars" emoji="🥸" color="gray" />
      <Skill skill="Git and Github" emoji="🌎" color="lightblue" />
      <Skill skill="Web Design" emoji="🕸️" color="beige" />
      <Skill skill="JavaScript" emoji="☕️" color="yellow" />
      <Skill skill="TypeScript" emoji="📝" color="blue" />
      <Skill skill="MongoDB" emoji="📈" color="green" />
      <Skill skill="GraphQL" emoji="📉" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
