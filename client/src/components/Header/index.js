import React from 'react';

const Header = () => {
  

  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        {/* <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Tech Friends
          </h1>
        </Link> */}
        <h1 className="text-dark">School Directory</h1>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Look up all class information
        </p>
        <div>
{/*           
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
