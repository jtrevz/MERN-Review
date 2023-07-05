import React from 'react';

import SkillsList from '../components/SkillsList';
// import SkillForm from '../components/SkillForm';


const Profile = () => {
  

  let oneClass = {
    "_id": "64a5d9a7c7be644cd28e1d8c",
    "name": "Foundations of Data Science",
    "building": "CHEM",
    "creditHours": 3,
    "professor": {
      "name": "Rebecca Watts"
    }
  };
  

  
  return (
    <div>
      <h2 className="card-header">
        {oneClass.name}
      </h2>

      {oneClass.classes?.length > 0 && <SkillsList classes={oneClass.classes} />}

      <div className="my-4 p-4 mx-2" style={{ border: '1px dotted #1a1a1a' }}>
        <h3>Location:{oneClass.building}</h3>
        <h3>Credit Hours:{oneClass.creditHours}</h3>
        <h3>Professor:{oneClass.professor.name}</h3>
      </div>
    </div>
  );
};

export default Profile;
