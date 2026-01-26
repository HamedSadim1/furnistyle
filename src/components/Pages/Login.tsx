import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER } from "../../types";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

interface LoginProps {
  setUser: (user: USER) => void;
}

const Login = ({ setUser }: LoginProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setUser({ name: name, email: email });
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <section className="section">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please sign in to your account</p>
        </div>

        <form className="form login-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              <FaUser /> Full Name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email" className="form-label">
              <FaEnvelope /> Email Address
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="loading"></div>
                Signing In...
              </>
            ) : (
              <>
                <FaLock /> Sign In
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <span className="demo-text">
              This is a demo - enter any name and email!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
