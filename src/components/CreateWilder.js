import React, {useState} from 'react';
import * as API from '../api/wildersApi';
import Skill from "./wilder/Skill";

const INITIAL_WILDER_STATE = {
  name: '',
  city: '',
  skills: []
};

const INITIAL_SKILL_STATE = {
  title: '',
  votes: 0
}

const CreateWilder = ({onWilderCreated}) => {
  const [wilder, setWilder] = useState(INITIAL_WILDER_STATE);
  const [newSkill, setNewSkill] = useState(INITIAL_SKILL_STATE)
  const [error, setError] = useState('');

  const onSubmit = async () => {
    try {
      const newWilder = await API.createWilder(wilder.name, wilder.city, wilder.skills);
      onWilderCreated(newWilder);
      setWilder(INITIAL_WILDER_STATE);
      setError('');
    }
    catch (e) {
      setError(e.response.data.message);
    }
  }

  const setName = (name) => {
    setWilder({
      ...wilder,
      name
    });
  }

  const setCity = (city) => {
    setWilder({
      ...wilder,
      city
    });
  }

  const setNewSkillTitle = (title) => {
    setNewSkill({
      ...newSkill,
      title
    });
  }

  const setNewSkillNotes = (votes) => {
    setNewSkill({
      ...newSkill,
      votes
    });
  }

  const addSkill = (e) => {
    e.preventDefault();
    setWilder({
      ...wilder,
      skills: [
        ...wilder.skills,
        newSkill
      ]
    });
    setNewSkill(INITIAL_SKILL_STATE);
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}>
        <div>
          <label htmlFor="name">Name : </label>
          <input name="name" type="text" value={wilder.name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="name">City : </label>
          <input name="city" type="text" value={wilder.city} onChange={(e) => setCity(e.target.value)}/>
        </div>
        {error}<br/>

        <br/>
        <div>
          <label htmlFor="skillTitle">Skill title : </label>
          <input name="skillTitle" type="text" value={newSkill.title} onChange={(e) => setNewSkillTitle(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="skillNote">Skill note : </label>
          <input name="skillNote" type="number" value={newSkill.votes} onChange={(e) => setNewSkillNotes(e.target.value)}/>
        </div>
        <button onClick={addSkill}>+</button>
        {
          wilder.skills.map((skill) => <Skill key={skill.title} skill={skill}></Skill>)
        }
        <br/>

        <button>Ajouter</button>
      </form>
    </div>
  );
};

export default CreateWilder;