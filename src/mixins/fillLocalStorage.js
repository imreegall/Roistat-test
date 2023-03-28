export function fillLocalStorage() {
    const users = [
        {
            id: 974128150,
            user: {
                name: "Марина",
                tel: "+79411232142",
                parent: 0,
            },
        },

        {
            id: 797877627,
            user: {
                name: "Петр",
                tel: "+79411232142",
                parent: 0,
            },
        },

        {
            id: 928742785,
            user: {
                name: "Алексей",
                tel: "+79411232142",
                parent: 0,
            },
        },

        {
            id: 997930970,
            user: {
                name: "Иван",
                tel: "+79411232142",
                parent: 928742785,
            },
        },

        {
            id: 730707266,
            user: {
                name: "Ренат",
                tel: "+79411232142",
                parent: 928742785,
            },
        },

        {
            id: 932665228,
            user: {
                name: "Анастасия",
                tel: "+79411232142",
                parent: 928742785,
            },
        },

        {
            id: 719749202,
            user: {
                name: "Дмитрий",
                tel: "+79411232142",
                parent: 932665228,
            },
        },

        {
            id: 359159959,
            user: {
                name: "Олег",
                tel: "+79411232142",
                parent: 932665228,
            },
        },

        {
            id: 799019496,
            user: {
                name: "Камилла",
                tel: "+79411232142",
                parent: 932665228,
            },
        },

        {
            id: 676903557,
            user: {
                name: "Борис",
                tel: "+79411232142",
                parent: 932665228,
            },
        },

        {
            id: 199942857,
            user: {
                name: "Анна",
                tel: "+79411232142",
                parent: 928742785,
            },
        },

        {
            id: 903432328,
            user: {
                name: "Константин",
                tel: "+79411232142",
                parent: 0,
            },
        },

        {
            id: 76364197,
            user: {
                name: "Игнат",
                tel: "+79411232142",
                parent: 903432328,
            },
        },

        {
            id: 126675778,
            user: {
                name: "Валерий",
                tel: "+79411232142",
                parent: 0,
            },
        },

        {
            id: 652755857,
            user: {
                name: "Юрий",
                tel: "+79411232142",
                parent: 0,
            },
        },
    ]

    localStorage.clear()

    users.forEach(user => {
        localStorage.setItem(user.id, JSON.stringify(user.user));
    })
}
