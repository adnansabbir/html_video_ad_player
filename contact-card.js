const contact_card = (theme_color, font_size_px) => {

    const config = {
        background_color: theme_color ? theme_color : '#dc3545',
        title: 'EMERGENCY CONTACT',
        title_ico_font_class: 'icofont-phone',
        content: [
            {
                ico_font_class: "icofont-ambulance-crescent",
                contact: '01750991937'
            },
            {
                ico_font_class: "icofont-fire-truck",
                contact: '01750991937'
            },
            {
                ico_font_class: "icofont-police",
                contact: '01750991937'
            },
            {
                ico_font_class: "icofont-airplane-alt",
                contact: '01750991937'
            }
        ]
    };

    const createCardContent = () => {
        let cardContent = '';
        config.content.forEach(con => {
            cardContent += `<div class="content mb-5" style="display: flex; flex-flow: row wrap; justify-content: center">
                            <i class="${con.ico_font_class}" style="font-size: ${(font_size_px*1.66)+"px"}"></i>
                            <span class="border-danger" style="font-size: ${(font_size_px*.833)+"px"}; line-height: ${(font_size_px*1.566)+"px"}; margin-left: 20px; border-bottom: 3px solid">
                                ${con.contact}
                            </span>
                        </div>`;
        });
        return cardContent;
    };

    return `<div class="card bg-transparent">
                    <div class="card-header text-center" style="font-size: ${font_size_px+"px"}; background-color: ${config.background_color}">
                        <i class="${config.title_ico_font_class}"></i>
                        ${config.title}
                    </div>
                    <div class="card-body container">
                        ${createCardContent()}
                    </div>
                </div>`
};
