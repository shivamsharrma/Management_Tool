import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
  const { user } = useSelector((state) => state.users);
  return (
    <div>
      heyy {user?.firstName}{user?.lastName}, Welcome.
    </div>
  )
}

export default Home