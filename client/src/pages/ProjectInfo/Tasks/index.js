import { Button } from "antd";
import React from "react";
import TaskForm from "./TaskForm";

function Tasks({project}) {
  const [showTaskForm, setShowTaskForm] = React.useState(false);
  return (
    <div>
    {/* {!isEmployee && ( */}
      <div className="flex justify-end">
        <Button type="default" onClick={() => setShowTaskForm(true)}>
          Add Task
        </Button>
      </div>
    {/* )} */}
    

    {showTaskForm && (
        <TaskForm
          showTaskForm={showTaskForm}
          setShowTaskForm={setShowTaskForm}
          project={project}
          // reloadData={getTasks}
          // task={task}
        />
      )}
    </div>
  );
}

export default Tasks;
