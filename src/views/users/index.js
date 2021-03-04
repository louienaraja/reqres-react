import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Link, useParams } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import User from '../../service/User';
// import { InfoProvider } from '../../components/Pages/InfoContext';
import CreateModal from '../../components/Pages/CreateModal'
import EditModal from '../../components/Pages/EditModal'
import DeleteModal from '../../components/Pages/DeleteModal'
import './users.scss';

function Index() {

  const { id = null, action = null } = useParams();
  const [record, setRecord] = useState([]);
  const [visibleCreate, setVisibleCreate] = useState([id, action].includes('create'));
  const [visibleEdit, setVisibleEdit] = useState(action === 'edit' ? parseInt(id) : null);
  const [visibleDelete, setVisibleDelete] = useState(action === 'delete' ? parseInt(id) : null);
  
  React.useEffect(() => {
    !record.length && getUsersList();
  }, [record])

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
      render: (profile, record) => (
        <img src={profile} alt={record.email} />
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
      render: ({ id, first_name, last_name, email }) => (
        <div className="action-buttons">
          <Link to={{ pathname: `/reqres-react/users/${id}/delete` }}>
            <Button
              className="btn-delete"
              size="small"
              type="danger"
              onClick={() => setVisibleDelete(id)}
            > Delete </Button>
          </Link>
          <DeleteModal
            userData={{ id, first_name, last_name, email }}
            visible={visibleDelete === id}
            action="Delete"
            handleCancel={() => setVisibleDelete(null)}
            handleOk={() => {
              setVisibleDelete(null);

              getUsersList();
            }}
          />
          <Link to={{ pathname: `/reqres-react/users/${id}/edit` }} >
            <Button
              className="btn-edit"
              size="small"
              onClick={() => setVisibleEdit(true)}
            > Edit </Button>
          </Link >
          <EditModal
            userData={{ id, first_name, last_name, email }}
            visible={visibleEdit === id}
            action="Edit"
            handleCancel={() => setVisibleEdit(null)}
            handleOk={() => {
              setVisibleEdit(null);

              getUsersList();
            }}
          />
        </div >
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
        <Link to="/reqres-react/users/create" >
          <Button color="primary" type="primary" onClick={() => setVisibleCreate(true)}>+ Add User</Button>
        </Link>
      </div>

      <Table columns={columns} dataSource={getDataSource()} pagination={{ pageSize: 20 }} />

      {/* modals */}
      <CreateModal
        title="Create User"
        visible={visibleCreate}
        handleCancel={() => setVisibleCreate(false)}
        handleOk={() => {
          setVisibleCreate(false);

          getUsersList();
        }} />
    </Container>

  );
}

export default Index;
