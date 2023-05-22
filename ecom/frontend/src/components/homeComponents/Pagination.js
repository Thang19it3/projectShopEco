import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <nav>
        <div className='pagination justify-content-center'>
            <li className={`page-iten active`}>
                <Link className='page-link' to={"#"}>
                    1
                </Link>
            </li>
            <li className={`page-iten active`}>
                <Link className='page-link' to={"#"}>
                    2
                </Link>
            </li>
            <li className={`page-iten active`}>
                <Link className='page-link' to={"#"}>
                    3
                </Link>
            </li>
            <li className={`page-iten active`}>
                <Link className='page-link' to={"#"}>
                    4
                </Link>
            </li>
        </div>
    </nav>
  )
}

export default Pagination
