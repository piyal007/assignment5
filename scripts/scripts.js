// Change Background Color
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener('click', function () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = 0.2;
    const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    document.getElementById("body").style.backgroundColor = rgba;
});

// Go to blog.html
const activityBoard = document.getElementById("activity-board");
activityBoard.addEventListener("click", function () {
    window.location.href = "blog.html";
})

// Calendar
const now = new Date();
const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
const month = now.toLocaleDateString("en-US", { month: "long" });
const day = now.getDate();
const year = now.getFullYear();
const calendarElemnt = document.createElement("p");
calendarElemnt.className = "text-sm";
calendarElemnt.innerHTML = `${weekday} ,<br><span class="font-bold">${month} ${day} ${year}</span>`;
const calendarDiv = document.getElementById("calender");
calendarDiv.appendChild(calendarElemnt);

// Button Functionality
const cardButtons = document.querySelectorAll(".card-btn");
for (const button of cardButtons) {
    button.addEventListener("click", function (event) {
        alert("Board Updated Successfully");
        const btnClicked = event.target;
        btnClicked.classList.add("btn-disabled");
        btnClicked.disabled = true;

        // Completed tasks
        const completedTasks = document.getElementById("completed-tasks");
        completedTasks.innerText = parseInt(completedTasks.innerText) + 1;

        // Activity Logs
        const cardTitle = btnClicked.closest(".card").querySelector(".card-title").innerText;
        const currentTime = new Date().toLocaleTimeString();
        const taskLog = document.createElement("p");
        taskLog.className = "p-4 text-sm";
        taskLog.innerHTML = `You have completed the task <span id="taskName" class="font-semibold">${cardTitle}</span> at <span id="time" class="font-semibold">${currentTime}</span>`;
        const activityLogs = document.getElementById("activity-logs");
        activityLogs.appendChild(taskLog);

        // Assigned Tasks
        const assignedTasks = document.getElementById("assigned-tasks");
        const currentTasks = parseInt(assignedTasks.innerText) - 1;
        assignedTasks.innerText = currentTasks;
        if (currentTasks == 0) {
            alert("Congrates!!! You have completed all the current task");
        }

    });
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
    document.getElementById("activity-logs").innerHTML = "";
})