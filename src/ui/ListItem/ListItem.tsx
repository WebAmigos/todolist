import { ChangeEventHandler, memo } from "react";
import { Checkbox } from "../Checkbox";
import { type Task } from "../../types/Task";

type Props = Task & {
  readonly onChange: ChangeEventHandler<HTMLInputElement>;
};

export const ListItem = memo(({ id, task, done, onChange }: Props) => {
  return (
    <li>
      <Checkbox id={id} checked={done} onChange={onChange} />{" "}
      <label htmlFor={id} className={done ? "line-through" : ""}>
        {task}
      </label>{" "}
      {/* // TODO: 
      refactor */}
    </li>
  );
});

ListItem.displayName = "memo (ListItem)";
