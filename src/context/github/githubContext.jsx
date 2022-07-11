import {createContext, useState} from 'react'

//1. Create the Context
const GithubContext=createContext();

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN
// process.env.REACT_APP_GITHUB_URL
// process.env.REACT_APP_GITHUB_TOKEN
//2. Create the Context Provider
export const GithubContextProvider=({children})=>{
    //2.1 Entity States
    const [users,setUsers]=useState([]);
    const [loading, setLoading]=useState(true);


    //2.2 Entity Functions
    const fetchUserResults=async()=>{
        const response=await fetch(`${GITHUB_URL}/users`,{
          headers:{
              Authorization:`token ${GITHUB_TOKEN}`,
          },
        })
        const data=await response.json();
        setUsers(data);
        setLoading(false)
        console.log(data);
    }
    

    return (
        <GithubContext.Provider
            value={
                {
                    users,
                    loading,
                    fetchUserResults,
                }
            }>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;