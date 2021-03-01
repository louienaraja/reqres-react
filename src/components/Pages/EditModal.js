import React, { useState, useEffect } from 'react'
import { Modal, Button, Input, Form } from 'antd'
import User from '../../service/User'
import './modal.scss'

function EditModal(props) {

  const [id, setId] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    setId(props.id)
    setEmail(props.email)
    setFirstName(props.first_name)
    setLastName(props.last_name)
  }, [props.id, props.email, props.first_name, props.last_name])

  const onFinish = () => {
    User.editUser(id, email, firstName, lastName).then(e => {
      console.log('THIS E: ', e)
      const { data, status } = e;
      console.log('STATUS: ', status)
      console.log('DATA: ', data)
      if (status === 200) {
        alert(`Edited User ${firstName} ${lastName}`)
        props.handleOk()
      };
    })
  };

  return (
    <Modal
      closable={false}
      title={<b>{props.title}</b>}
      visible={props.visible}
      footer={[
        <Button
          key="back"
          onClick={() => props.handleCancel()}
        >
          <p>Cancel</p>
        </Button>,
        <Button
          id="Submit"
          key="submit"
          type={props.buttonType}
          onClick={() => {
            onFinish();
          }
          }
        >
          <p>{props.action}</p>
        </Button>
      ]}
    >
      <Form onFinish={onFinish}>
        <div className="modal-main-content">
          <Form.Item
            // name="email" 
            className="modal-title">
            <b>Email</b>
            <Input className="modal-content" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Item>
        </div>
        <div className="modal-main-content">
          <Form.Item
            // name="firstName"
            className="modal-title">
            <b>First Name</b>
            <Input className="modal-content" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </Form.Item>
        </div>
        <div className="modal-main-content">
          <Form.Item
            // name="lastName"
            className="modal-title">
            <b>Last Name</b>
            <Input className="modal-content" value={lastName} onChange={e => setLastName(e.target.value)} />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}

export default EditModal