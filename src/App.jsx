import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardPage from './Pages/DashBoard'
import LoginPage from './Pages/Loginpage'
import RegisterPage from './Pages/RegisterPage'
import ForgotPage from './Pages/ForgetPage'
import ResetPage from './Pages/ResetPage'
import ActivationPage from './Pages/Activatepage'
import CreateTasksPage from './Pages/createTasksPage'
import TasksPage from './Pages/TasksPage'
import CompletedTasksPage from './Pages/completedTasksPage'
import PendingTasksPage from './Pages/pendingTasksPage'

function App() {

  return (
    
    //Routes and Route is imported from react router dom to navigate between pages
    <Routes>
      <Route exact path='/' element={<DashboardPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/forgot' element={<ForgotPage/>}/>
      <Route path='/reset/:id' element={<ResetPage/>}/>
      <Route path='/createTasks' element={<CreateTasksPage/>}/>
      <Route path='/allTasks' element={<TasksPage/>}/>
      <Route path='/completedTasks' element={<CompletedTasksPage/>}/>
      <Route path='/pendingTasks' element={<PendingTasksPage/>}/>
      <Route path='/activation/:id' element={<ActivationPage/>}/>
    </Routes>
  )
}

export default App