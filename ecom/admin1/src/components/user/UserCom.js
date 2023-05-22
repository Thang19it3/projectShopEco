import React , { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listUser } from './../../Redux/Actions/UserAction';
import './../../css/userCom.css';

const UserCom = () => {

    const dispatch = useDispatch();

    const userList =  useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    useEffect(() => {
        dispatch(listUser());
    },[dispatch]);


  return (
    <>
      <div className='card-body col-12'>
            <div className='row'>
                {
                    users && users.map((users) => {
                        return (
                        <div className='col-3' key={users.id}>
                            <div className='card card-user shadow-sm'>
                                <div className='card-header'>
                                    <img src={users.avatar} alt={users.name} className='img-md img-avatar' />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title mt-5'>{users.name}</h5>
                                    <div className='card-text text-muted'>
                                        {
                                            users.isAdmin === true ? (<p className='m-0'>Admin</p>) : (<p className='m-0'>User</p>)
                                        }
                                        <p>
                                            <a>{users.email}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default UserCom
