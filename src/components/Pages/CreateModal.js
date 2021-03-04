import React, { useState } from 'react';
import { Modal, Input, Form } from 'antd';
import User from '../../service/User';
import './modal.scss';

function CreateModal({
  handleCancel,
  handleOk,
  visible,
}) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)

  const onFinish = ({ email, firstName, lastName }) => {
    setLoading(true)
    console.log('submit')

    User.createUser(email, firstName, lastName).then(e => {
      console.log('THIS E: ', e)
      const { data, status } = e;
      console.log('STATUS: ', status)
      console.log('DATA: ', data)

      if (status === 201) {
        setLoading(false);

        handleOk();
      };
    })
  };

  return (
    <Modal
      destroyOnClose
      confirmLoading={loading}
      onCancel={() => handleCancel()}
      onOk={() => form.submit()}
      okText="Create"
      title="Create User"
      visible={visible}
    >
      <Form form={form} layout="vertical" scrollToFirstError onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Email"
          hasFeedback
          rules={[
            { required: 'true', message: 'Please input your email address!' },
            { type: 'email', message: 'This is not a valid email' }
          ]}
          className="modal-title">
          <Input className="modal-content" />
        </Form.Item>
        <Form.Item
          name="firstName"
          label="First name"
          hasFeedback
          rules={[
            { required: true, message: 'Please input your first name!' },
            { pattern: new RegExp(/^[a-z ,.'-]+$/i), message: 'Numbers and Special Characters are NOT allowed.' }
          ]}
          className="modal-title">
          <Input className="modal-content" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          hasFeedback
          rules={[
            { required: true, message: 'Please input your last name!' },
            { pattern: new RegExp(/^[a-z ,.'-]+$/i), message: 'Numbers and Special Characters are NOT allowed.' }
          ]}
          className="modal-title">
          <Input className="modal-content" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateModal