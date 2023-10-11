import React from 'react'
function a(){
    var x=document.getElementById("a").value;
    var y=document.getElementById("b").value;
    var z=/^[2][1][Aa][8][1][Aa][6][1][0-9][0-9]+$/;
    var u=/^[a-zA-Z0-9@.!#$%^&*;:/]+$/;
    if(z.text(x)===z.test(y))
     document.getElementById("c").innerHTML="Successfully Logined";
    else 
     document.getElementById("c").innerHTML="Invalid username or password";
}
function Login(){
    return(
        <div className='11'>
        <div className="a">
           <center>
               <fieldset>
                   <h2>Login Page</h2>
                   <label className="b">UserName:</label>
                   <input className='box' id='a' type="text" placeholder='name' /><br>
                   <label className="b">Password:</label>
                   <input className='box' id='b' type="text" placeholder='password' /><br>
                   <p></p>
                   <button className='box' type='submit'><i class="A" onClick={a}>Login</i></button>
                   <p id="c" className='B'></p>
                </fieldset>
           </center>
        </div>
        </div>
    );
}
export default Login