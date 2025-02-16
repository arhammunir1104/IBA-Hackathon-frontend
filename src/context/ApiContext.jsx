import { createContext, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export const apiContext = createContext();

export default function ApiContext({children}) {
    // const server = "https://iba-hackathon-backend-gamma.vercel.app";
    const server = "http://localhost:2000";
        const [token, setToken] = useState(Cookies.get("token") ? Cookies.get("token") : false);
       
        const signupUser = async ({name,email, password, registerType}) =>{
            try{

                 const response = await fetch(server +'/api/user/register', {
                                 method: 'POST',
                                 headers: { 'Content-Type': 'application/json' },
                                 body: JSON.stringify({ name, email, password, registerType })
                             });

                             const result = await response.json();
                             if(result.status === "success"){
                             Cookies.set("token", result?.token, { secure: true, sameSite: 'None',expires: 30 });
                             setToken(result?.token,)
                             }
                             return(result);
            }
            catch(e){
                return(e);
            }
        };

         const loginUser = async ({email, password, loginType}) =>{
                try{

                     const response = await fetch(server + '/api/user/login', {
                                    method: 'POST',
                                    headers: { 
                                        'Content-Type': 'application/json',
                                     },
                                    body: JSON.stringify({ email, password, loginType})
                                });
                                const result = await response.json();
                                if(result.status === "success"){
                                    Cookies.set("token", result?.token, { secure: true, sameSite: 'None',expires: 30 });
                                    setToken(result?.token,)
                                    }
                                return(result);
                                
                }
                catch(e){
                    return(e);
                }
            };

    return (
        <apiContext.Provider value={{
            server,
            loginUser,
            token, 
            setToken,
            signupUser
            }}>
            {children}
        </apiContext.Provider> 
    )
}