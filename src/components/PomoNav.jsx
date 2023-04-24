import Button from "./Button";

export default function PomoNav() {
  return (
    <ul role="list">
      <li>
     <Button>Pomodoro</Button>
      </li>
      <li>
      <Button>Short Break</Button>
      </li>
      <li>
      <Button>Long Break</Button>
      </li>
    </ul>
  );
}
