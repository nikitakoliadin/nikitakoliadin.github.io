import LocalizedStrings from 'react-localization';

let localizations = new LocalizedStrings({
    en: {
        greeting: 'Hello',
        introducing: 'I am Nikita Koliadin',
        activity: 'I am software developer',
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
        footerLinkedIn: 'LinkedIn',
        footerFacebook: 'Facebook',
        footerInstagram: 'Instagram',
        footerTelegram: 'Telegram',
        footerGitHub: 'GitHub',
    }
});

export default localizations;
