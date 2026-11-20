function formatTaskNotification(task) {

    return {
        subject: "New Task Assigned - MeetFlow AI",

        message: `
Hello ${task.assigned_to || "Team Member"},

A new task has been assigned to you.

Task: ${task.title}

Meeting: ${task.meeting_title || "Meeting"}

Deadline: ${task.deadline || "Not specified"}

Please complete your task before the deadline.

Regards,
MeetFlow AI Team
        `.trim()
    };
}

module.exports = formatTaskNotification;