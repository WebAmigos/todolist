import { ChangeEventHandler, useCallback, useState } from "react";
import { ListItem } from "../ListItem";
import { Task } from "../../types/Task";

const defaultTasks: Task[] = [
  { id: "1", task: "Kupić meleko", done: true },
  { id: "2", task: "Wysłać pocztówkę z wakacji", done: true },
  { id: "3", task: "Nauczyć się Reacta", done: false },
  { id: "4", task: "Nakarmić koty 🐈 przed live", done: false },
];

export const List = () => {
  const [tasks, setTasks] = useState(defaultTasks);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const id = event.target.id;
      const checked = event.target.checked;
      console.log({ id, checked });

      const newTasks = [...tasks];
      const modifiedTasks = newTasks.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            done: checked,
          };
        }
        return elem;
      });
      console.log({ modifiedTasks });

      setTasks(modifiedTasks);
    },
    []
  );

  return (
    <div>
      <ul>
        {tasks.map((elem) => (
          <ListItem
            key={elem.id}
            id={elem.id}
            task={elem.task}
            done={elem.done}
            onChange={handleChange}
          />
        ))}
      </ul>
    </div>
  );
};
