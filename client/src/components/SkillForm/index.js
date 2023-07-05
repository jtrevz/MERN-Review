import React, { useState } from 'react';

const SkillForm = ({ profileId }) => {
  const [skill, setSkill] = useState('');


  const handleFormSubmit = async (event) => {
    
  };

  return (
    <div className="mx-2">
      <h4>Add Class</h4>
      <form
          className="flex-row justify-start justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12">
            <input
              placeholder="Class Name"
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
          </div>
          <div className="col-6">
            <input
              placeholder="Building"
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
          </div>
          <div className="col-6">
            <input
              placeholder="Credit Hours"
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
          </div>
          <div className="col-6">
            <input
              placeholder="Professor"
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
          </div>
          

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Endorse Skill
            </button>
          </div>
          
        </form>
    </div>
  );
};

export default SkillForm;
