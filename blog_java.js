// Function to update the position of the popup
function updatePopupPosition() {
  const popup = document.getElementById('popAdd');
  const scrollY = window.scrollY || window.pageYOffset;
  
  // Adjust the position of the popup based on scroll position
  popup.style.top = `${scrollY}px`;
}

// Update popup position when the page is scrolled
window.addEventListener('scroll', updatePopupPosition);
// ---------------------------------------------------------------------------------------------
// ---------------------------------------Add function------------------------------------------
// Function to open the pop-up and get the ID of the button
function open_add_pop(element) {
  document.getElementById("popAdd").style.display = "block"; // Open the pop-up

  const idDuBouton = element.parentNode.id; // Get the ID of the button
  console.log("ID du bouton : " + idDuBouton);

  // Handle different button cases with a switch statement
  switch (idDuBouton) {
    case "Cuis_add":
      console.log("Cuis_add button.");
      createPost("cuisine");
      break;
    case "Fash_add":
      console.log("Fash_add button.");
      createPost("fashion");
      break;
    case "Art_add":
      console.log("Art_add button.");
      createPost("art");
      break;
    default:
      console.log("Unknown button ID.");
      break;
  }
}
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  createPost(); // Add your custom code here
}
// Function to create a new post
function createPost(section) {
  const title_post = document.getElementById("titleID").value;
  const image_post = document.getElementById("photo").value;
  const content_post = document.getElementById("ContentPost").value;
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  const postId = Date.now();

  const newPostHTML = `
   <article class="new_post" data-post-id="${postId}>
    <h3> ${title_post} </h3>
    <p>${content_post}</p>
    <img  class="new_post_${section}" src="${image_post}" alt="New_post">
    <div class="time_posted" >
      <p><i class="fa fa-clock-o"></i> ${time}</p>
      <p><i class="fa fa-calendar"></i> ${date}</p>
    </div>
    <a class="button_read" href="#">Read more</a>
    <a class="button_read" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
    <a class="button_read delete_btn" href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
   </article>
  `;

  const postContainer = document.getElementById("New_post");
  postContainer.insertAdjacentHTML("afterbegin", newPostHTML); // Insert new post at the beginning

  // Store the post in localStorage
  let postsData = JSON.parse(localStorage.getItem("posts")) || [];
  postsData.unshift({ title_post, content_post, image_post, time, date, html: newPostHTML });
  localStorage.setItem("posts", JSON.stringify(postsData));

  // Clear input fields and hide the pop-up
  document.getElementById("titleID").value = "";
  document.getElementById("ContentPost").value = "";
  document.getElementById("photo").value = "";
  document.getElementById("popAdd").style.display = "none";
}

// Event listener to load posts from localStorage when the page loads
window.addEventListener("load", function () {
  const postsData = JSON.parse(localStorage.getItem("posts")) || [];
  let postsHTML = "";
  postsData.forEach((post) => {
    postsHTML += post.html;
  });
  document.getElementById("New_post").innerHTML = postsHTML;
  
  // Loop through each .new_post and set display based on content
  document.querySelectorAll(".new_post").forEach((post) => {
    // Check if the post has non-empty content
    const postContent = post.querySelector("p").textContent.trim(); // or select any other tag within article
    if (postContent === "") {
      // If content is empty, hide the post
      post.style.display = "none";
    } else {
      // If content is not empty, display the post
      post.style.display = "block";
    }
  });
});


function toggle_Add() {
  document.getElementById('popAdd').style.display = 'none';
}

// ------------------Delete-----------------------
document.addEventListener("click", function (event) {
  if (event.target.closest(".delete_btn")) {  // If the click is on a delete button
    alert("your post will be deleted")
    const postElement = event.target.closest(".new_post");  // Get the parent post
    const postId = postElement.getAttribute("data-post-id");  // Get the post ID

    // Remove the post from the DOM
    postElement.remove();

    // Update localStorage to remove the post
    let postsData = JSON.parse(localStorage.getItem("posts")) || [];
    postsData = postsData.filter((post) => post.id !== postId);
    localStorage.setItem("posts", JSON.stringify(postsData));
  }
});

//------------search function--------
document.addEventListener("click", search_treat);

function search_treat() {
  let inputFind = document.getElementById("search-input").value.toLowerCase(); 
  const articleTitles = document.querySelectorAll("#title_search");

  articleTitles.forEach(title => {
    const titleText = title.textContent.toLowerCase();
    let WordFind = new RegExp(inputFind, 'g');
    let result = WordFind.test(titleText);
    if (result) {
      document.getElementById("Result").innerHTML = titleText;
    } else {
      document.getElementById("Result").innerHTML = "false";
    }
  });
}






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



// ----function for comparing user entrance with class we have already of useradmin------------
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



//-------------------function comment-----------------------
function myFunction() {
  let name = document.getElementById("username").value;
  let email = document.getElementById("e-mail").value;
  let comment = document.getElementById("comment").value; 
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();       
  
  let newCommentHTML = `
    <div class="container_comment" style="margin-top: 20px; overflow: hidden; text-overflow: ellipsis; background-color: #eb8f15;">
      <div class="image_user">
        <img src="image/signIn_innactive.svg">
        <div class="user_data">
          <p>${name}</p>
          <p>${email}</p>
        </div>
      </div>
      <div class="comment_details" style="margin-top: 20px;">
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


//-------------------Delete function--------------------------
const articleStructure = {
  title: 'h3',
  content: 'p'
};

function deleteArticle(event) {
  event.preventDefault(); // Prevent default behavior
  let articleToDelete = event.target.closest('article');
  if (articleToDelete) {
    for (let key in articleStructure) {
      let elementToDelete = articleToDelete.querySelector(articleStructure[key]);
      if (elementToDelete) {
        elementToDelete.remove();
      }
    }
    // Remove the article itself
    articleToDelete.remove();
  }
}

let deleteButtons = document.querySelectorAll(".delete_btn");

deleteButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    deleteArticle(event);
  });
});







//-------------------Add function--------------------------
function AddPost(){
element.addEventListener('click')


}