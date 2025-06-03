'use strict'

const user = {
    name: 'Vladyslav',
    age: 20,
    isOnline: true,
    friends: [`Nick`, `Paulo` , `Misha`],
    settings: {
        theme: `dark`,
        notifications: false,
    }
}
const firstFriendName = user.friends[0]
let notificationsEnabled = user.settings.notifications

console.log( user.name , user.friends.length , user.friends[0] , user.settings.theme , user.settings.notifications )