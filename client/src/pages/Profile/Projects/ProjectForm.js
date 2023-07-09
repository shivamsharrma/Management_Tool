import { Form, Input, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

function ProjectForm({show, setShow,reloadData}) {
    const formRef = React.useRef(null);

    const onFinish= async (values)=>{
        console.log(values)
    }
  return (
    <Modal
        title="Add Project"
        open={show}
        onCancel={()=> setShow(false)}
        centered
        width={700}
            onOk={()=>{
                formRef.current.submit()
            }}
        okText="Save"
    >
        <Form
        layout="vertical"
        ref={formRef}
        onFinish={onFinish}
        // initialValues={project}
      >
        <Form.Item label="Project Name" name="name">
          <Input placeholder="Project Name" />
        </Form.Item>
        <Form.Item label="Project Description" name="description">
          <TextArea placeholder="Project Description" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ProjectForm