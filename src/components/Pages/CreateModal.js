import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Input, Form, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import User from '../../service/User';
import './modal.scss';

function CreateModal(props) {
  const [form] = Form.useForm()

  const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [disableButton, setDisableButton] = useState(false)

  const onFinish = e => {
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


  return (
    <Modal
      closable={false}
      title={<b>{props.title}</b>}
      visible={props.visible}
      footer={[
        <Link to="/users">
          <Button
            key="back"
            disabled={disableButton}
            onClick={() => props.handleCancel()}
          >
            {disableButton ? <Spin indicator={antIcon}>Cancel</Spin> : "Cancel"}
          </Button>
        </Link>,
        <Link to="/users">
          <Button
            id="Submit"
            key="submit"
            type={props.buttonType}
            disabled={disableButton}
            onClick={() => {
              form.submit();
              Boolean(form.submit() !== undefined) && onFinish();
            }
            }
          >
            {disableButton ? <Spin indicator={antIcon}>{props.action}</Spin> : props.action}
          </Button>
        </Link>
      ]}
    >
      <Form form={form} name="create-user" scrollToFirstError onFinish={onFinish} >
        <div className="modal-main-content">
          <Form.Item
            className="modal-title"
            name="email"
            label="Email"
            hasFeedback
            rules={[
              { required: 'true', message: 'Please input your email address!' },
              { type: 'email', message: 'This is not a valid email' }
            ]} >
            <Input className="modal-content" placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
          </Form.Item>
        </div>
        <div className="modal-main-content">
          <Form.Item
            className="modal-title"
            name="firstName"
            label="First Name"
            hasFeedback
            rules={[
              { required: true, message: 'Please input your first name!' },
              { pattern: new RegExp(/^[a-z ,.'-]+$/i), message: 'Numbers and Special Characters are NOT allowed.' }
            ]} >
            <Input className="modal-content" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
          </Form.Item>
        </div>
        <div className="modal-main-content">
          <Form.Item
            className="modal-title"
            name="lastName"
            label="Last Name"
            hasFeedback
            rules={[
              { required: true, message: 'Please input your last name!' },
              { pattern: new RegExp(/^[a-z ,.'-]+$/i), message: 'Numbers and Special Characters are NOT allowed.' }
            ]} >
            <Input className="modal-content" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}

export default CreateModal