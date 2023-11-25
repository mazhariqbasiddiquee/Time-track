let email = document.getElementById("email");
let password = document.getElementById("password");
console.log("Hello")
const onlogin = async () => {
  if (email.value.trim() === "") {
    alert("Please enter your email.");
    return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.value.trim() === "") {
    alert("Please enter your password.");
    return;
  }

  // console.log(obj);
  let obj={
    email:email.value,
    password:password.value
  }
  try {
    let url = "http://localhost:3300/user/login";
    let responce = await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await responce.json();
    console.log("res", res);

    alert(res.message);
    if(res.message==="login successfull"){

     
      window.location.href =
      "http://127.0.0.1:5501/Frontend/project_timer_pages/project.html";

    }
   
    email.value = "";
    password.value = "";
  } catch (error) {
    console.log(error.message);
  }
};
