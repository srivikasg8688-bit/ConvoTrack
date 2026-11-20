function isDuplicateNotification(
    taskId,
    notificationType,
    logs
) {

    return logs.some(log =>
        log.task_id === taskId &&
        log.notification_type === notificationType &&
        log.status === "sent"
    );
}

module.exports = isDuplicateNotification;