import { Button } from 'antd'
import React from 'react'
import ProjectForm from './ProjectForm';

function Projects() {
    const [show, setShow] = React.useState(false);
  return (
    <div>
        <div classname="flex justify-end">
            <Button type="default"
                onClick={()=> setShow(true)}
            >Add Project</Button>
        </div>

        {show && <ProjectForm show={show} setShow={setShow}></ProjectForm>}
    </div>
  )
}

export default Projects