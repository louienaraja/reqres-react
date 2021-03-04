import React, { useState } from 'react';
import { Modal, Input, Form } from 'antd';
import User from '../../service/User';
import './modal.scss';

function DeleteModal({ handleCancel, handleOk, userData, visible }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)

  const onFinish = () => {
    setLoading(true)
    console.log('submit')

    User.deleteUser(userData.id).then(e => {
      console.log('THIS E: ', e)
      const { data, status } = e;
      console.log('STATUS: ', status)
      console.log('DATA: ', data)

      if (status === 204) {
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
      okText="Delete"
      okType="danger"
      title={`Delete user ${userData.email}?`}
      visible={visible}
    >
      <Form form={form} initialValues={userData} layout="vertical" onFinish={onFinish}>
        <Form.Item hidden name="id" className="modal-title">
          <Input readOnly className="modal-content" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          className="modal-title">
          <Input readOnly className="modal-content" />
        </Form.Item>
        <Form.Item
          name="first_name"
          label="First name"
          className="modal-title">
          <Input readOnly className="modal-content" />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Last Name"
          className="modal-title">
          <Input readOnly className="modal-content" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default DeleteModal