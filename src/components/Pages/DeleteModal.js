import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'antd'
import User from '../../service/User'
import './modal.scss'

function DeleteModal(props) {

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

  const deleteUserOnClick = () => {
    User.deleteUser(id).then(e => {
      console.log('THIS E: ', e)
      const { data, status } = e;
      console.log('STATUS: ', status)
      console.log('DATA: ', data)
      if (status === 204) {
        alert(`Deleted User ${firstName} ${lastName}`)
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
          onClick={() => deleteUserOnClick()}
        >
          <p>{props.action}</p>
        </Button>
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