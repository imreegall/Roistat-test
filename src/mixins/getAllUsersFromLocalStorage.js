export function getAllUsersFromLocalStorage() {
    let users = []
    let keys = Object.keys(localStorage)
    keys.forEach(key => {
        let user = JSON.parse(localStorage[key])
        user.id = key
        users.push(user)
    })

    return users
}
