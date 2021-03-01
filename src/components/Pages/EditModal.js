import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Form, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import User from '../../service/User';
import './modal.scss';

function EditModal(props) {

  const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

  const [id, setId] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [disableButton, setDisableButton] = useState(false)

  useEffect(() => {
    setId(props.id)
    setEmail(props.email)
    setFirstName(props.first_name)
    setLastName(props.last_name)
  }, [props.id, props.email, props.first_name, props.last_name])

  const onFinish = () => {
    setDisableButton(true)
    User.editUser(id, email, firstName, lastName).then(e => {
      console.log('THIS E: ', e)
      const { data, status } = e;
      console.log('STATUS: ', status)
      console.log('DATA: ', data)
      if (status === 200) {
        alert(`Edited User ${firstName} ${lastName}`)
        setDisableButton(false)
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
          disabled={disableButton}
          onClick={() => props.handleCancel()}
        >
          {disableButton ? <Spin indicator={antIcon}>Cancel</Spin> : "Cancel"}
        </Button>,
        <Button
          id="Submit"
          key="submit"
          type={props.buttonType}
          disabled={disableButton}
          onClick={() => {
            onFinish();
          }
          }
        >
          {disableButton ? <Spin indicator={antIcon}>{props.action}</Spin> : props.action}
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