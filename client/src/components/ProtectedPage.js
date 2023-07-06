import { message } from 'antd';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { GetLoggedInUser } from '../apicalls/users';


function ProtectedPage({children}) {
    const navigate = useNavigate();
    const [user,setUser]= useState(null);

    const getUser = async () => {
        try {
        //   dispatch(SetLoading(true));
          const response = await GetLoggedInUser();
        //   dispatch(SetLoading(false));
          if (response.success) {
            // dispatch(SetUser(response.data));
            // screenTopetUser(response.data);
            setUser(response.data);
          } else {
            throw new Error(response.message);
          }
        } catch (error) {
        //   dispatch(SetLoading(false));
          message.error(error.message);
          localStorage.removeItem("token");
          navigate("/login");
        }
      };

      useEffect(() => {
        if (localStorage.getItem("token")) {
          getUser();
        } else {
          navigate("/login");
        }
      }, []);
  return (
    <div>
        <h1>Protected Page</h1>
        <h1>
            Welcome {user?.firstName}{user?.lastName}
        </h1>
        {children}
    </div>
  )
}

export default ProtectedPage