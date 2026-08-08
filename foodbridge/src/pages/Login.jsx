import "../styles/auth.css";


function Login(){

  return(

    <div className="auth-page">


      <div className="auth-card">


        <div className="auth-logo">
          FoodBridge 🌱
        </div>


        <h1>
          Welcome Back!
        </h1>


        <p className="auth-subtitle">
          Login to continue helping reduce food waste.
        </p>


        <form>


          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>



          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
            />

          </div>



          <button className="auth-btn">

            Login

          </button>


        </form>


        <p className="auth-footer">

          Don't have an account?

          <span>
            Register
          </span>

        </p>


      </div>


    </div>

  )

}


export default Login;