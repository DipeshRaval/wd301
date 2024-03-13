import React, { forwardRef } from "react";
import Task from "./Task";
import { ColumnData, TaskDetails } from "../../context/task/types";
import { Droppable } from "react-beautiful-dnd";
import { useTranslation } from "react-i18next";

const Container = (props: React.PropsWithChildren) => {
  // We will use flex to display lists as columns
  return (
    <div className="m-2 border border-gray rounded w-1/3 flex flex-col">
      {props.children}
    </div>
  );
};

// A component to render the title, which will be included as <Title>This is a sample title</Title>
const Title = (props: React.PropsWithChildren) => {
  return <h3 className="p-2 font-semibold">{props.children}</h3>;
};

const TaskList = forwardRef<HTMLDivElement | null, React.PropsWithChildren>(
  (props: React.PropsWithChildren, ref) => {
    return (
      <div ref={ref} className="grow min-h-100 dropArea" {...props}>
        {" "}
        {props.children}
      </div>
    );
  }
);

interface Props {
  column: ColumnData;
  tasks: TaskDetails[];
}

const Column: React.FC<Props> = (props) => {
  const {t} = useTranslation()
  // Render each `Task` within a `TaskList` component.
  return (
    <Container>
      <Title>{t(props.column.title)}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {props.tasks.map((task, idx) => (
                <Task key={task.id} task={task} index={idx} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
      </Droppable>
  </Container>
  );
};

export default Column;
