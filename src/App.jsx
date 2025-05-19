import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { deleteUser } from './app/feature/userSlice';



function App() {

        const userList= useSelector(state=>state.user.users);
        const dispatch=useDispatch()
        

  return (
     
    <div className="mt-4 mx-auto">
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>Id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Age</td>
              <td colSpan="2" className='text-center'>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              userList?.map((user,index)=>(
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                   <td><button onClick={()=>dispatch(deleteUser(user.id))} className='btn btn-danger'>Delete</button></td>
                  <td><button className='btn btn-success'>Update</button></td>
                 
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default App
