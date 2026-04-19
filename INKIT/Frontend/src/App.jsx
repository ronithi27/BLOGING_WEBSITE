import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar.component';
import UserAuthFormPage from './pages/userAuthForm.page';

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route path='/signin' element={<UserAuthFormPage type='sign-in'/>}/>
                <Route path='/signup' element={<UserAuthFormPage type='sign-up'/>}/>
            </Route>
        </Routes>
    )
}

export default App;