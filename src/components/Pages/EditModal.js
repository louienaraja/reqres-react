import React, { useState } from 'react';
import { Modal, Input, Form } from 'antd';
import User from '../../service/User';
import './modal.scss';

function EditModal({
  handleCancel,
  handleOk,
  userData,
  visible,
}) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)

  const onFinish = ({ id, email, firstName, lastName }) => {
    setLoading(true)

    User.editUser(id, email, firstName, lastName).then(e => {
      console.log('THIS E: ', e)
      const { data, status } = e;
      console.log('STATUS: ', status)
      console.log('DATA: ', data)

      if (status === 200) {
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
      okText="Update"
      title={`Edit user ${userData.email}`}
      visible={visible}
    >
      <Form form={form} initialValues={userData} layout="vertical" onFinish={onFinish}>
        <Form.Item hidden name="id" className="modal-title">
          <Input className="modal-content" />
        </Form.Item>
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
          name="first_name"
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
          name="last_name"
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

export default EditModal