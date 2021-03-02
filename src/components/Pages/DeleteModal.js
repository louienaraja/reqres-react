import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import User from '../../service/User';
import './modal.scss';

function DeleteModal(props) {

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

  const deleteUserOnClick = () => {
    setDisableButton(true)
    User.deleteUser(id).then(e => {
      console.log('THIS E: ', e)
      const { data, status } = e;
      console.log('STATUS: ', status)
      console.log('DATA: ', data)
      if (status === 204) {
        alert(`Deleted User ${firstName} ${lastName}`)
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
        <Link to='/reqres-react/users'>
          <Button
            key="back"
            disabled={disableButton}
            onClick={() => props.handleCancel()}
          >
            {disableButton ? <Spin indicator={antIcon}>Cancel</Spin> : "Cancel"}
          </Button>
        </Link>,
        <Link to='/reqres-react/users'>
          <Button
            id="Submit"
            key="submit"
            type={props.buttonType}
            disabled={disableButton}
            onClick={() => deleteUserOnClick()}
          >
            {disableButton ? <Spin indicator={antIcon}>{props.action}</Spin> : props.action}
          </Button>
        </Link>
      ]}
    >
      <div className="modal-main-content">
        <div name="email" className="modal-title"><b>Email</b>
          <div className="modal-content">{email}</div>
        </div>
      </div>
      <div className="modal-main-content">
        <div name="firstName" className="modal-title"><b>First Name</b>
          <div className="modal-content">{firstName}</div>
        </div>
      </div>
      <div className="modal-main-content">
        <div name="lastName" className="modal-title"><b>Last Name</b>
          <div className="modal-content">{lastName}</div>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteModal