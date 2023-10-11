import React from 'react'
import './Content.css';
function Content(){
  return(
    <div>
      <h1 align="center"> Student Registration form</h1>
      <form>
      <table align="center" width="300" height="150">
          <tr>
            <td><label>Enter Name:</label></td>
            <td><input type="text" placeholder="Enter your name" id="i1" name="i1"></input></td>
          </tr>
          <tr>
            <td><label>Enter RegNo</label></td>
            <td><input type="text" placeholder="Enter your regno" id="i2" name="i2"></input></td>
          </tr>
          <tr>
            <td><label>Branch</label></td>
            <td>
              <select>
                <option value="aim">AIM</option>
                <option value="cai">CAI</option>
                <option value="cse">CSE</option>
                <option value="ece">ECE</option>
                <option value="civil">CIVIL</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><button type="submit"><a href="http://127.0.0.1:5500/first-react-app/src/JS/Sam.html">Submit</a></button></td>
          </tr>
        </table>
      </form> 
  </div>
  );
}

export default Content;