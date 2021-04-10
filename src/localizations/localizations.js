import LocalizedStrings from 'react-localization';

let localizations = new LocalizedStrings({
    en: {
        greeting: 'Hello',
        introducing: 'I am Nikita Koliadin',
        activity: 'I am software developer',
        explanation: 'And this is my personal page',
        footerLinkedIn: 'LinkedIn',
        footerFacebook: 'Facebook',
        footerInstagram: 'Instagram',
        footerTelegram: 'Telegram',
        footerGitHub: 'GitHub',
    },
    uk: {
        greeting: 'Привіт',
        introducing: 'Я Микита Колядін',
        activity: 'Я розробник програмного забезпечення',
        explanation: 'І це моя особиста сторінка',
        footerLinkedIn: 'LinkedIn',
        footerFacebook: 'Facebook',
        footerInstagram: 'Instagram',
        footerTelegram: 'Telegram',
        footerGitHub: 'GitHub',
    },
    ru: {
        greeting: 'Привет',
        introducing: 'Я Никита Колядин',
        activity: 'Я разработчик программного обеспечения',
        explanation: 'И это моя личная страничка',
        footerLinkedIn: 'LinkedIn',
        footerFacebook: 'Facebook',
        footerInstagram: 'Instagram',
        footerTelegram: 'Telegram',
        footerGitHub: 'GitHub',
    }
});

export default localizations;
