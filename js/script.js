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

async function getUsersData(userIds) {
    const promises = userIds.map(id => fetchUserData(id));

    const results = await Promise.allSettled(promises);

    const success = [];
    const errors = [];

    for (const result of results) {
        if (result.status === "fulfilled") {
            success.push(result.value);
        } else {
            errors.push(result.reason.message);
        }
    }

    return { success, errors };
}


(async () => {
    const userIds = [1, 2, 3, 4, 5];
    const result = await getUsersData(userIds);

    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
})();
