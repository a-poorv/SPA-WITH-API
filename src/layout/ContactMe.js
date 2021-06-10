import React, { Component } from "react";
import "./CSS/ContactMe.css";
import axios from 'axios';
class ContactMe extends Component{
constructor(props) {
    super(props)
this.state={
Name:"",
Adress:"",
Country:"",
Gender:"",
Phone:"",
Email:"",

}
this.handleSubmit=this.handleSubmit.bind(this)
    
}
Namehandler = (event)=>{
this.setState({
    Name:event.target.value
})
}
Adresshandler=(event)=>{
    this.setState({
Adress:event.target.value 
})
}
Countryhandler=(event)=>{
    this.setState({
        Country:event.target.value
    })
}
Genderhandler=(event)=>{
    this.setState({
    Gender:event.target.value    
    })
}
Phonehandler=(event)=>{
    this.setState({
        Phone:event.target.value
    })
}
Emailhandler=(event)=>{
    this.setState({
        Email:event.target.value
    })
}
handleSubmit = (event) => {
    alert(`${this.state.Name} ${this.state.Adress}  ${this.state.Country}  ${this.state.Gender}  ${this.state.Phone}  ${this.state.Email}  Registered Successfully !!!!`)
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response=>{console.log(response)
    });
    this.setState({
        Name: "",
        Adress: "",
        Country: "",
        Gender: "",
        Phone:"",
        Email:"",
    })
 event.preventDefault()
   
}

render(){
    return(
      <div>
    <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.Name} onChange={this.Namehandler} placeholder="Name..." /><br />
                    <label>Adress :</label> <input type="text" value={this.state.Adress} onChange={this.Adresshandler} placeholder="Adress..." /><br />
                    <label>Country :</label> <select onChange={this.Countryhandler} defaultValue=" Select Country">
                    <option defaultValue>Select Country</option>
                        <option value="India">INDIA</option>
                        <option value="UK">UK</option>
                        <option value="pakistan">PAKISTAN</option>
                        <option value="China">CHINA</option>
                        <option value="srilanka">SRILANKA</option>
                        <option value="Singapore">SINGAPORE</option>
                        <option value="Nepal">NEPAL</option>
                        <option value="Bangladesh">BANGLADESH</option>
                        </select><br/>
                    <label>Gender :</label><select onChange={this.Genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                        </select><br/>
                        <label>Phone:</label> <input type="text" value={this.state.Phone} onChange={this.Phonehandler} placeholder="Phone..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.Email} onChange={this.Emailhandler} placeholder="Email..." /><br />
                    <br/>

                    <input type="submit" value="Submit" />
                    
                </form>





      </div>  
    )
}

}

export default ContactMe;
