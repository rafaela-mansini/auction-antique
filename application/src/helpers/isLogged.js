const isLogged = () => {
  const localStorageUser = localStorage.getItem('@auction/user');

  if(localStorageUser){
    return true;
  }
  else{
    return false;
  }
}

export default isLogged
