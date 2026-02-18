// 1) DOM Selection (Using querySelector)//
// Select input field
let input = document.querySelector("input");

// Select Add button
let button = document.querySelector("button");

// Select ordered list where tasks will be added
let list = document.querySelector("ol");

// 2) Event Handling (Button Click)//

button.addEventListener("click", function(){

    // Get text entered by user and remove extra spaces
    let taskText = input.value.trim();

    // If input is empty, stop function
    if(taskText === "") return;

   // 3) Dynamic Element Creation//

    // Create <li> element dynamically
    let li = document.createElement("li");

    // Add user text inside the list item
    li.innerText = taskText;

    // Add class to apply CSS styling
    li.setAttribute("class","task-item");

    // Apply inline style using style.property
    li.style.listStyle = "decimal";

 // REMOVE TASK WHEN CLICKED
 // When user clicks the task, remove it
    li.addEventListener("click", function(){
        li.remove();
    });

  // 4) Append the <li> to <ol>//
    list.append(li);

  // 5) Clear input field after adding task//
   input.value = "";
});