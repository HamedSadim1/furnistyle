import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER } from "../../types";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

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
    setTimeout(() => {
      setUser({ name, email });
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <section className="section login-page">
      <div className="login-card">
        <div className="login-card-header">
          <div className="login-avatar">
            <FaUser />
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to access your personalized dashboard.</p>
        </div>

        <form className="login-form-modern" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="name">
              <FaUser /> Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="email">
              <FaEnvelope /> Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-hero-primary login-submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading" style={{ width: "1.25rem", height: "1.25rem", borderWidth: "2px" }}></div>
                Signing In...
              </>
            ) : (
              <>
                <FaLock /> Sign In <FaArrowRight />
              </>
            )}
          </button>
        </form>

        <div className="login-card-footer">
          <div className="login-demo-info">
            <FaShieldAlt />
            <span>Demo mode — enter any name and email to sign in</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
