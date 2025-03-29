import {useLocation} from 'react-router-dom'
import useAuth from "../auth/useAuth"
const useCredentials ={}
export default function LoginPage() {
    const location =useLocation();
    const {login} = useAuth();
    
    return (
        <div>
            <h1>Login</h1>
            <button onClick={()=> login(useCredentials,location.state?.from)}> Iniciar Sesion</button>
       </div>
    )
}