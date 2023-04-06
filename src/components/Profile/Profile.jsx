import { useAuth0 } from '@auth0/auth0-react';

const Profile = () =>
{

  const { user , isAuthenticated, isLoading } = useAuth0();


  if (isLoading){
    return <div>Cargando sesion...</div>
  }

  return (

    isAuthenticated && (
      <div className='container p-20 '>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className='avatar w-60 p-5 '>
        <img src={user.picture} alt={user.nickname} className='rounded-full '  />
        </div>
      <div className="card-body">
        <h2 className="card-title">{user.name}</h2>
        <p>{user.nickname}</p>
        <p>{user.email}</p>
      </div>
    </div>
    </div>
  )
  )
}

export default Profile 