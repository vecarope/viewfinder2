import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const DefaultLayout = React.lazy(()=> import('./layout/DefaultLayout'));
const HomePage = React.lazy(() => import ('./views/Home')); 
const ProfilePage = React.lazy(()=> import('./views/Profile'))

function App() {

return (
    <Suspense>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </Suspense>
  
  )
}

export default App;
