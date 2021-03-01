import React, { useState } from 'react';
import { Modal, Button, Input, Form, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import User from '../../service/User';
import './modal.scss';

function CreateModal(props) {

  const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [disableButton, setDisableButton] = useState(false)

  const onFinish = () => {
    setDisableButton(true)
    User.createUser(email, firstName, lastName).then(e => {
      console.log('THIS E: ', e)
      const { data, status } = e;
      console.log('STATUS: ', status)
      console.log('DATA: ', data)
      if (status === 201) {
        alert(`Created User ${firstName} ${lastName}`)
        setDisableButton(false)
        props.handleOk()
      };
    })
  };

  const [form] = Form.useForm()

  // Form.Item validation not working?

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
          <p>{disableButton ? <Spin indicator={antIcon}>Cancel</Spin> : "Cancel"}</p>
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
          <p>{disableButton ? <Spin indicator={antIcon}>{props.action}</Spin> : props.action}</p>
        </Button>
      ]}
    >
      <Form form={form} name="create-user" scrollToFirstError onFinish={onFinish} >
        <div className="modal-main-content">
          <Form.Item
            className="modal-title"
            // name="email"
            required
            hasFeedback
            rules={[
              { required: 'true', message: 'Please input your email address!' },
              { type: 'email', message: 'This is not a valid email' }
            ]} >
            <b>Email</b>
            <Input className="modal-content" placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
          </Form.Item>
        </div>
        <div className="modal-main-content">
          <Form.Item
            className="modal-title"
            // name="firstName"
            required
            hasFeedback
            rules={[
              { required: true, message: 'Please input your first name!' },
              { pattern: new RegExp(/^[a-z ,.'-]+$/i), message: 'Numbers and Special Characters are NOT allowed.' }
            ]} >
            <b>First Name</b>
            <Input className="modal-content" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
          </Form.Item>
        </div>
        <div className="modal-main-content">
          <Form.Item
            className="modal-title"
            // name="lastName"
            required
            hasFeedback
            rules={[
              { required: true, message: 'Please input your last name!' },
              { pattern: new RegExp(/^[a-z ,.'-]+$/i), message: 'Numbers and Special Characters are NOT allowed.' }
            ]} >
            <b>Last Name</b>
            <Input className="modal-content" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}

export default CreateModal