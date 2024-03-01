import axios from "axios";


const useAuth = () => {
  const authApi= (url,data) => {
    axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err=>console.log(err))
  }
  return authApi;
}

export default useAuth;