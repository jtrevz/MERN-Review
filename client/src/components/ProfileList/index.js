import React from 'react';

const ProfileList = ({ classes, title }) => {
  if (!classes.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {classes &&
          classes.map((oneClass) => (
            <div key={oneClass._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {oneClass.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    {oneClass.building ? oneClass.building : 0}{' '}
                  </span>
                  
                </h4>

              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
