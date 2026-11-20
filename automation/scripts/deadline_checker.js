function checkDeadline(deadline) {

    const currentDate = new Date();
    const dueDate = new Date(deadline);

    if (Number.isNaN(dueDate.getTime())) {
        return "invalid";
    }

    if (dueDate < currentDate) {
        return "overdue";
    }

    const difference = dueDate - currentDate;

    const hours = difference / (1000 * 60 * 60);

    if (hours <= 24) {
        return "upcoming";
    }

    return "normal";
}

module.exports = checkDeadline;