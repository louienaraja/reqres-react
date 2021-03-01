import React, { useState } from 'react';
import { Container } from 'reactstrap';
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import User from '../../service/User';
// import { InfoProvider } from '../../components/Pages/InfoContext';
import CreateModal from '../../components/Pages/CreateModal'
import EditModal from '../../components/Pages/EditModal'
import DeleteModal from '../../components/Pages/DeleteModal'
import './users.scss';

function Index() {

  React.useEffect(() => {
    getUsersList()
  }, [])

  const [record, setRecord] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedFirstName, setSelectedFirstName] = useState("");
  const [selectedLastName, setSelectedLastName] = useState("");
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: '20%',
      defaultSortOrder: 'descend'
    },
    {
      title: 'Profile',
      dataIndex: 'profile',
      key: 'profile',
      align: 'center',
      width: '10%',
      render: (profile) => (
        <img src={profile} alt={profile} />
      )
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      width: '15%',
    },
    {
      title: "First Name",
      key: 'first_name',
      dataIndex: 'first_name',
      align: 'center',
      width: '20%',
    },
    {
      title: "Last Name",
      key: 'last_name',
      dataIndex: 'last_name',
      align: 'center',
      width: '20%',
    },
    {
      title: "Actions",
      key: 'actions',
      width: '20%',
      render: (record) => (
        <div className="action-buttons">
          <Button
            className="btn-delete"
            size="small"
            type="danger"
            onClick={() => {
              setSelectedId(record['id'])
              setSelectedUser(`${record['first_name']} ${record['last_name']}`)
              User.viewUser(record.id)
                .then(e => {
                  console.log('E: ', e)
                  const { data } = e.data;
                  console.log('DATASS: ', data);
                  console.log('DATA EMAIL: ', data.email);
                  setSelectedEmail(data.email);
                  setSelectedFirstName(data.first_name);
                  setSelectedLastName(data.last_name);
                }).then(
                  setVisibleDelete(true)
                )
            }}
          > Delete </Button>
          <Button
            className="btn-edit"
            size="small"
            onClick={() => {
              setSelectedId(record['id'])
              setSelectedUser(`${record['first_name']} ${record['last_name']}`)
              User.viewUser(record.id)
                .then(e => {
                  console.log('E: ', e)
                  const { data } = e.data;
                  console.log('DATASS: ', data);
                  console.log('DATA EMAIL: ', data.email);
                  setSelectedEmail(data.email);
                  setSelectedFirstName(data.first_name);
                  setSelectedLastName(data.last_name);
                }).then(
                  setVisibleEdit(true)
                )
            }}
          > Edit </Button>
        </div>
      ),
    }
  ]

  const getUsersList = () => {
    User.getUsers()
      .then(e => {
        const { data } = e.data;
        if (data) {
          console.log('DATA: ', data)
          setRecord(data)
        }
      })
  }

  const getDataSource = () => {
    console.log('RECORD: ', record)
    let source = record.map((e, i) => ({
      key: i,
      id: e.id,
      profile: e.avatar,
      email: e.email,
      first_name: e.first_name,
      last_name: e.last_name
    }))
    return source;
  }

  return (
    <Container>
      <div className="mt-3 text-right">
        <Button color="primary" type="primary" onClick={() => setVisibleCreate(true)}>+ Add User</Button>
      </div>

      <Table columns={columns} dataSource={getDataSource()} pagination={{ pageSize: 20 }} />

      {/* modals */}
      <CreateModal
        title="Create User"
        // email={selectedEmail}
        // first_name={selectedFirstName}
        // last_name={selectedLastName}
        visible={visibleCreate}
        action="Create"
        buttonType="primary"
        handleCancel={() => setVisibleCreate(false)}
        handleOk={() => {
          setVisibleCreate(false)
        }
        } />
      <EditModal
        title={`Edit User ${selectedUser}`}
        id={selectedId}
        email={selectedEmail}
        first_name={selectedFirstName}
        last_name={selectedLastName}
        visible={visibleEdit}
        action="Edit"
        buttonType="primary"
        handleCancel={() => setVisibleEdit(false)}
        handleOk={() => {
          setVisibleEdit(false)
        }
        } />
      <DeleteModal
        title={`Delete User ${selectedUser}?`}
        id={selectedId}
        email={selectedEmail}
        first_name={selectedFirstName}
        last_name={selectedLastName}
        visible={visibleDelete}
        action="Delete"
        buttonType="danger"
        handleCancel={() => setVisibleDelete(false)}
        handleOk={() => {
          setVisibleDelete(false)
        }
        } />

    </Container>

  );
}

export default Index;
