import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserList from "./assets/component/UserList"
import AddUser from "./assets/component/AddUser"
import EditUser from "./assets/component/EditUser"
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="addUser" element={<AddUser />}/>
      <Route path="editUser/:user" element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
