import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    emailId:"",
  })
  const [submit , setSubmit] = useState(false)
  const [valid , setValid] = useState(false)

  const handleFisrtName =(event)=>{
    setValues({...values, firstName:event.target.value})
  }
  const handleLasttName =(event)=>{
    setValues({...values, lastName:event.target.value})
  }
  const handleEmail =(event)=>{
    setValues({...values, emailId:event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setSubmit(true);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" placeholder="First Name" value={values.firstName} onChange={handleFisrtName}/><br/><br/>
      {submit && !values.firstName ?  <span style={{"color":"red"}}>Please enter first name</span> : null}<br/><br/>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" placeholder="Last Name" value={values.lastName} onChange={handleLasttName}/><br/><br/>
      {submit && !values.lastName ?  <span style={{"color":"red"}}>Please enter first name</span> : null}<br/><br/>
      <label for="ename">Email:</label>
      <input type="text" id="ename" name="ename" placeholder="Email Id" value={values.emailId} onChange={handleEmail}/><br/><br/>
      {submit && !values.emailId ?  <span style={{"color":"red"}}>Please enter first name</span> : null}<br/><br/>
      <input type="submit" value="Submit"/>
      {submit && valid ? <div>Form Submitted</div>: null } 
      </form>
    </div>
  );
}

export default App;
