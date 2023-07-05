import React from 'react';

import ProfileList from '../components/ProfileList';

const Home = () => {
  let classes = [{
    "_id": "64a5d9a7c7be644cd28e1d8c",
    "name": "Foundations of Data Science",
    "building": "CHEM",
    "creditHours": 3,
    "professor": {
      "name": "Rebecca Watts"
    }
  },
  {
    "_id": "64a5d9a7c7be644cd28e1d8d",
    "name": "Introduction to Computational Thinking",
    "building": "LS",
    "creditHours": 3,
    "professor": {
      "name": "Alberto Harrison"
    }
  },
  {
    "_id": "64a5d9a7c7be644cd28e1d8e",
    "name": "C for Programmers",
    "building": "SCI",
    "creditHours": 4,
    "professor": {
      "name": "Rebecca Watts"
    }
  },
  {
    "_id": "64a5d9a7c7be644cd28e1d8f",
    "name": "C++ for Programmers",
    "building": "SCI",
    "creditHours": 4,
    "professor": {
      "name": "Colleen Moore"
    }
  },
  {
    "_id": "64a5d9a7c7be644cd28e1d90",
    "name": "Discrete Mathematics",
    "building": "SCI",
    "creditHours": 3,
    "professor": {
      "name": "Virgil Parker"
    }
  },
  {
    "_id": "64a5d9a7c7be644cd28e1d91",
    "name": "Computer Architecture and Engineering",
    "building": "SCI",
    "creditHours": 3,
    "professor": {
      "name": "Virgil Parker"
    }
  },
  {
    "_id": "64a5d9a7c7be644cd28e1d92",
    "name": "User Interface Design",
    "building": "HH",
    "creditHours": 4,
    "professor": {
      "name": "Rebecca Watts"
    }
  },
  {
    "_id": "64a5d9a7c7be644cd28e1d93",
    "name": "Computer Security",
    "building": "JH",
    "creditHours": 3,
    "professor": {
      "name": "Rebecca Watts"
    }
  },
  {
    "_id": "64a5d9a7c7be644cd28e1d94",
    "name": "Internet Architecture and Protocols",
    "building": "JH",
    "creditHours": 2,
    "professor": {
      "name": "Rebecca Watts"
    }
  },
  {
    "_id": "64a5d9a7c7be644cd28e1d95",
    "name": "Algorithms for Computational Biology",
    "building": "LS",
    "creditHours": 3,
    "professor": {
      "name": "Rebecca Watts"
    }
  }]
  
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
        <ProfileList
              classes={classes}
              title="Here's the current roster of friends..."
            />
        </div>
      </div>
    </main>
  );
};

export default Home;
