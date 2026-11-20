function validateMeetingPayload(data) {
    const errors = [];

    if (!data.meeting_id) {
        errors.push("Meeting ID is missing");
    }

    if (!data.title) {
        errors.push("Meeting title is missing");
    }

    if (!data.status) {
        errors.push("Meeting status is missing");
    }

    if (!Array.isArray(data.tasks)) {
        errors.push("Tasks must be an array");
    }

    return {
        success: errors.length === 0,
        errors: errors
    };
}

module.exports = validateMeetingPayload;