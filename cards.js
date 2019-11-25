const cards = {
    data: {
        1: {
            title: "Contacts",
            card_style: {
                'background-color': "#dc3545",
            },
            title_color: '#FFFFFF',
            body: contact_card('#dc3545', 50)
        },
        2: {
            title: "Emergency",
            card_style: {
                'background-color': "#000000",
            },
            title_color: '#FFFFFF',
            body: "<h1>Emergency</h1>"
        },
        3: {
            title: "Help",
            card_style: {
                'background-color': "#80f2ff",
            },
            title_color: '#000000',
            body: "<h1>FAQ</h1>"
        },
        4: {
            title: "Flight Schedule",
            card_style: null,
            title_color: null,
            body: "<h1>This is Flight Schedule Page</h1>"
        }
    },
    total: 4,
};
