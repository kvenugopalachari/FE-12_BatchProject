// ========================================
// JOBTRACK - COMMON JAVASCRIPT
// ========================================


// ----------------------------------------
// GET LOGGED-IN USER
// ----------------------------------------

function getLoggedInUser() {

    return JSON.parse(
        localStorage.getItem("loggedInUser")
    );

}


// ----------------------------------------
// LOGOUT
// ----------------------------------------

function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "index.html";

}


// ----------------------------------------
// REQUIRE LOGIN
// ----------------------------------------

function requireLogin() {

    const user = getLoggedInUser();

    if (!user) {

        window.location.href = "index.html";

        return false;

    }

    return true;

}


// ----------------------------------------
// GET USER APPLICATIONS
// ----------------------------------------

function getUserApplications() {

    const user = getLoggedInUser();

    const applications =
        JSON.parse(
            localStorage.getItem("applications")
        ) || [];


    if (!user) {

        return [];

    }


    return applications.filter(
        application =>
            application.userEmail === user.email
    );

}


// ----------------------------------------
// GET USER INTERVIEWS
// ----------------------------------------

function getUserInterviews() {

    const user = getLoggedInUser();

    const interviews =
        JSON.parse(
            localStorage.getItem("interviews")
        ) || [];


    if (!user) {

        return [];

    }


    return interviews.filter(
        interview =>
            interview.userEmail === user.email
    );

}


// ----------------------------------------
// GET USER REMINDERS
// ----------------------------------------

function getUserReminders() {

    const user = getLoggedInUser();

    const reminders =
        JSON.parse(
            localStorage.getItem("reminders")
        ) || [];


    if (!user) {

        return [];

    }


    return reminders.filter(
        reminder =>
            reminder.userEmail === user.email
    );

}


// ----------------------------------------
// LOAD USER MODULE
// ----------------------------------------

function loadUserModule() {

    const user = getLoggedInUser();


    if (!user) {

        window.location.href = "index.html";

        return;

    }


    if (user.role !== "user") {

        window.location.href =
            "admin-dashboard.html";

        return;

    }


    const applications =
        getUserApplications();

    const interviews =
        getUserInterviews();

    const reminders =
        getUserReminders();


    const userName =
        document.getElementById("userName");


    if (userName) {

        userName.textContent =
            user.name;

    }


    const profileName =
        document.getElementById("profileName");


    if (profileName) {

        profileName.textContent =
            user.name;

    }


    const profileEmail =
        document.getElementById("profileEmail");


    if (profileEmail) {

        profileEmail.textContent =
            user.email;

    }


    const profileRole =
        document.getElementById("profileRole");


    if (profileRole) {

        profileRole.textContent =
            user.role;

    }


    const totalApplications =
        document.getElementById(
            "totalApplications"
        );


    if (totalApplications) {

        totalApplications.textContent =
            applications.length;

    }


    const totalInterviews =
        document.getElementById(
            "totalInterviews"
        );


    if (totalInterviews) {

        totalInterviews.textContent =
            interviews.length;

    }


    const totalReminders =
        document.getElementById(
            "totalReminders"
        );


    if (totalReminders) {

        totalReminders.textContent =
            reminders.length;

    }

}


// ----------------------------------------
// LOAD DASHBOARD
// ----------------------------------------

function loadDashboard() {

    const user = getLoggedInUser();


    if (!user) {

        window.location.href = "index.html";

        return;

    }


    const applications =
        getUserApplications();

    const interviews =
        getUserInterviews();

    const reminders =
        getUserReminders();


    const total =
        document.getElementById(
            "dashboardApplications"
        );


    if (total) {

        total.textContent =
            applications.length;

    }


    const applied =
        applications.filter(
            app => app.status === "Applied"
        ).length;


    const appliedElement =
        document.getElementById(
            "appliedCount"
        );


    if (appliedElement) {

        appliedElement.textContent =
            applied;

    }


    const interviewElement =
        document.getElementById(
            "dashboardInterviews"
        );


    if (interviewElement) {

        interviewElement.textContent =
            interviews.length;

    }


    const reminderElement =
        document.getElementById(
            "dashboardReminders"
        );


    if (reminderElement) {

        reminderElement.textContent =
            reminders.length;

    }

}


// ----------------------------------------
// PAGE INITIALIZATION
// ----------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function() {

        if (
            document.getElementById("userName")
        ) {

            loadUserModule();

        }


        if (
            document.getElementById(
                "dashboardApplications"
            )
        ) {

            loadDashboard();

        }

    }
);