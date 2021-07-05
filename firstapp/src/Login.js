import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="Loginform">
        <section className="section container">
          <div className="columns is-centered">
            <div className="column is-half">
              <form>
                <h1 className="login_header">Login</h1>
                <br />
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="email" name="email" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" name="password" />
                  </div>
                </div>
                <div className="login_header">
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                      <button className="button is-text">Cancel</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
