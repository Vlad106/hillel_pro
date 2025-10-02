'use strict';

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.7) {
                resolve({ id: userId, name: `User ${userId}` });
            } else {
                reject(new Error(`Failed to fetch user ${userId}`));
            }
        }, 500);
    });
}

function getUsersData(userIds) {
    const promises = userIds.map(id => fetchUserData(id));

    return Promise.allSettled(promises).then(results => {
        const success = [];
        const errors = [];

        results.forEach(result => {
            if (result.status === "fulfilled") {
                success.push(result.value);
            } else {
                errors.push(result.reason.message);
            }
        });

        return { success, errors };
    });
}


const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds).then(result => {
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
});
