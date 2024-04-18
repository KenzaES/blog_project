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
 
function myFunction() {
  let name = document.getElementById("username").value;
  let email = document.getElementById("e-mail").value;
  let comment = document.getElementById("comment").value; 
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();       
  
  let newCommentHTML = `
    <div class="container_comment" style="margin-top: 20px;overflow: hidden; text-overflow: ellipsis ;background-color: #eb8f15">
      <div class="image_user">
        <img src="image/signIn_innactive.svg">
        <div class="user_data">
          <p>${name}</p>
          <p>${email}</p>
        </div>
      </div>
      <div class="comment_details" style="margin-top: 20px;" >
        <p><i class="fa fa-clock-o"></i> ${time}</p>
        <p><i class="fa fa-calendar"></i> ${date}</p>
      </div>
      <div class="comment_body">
        <p>${comment}</p>
      </div>
      
    </div>
  `;

    // Append new comment to old ones
    let commentsContainer = document.getElementById("coment_post");
    commentsContainer.innerHTML = newCommentHTML + commentsContainer.innerHTML;
  
    // Store comment in localStorage to keep our comment 
    let commentsData = JSON.parse(localStorage.getItem("comments")) || [];
    commentsData.unshift({ name, email, comment, time, date, html: newCommentHTML });
    localStorage.setItem("comments", JSON.stringify(commentsData));
  
    // Clear input fields and hide comment popup
    document.getElementById("username").value = "";
    document.getElementById("e-mail").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("comment_pop").style.display = "none";
  }
  
  // Load comments from localStorage when the page loads
  window.addEventListener("load", function() {
    let commentsData = JSON.parse(localStorage.getItem("comments")) || [];
    let commentsHTML = '';
    commentsData.forEach(comment => {
      commentsHTML += comment.html;
    });
    document.getElementById("coment_post").innerHTML = commentsHTML;
  });
  


  document.getElementById("username").value = "";
  document.getElementById("e-mail").value = "";
  document.getElementById("comment").value = "";
  document.getElementById("comment_pop").style.display = "none";
}



// // generate date
// const date = new Date();
// document.getElementById("date_publish").innerHTML = date.getHours();


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

