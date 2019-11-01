const videoList = {
    data: {
        0: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637790/Sample%205%20Sec%20Videos/Renault_Sc%C3%A9nic_-_Parking_dtjuo9.mp4",
        1: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637790/Sample%205%20Sec%20Videos/Coca-Cola_Brasil_Coca-Cola_com_Segredos_zhcysd.mp4",
        2: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637790/Sample%205%20Sec%20Videos/Sorry_not_sorry._takeiteasy_cz0ayj.mp4",
        3: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637790/Sample%205%20Sec%20Videos/PG_tips_Green_Tea_qskpzx.mp4",
        4: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637789/Sample%205%20Sec%20Videos/Bacard%C3%AD_Cuba_Libre_nzhatm.mp4",
        5: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637788/Sample%205%20Sec%20Videos/Oreo_Thins_Sweet_Cremes_nyrgno.mp4",
        7: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637787/Sample%205%20Sec%20Videos/Krispy_Kreme_-_Made_Fresh_Daily_dlxvmm.mp4",
        8: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637786/Sample%205%20Sec%20Videos/Gumtree_Easy_Buy_Easy_Sell_Sophie_s_Sofa_x2je5o.mp4",
        9: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637786/Sample%205%20Sec%20Videos/Caucus_on_Super_Tuesday_Bernie_Sanders_o1o4rk.mp4",
        10: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637786/Sample%205%20Sec%20Videos/yellow_tail_Refreshingly_Simple_White_t78orw.mp4",
        11: "https://res.cloudinary.com/adnansabbir/video/upload/v1572637785/Sample%205%20Sec%20Videos/Hamlet_YouTube_Advertisers_ppfeoe.mp4",
    },
    total: 11,
    height: '100%',
    width: '100%',
};

const cards = {
    data: {
        1: {
            title: "Contact",
            card_style: {
                'background-color': "#ff0000",
            },
            title_color: '#FFFFFF',
            body: "<h1>This is Contact Page</h1>"
        },
        2: {
            title: "Help",
            card_style: {
                'background-color': "#000000",
            },
            title_color: '#FFFFFF',
            body: "<h1>This is Help Page</h1>"
        },
        3: {
            title: "Emergency",
            card_style: {
                'background-color': "#80f2ff",
            },
            title_color: '#000000',
            body: "<h1>This is Emergency Page</h1>"
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

const config = {
    card_list_gap: null,
    card_height: '45vh',
    card_width: '45vw',
    card_content_height: '90vh',
    card_content_width: '90vw',
};


const touchVideoHideDelay = 5;
let video_player = null;
let source = null;
let current_video_index = videoList.total ? 0 : null;
let touchTimeOut;

const content = document.getElementById('content');
const help_menu = document.getElementById("help-menu");
const help_menu_expanded = document.getElementById("help-menu-expanded");
const help_menu_expanded_content = document.getElementById("help-menu-expanded-content");
const help_menu_back_button = document.getElementById("help-menu-expanded-back-button");
let selected_card = null;

$(document).ready(function () {
    video_player = document.getElementById('video_player');
    video_player.controls = false;
    video_player.setAttribute('height', videoList['height']);
    video_player.setAttribute('width', videoList['width']);
    loadCards();
    loadVideos();

    document.addEventListener('touch', onTouchClick);
    document.addEventListener('click', onTouchClick);
});

loadVideos = () => {
    source = document.createElement('source');
    if (current_video_index != null) {
        loadSource();
    }

    video_player.addEventListener('ended', () => {
        current_video_index = ++current_video_index % videoList.total;
        loadSource();
    });
};

loadSource = () => {
    source.removeAttribute('src');
    if (videoList.data[current_video_index]) {
        source.setAttribute('src', `${videoList.data[current_video_index]}`);
    } else {
        current_video_index = ++current_video_index % videoList.total;
        loadSource();
    }
    source.setAttribute('id', `source${current_video_index}`);
    video_player.append(source);
    video_player.load();
    video_player.play().catch(error => {
        console.log(error);
    });
};

stopVideo = () => {
    video_player.pause();
};

playVideo = () => {
    loadSource();
};

hidePlayerShowContent = () => {
    video_player.style.display = "none";
    content.style.display = "block";
};

showPlayerHideContent = () => {
    video_player.style.display = "block";
    content.style.display = "none";
};

onTouchClick = () => {
    stopVideo();
    hidePlayerShowContent();
    clearTimeout(touchTimeOut);
    touchTimeOut = setTimeout(function () {
        loadSource();
        showPlayerHideContent();
    }, 1000 * touchVideoHideDelay);
};

loadCards = () => {
    Object.keys(cards.data).forEach(card_key => {
        help_menu.append(createCard(card_key));
        help_menu_expanded_content.append(createCardContent(card_key));
    });

    help_menu_back_button.addEventListener('click', onHelpMenuExpandedBackButtonTouchClick);
    help_menu_back_button.addEventListener('touch', onHelpMenuExpandedBackButtonTouchClick);
};

createCard = (card_key) => {
    let single_card = document.createElement('div');
    if (config.card_height) {
        single_card.style.setProperty('height', config.card_height);
    }
    if (config.card_width) {
        single_card.style.setProperty('width', config.card_width);
    }

    if (cards.data[card_key].card_style) {
        Object.keys(cards.data[card_key].card_style).forEach(style => {
            single_card.style.setProperty(style, cards.data[card_key].card_style[style], 'important');
        });
    }
    single_card.setAttribute('id', `card_${cards.data[card_key].title}`);
    single_card.setAttribute('title', `${cards.data[card_key].title}`);
    single_card.setAttribute('class', `card`);

    let single_card_heading = document.createElement('span');
    single_card_heading.setAttribute('class', 'card-heading');
    single_card_heading.setAttribute('id', `card-heading-${cards.data[card_key].title}`);
    if (cards.data[card_key].title_color) {
        single_card_heading.style.setProperty('color', cards.data[card_key].title_color, 'important');
    }
    single_card.append(single_card_heading);
    single_card_heading.innerText = cards.data[card_key].title;

    single_card.addEventListener('click', onCardTouchClick);
    single_card.addEventListener('touch', onCardTouchClick);

    return single_card;
};

createCardContent = (card_key) => {
    let single_card_content = document.createElement('div');
    single_card_content.setAttribute('class', 'card-content');
    single_card_content.setAttribute('id', `card-content-${cards.data[card_key].title}`);
    single_card_content.innerHTML = cards.data[card_key].body;
    single_card_content.style.display = 'none';

    return single_card_content;
};

onCardTouchClick = (event) => {
    selected_card = event.currentTarget;
    let card_title = selected_card.getAttribute('title');
    let card_content = document.getElementById(`card-content-${card_title}`);

    try {
        toggleHelpMenuAndHelpMenuExpanded();
        card_content.style.setProperty('display', 'block');
    } catch (e) {
        console.log(e);
    }
};

onHelpMenuExpandedBackButtonTouchClick = () => {
    document.getElementById(`card-content-${selected_card.getAttribute('title')}`).style.display = 'none';
    selected_card = null;
    toggleHelpMenuAndHelpMenuExpanded();
};

toggleHelpMenuAndHelpMenuExpanded = () => {
    console.log(help_menu.className);
    if (help_menu.className === 'display-none') {
        help_menu.className = 'display-flex';
    } else {
        help_menu.className = 'display-none';
    }

    if (help_menu_expanded.className === 'display-none') {
        help_menu_expanded.className = 'display-flex';
    } else {
        help_menu_expanded.className = 'display-none';
    }

};
