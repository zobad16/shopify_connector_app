import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import { requests } from "../../Requests";
const Login = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error,setError]=useState();
  const [isError,setIsError]=useState(false);
  async function loginUser(credentials) {
    try {
	    console.log(`User: ${credentials.email} | Pass: ${credentials.password}`);
	    const apiResponse = await axiosInstance.post(requests.login,{
	      "email":credentials.email,
	      "password":credentials.password
	    });
	    const jsonResponse = apiResponse.data;
      const {user_name: user, roles, token, firstname, lastname} = jsonResponse;
      let isAuthorized = false;
      roles?.forEach(i =>{
        if(i === 'admin'){
          isAuthorized=true;
        }
      });
      if(isAuthorized){
      console.log(`EMAIL: ${user} | ROLES: ${roles} | TOKEN: ${token} | FIRST: ${firstname} | LAST: ${lastname}`);
	    console.log('Response',jsonResponse);
      console.log('TOKEN::',jsonResponse.token);
      
      localStorage.setItem("user_data", JSON.stringify({user: user,firstname: firstname, lastname: lastname, roles: roles, token:jsonResponse.token  }));
      axiosInstance.defaults.headers.common['x-access-token'] = jsonResponse.token;
      return jsonResponse;
    }
    
    return -2;
    } catch (err) {
        console.log(err.toJSON());
        console.log(err.message);
        return -1;
      }
   
  }
  const handleChange = (e, key) => {
    const value = e.target.value;

    setFormData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  //   console.log(formData);
  const submitHandler = async (e) => {
    e.preventDefault();
    const token = await loginUser(formData);
    if(!token || token === null || token === -1){
      setError('Invalid Username or Password');
      setIsError(true);
    }
    else if(token === -2){
      setError("User not authorized");
      setIsError(true);
    }
    else{navigate("/");}
  };

  return (
    <div className="flex min-h-full items-center justify-center py-40 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={submitHandler}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-lg  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                onChange={(e) => handleChange(e, "email")}
              />
            </div>
            <div className="pt-5">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                onChange={(e) => handleChange(e, "password")}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
        {
          isError
          ? <div className="w-full p-5 rounded-lg border border-red-400 bg-red-300 text-red-900 flex">
              <span className="mr-2">
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"> 
                <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>            
              </span>
              {error}                
            </div> 
          :false
        }
          
      </div>   
      
    </div>
    
  );
};

export default Login;
