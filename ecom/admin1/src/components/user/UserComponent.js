import React , { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listUser } from './../../Redux/Actions/UserAction';

const UserComponent = () => {

    const dispatch = useDispatch();

    const userList =  useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    useEffect(() => {
        dispatch(listUser());
    },[dispatch])
  return (
    <section className='content-main'>
      <div className='content-header'>
        <h2 className='content-title'>Khách Hàng</h2>
        <div>

        </div>
      </div>
      <div className='card mb-4'>
        <header className='card-header'>
            <div className='row gx-3'>
                <div className='col-lg-4 col-md-6 me-auto'>
                    <input type="text" placeholder='search'/>
                </div>
            </div>
        </header>
        <div className='card-body'>
            <div className='row row-cols-1 row-cols-2'>
                { users.map((user) => (
                    <div className='col'  key={user._id}>
                        <div className='card card-user shadow-sm'>
                            <div className='card-header'>
                                <img src={user.avatar} />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title mt-5'>{user.name}</h5>
                                <div className='card-text text-muted'>
                                    {
                                        user.isAdmin === true ? (<p className='m-0'>Admin</p>) : (<p className='m-0'>Khach Hang</p>)
                                    }
                                    <p>
                                        <a>{user.email}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default UserComponent
