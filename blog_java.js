//------ function comment pop up
function open_comment_pop() {
  document.getElementById("comment_pop").style.display = "block";
}

function toggle_comment() {
  document.getElementById("comment_pop").style.display = "none";
}

//------ function Login
function open_log_pop() {
  document.getElementById("log_wind").style.display = "block";
 
}

function togglepopup() {
  document.getElementById("log_wind").style.display = "none";
}

//-----Add function


// ----function for comparing user entrance with class we have already of useradmin
const userAdmin = {
  username: "kenza",
  password: "simplon"
};

function login_test() {
  let username = document.getElementById("userAdmin").value;
  let password = document.getElementById("keyAdmin").value;
  // let button = document.getElementById("login_btn");
  
    // group inputs on object
  var userInput = {
    username: username,
    keyAdmin: password
  };
    //  test the two object 
  if (userInput.username === userAdmin.username && userInput.keyAdmin === userAdmin.password) {
    confirm("Welcome kenza to your blog, you're connected");
    // document.querySelector('#login_btn').textContent = 'Hide';
       
  } else {
    confirm("Something went wrong, please review your input");
  }
}



//----function comment
let data=''; 
function myFunction()
{
 
  let name = document.getElementById("username").value;
  let email = document.getElementById("e-mail").value;
  let comment = document.getElementById("comment").value;        
  var data = {
    username: name,
    Email:email,
    Comment: comment
  }; 
  
  document.getElementById("dataUser").innerHTML =data.username;
  document.getElementById("dataMail").innerHTML =data.Email;
  document.getElementById("dataComment").innerHTML =data.Comment;
  document.getElementById("comment_pop").style.display = "none";
}// i should add append method














// ----function like counter ------
function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
} 





// document.getElementById("loginForm").addEventListener("submit", function(event) {
//   event.preventDefault();
// });

