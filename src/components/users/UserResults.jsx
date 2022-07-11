import React,{useEffect,useContext} from 'react'
import Spinner from '../shared/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext'
const UserResults = () => {
  const {users, loading, fetchUserResults}=useContext(GithubContext);

  useEffect(()=>{
      fetchUserResults();
  },[])

  
  if(!loading){
      return (
        <div className=' grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user)=>(
            <UserItem key={user.id} user={user}/>
          ))}
        </div>
      )
  }else{
    return(
      <Spinner/>
    )
  }

}

export default UserResults