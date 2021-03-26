import React from 'react';
import styles from './Footer.module.css';
import localizations from '../../localizations/localizations';
import {ReactComponent as LinkedInLogo} from './linkedInLogo.svg';
import {ReactComponent as FacebookLogo} from './facebookLogo.svg';
import {ReactComponent as InstagramLogo} from './instagramLogo.svg';
import {ReactComponent as TelegramLogo} from './telegramLogo.svg';
import {ReactComponent as GitHubLogo} from './gitHubLogo.svg';

function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Row1}>
                <a href={process.env.REACT_APP_LINKEDIN_LINK}
                   target={'_blank'}
                   rel={'noopener noreferrer'}
                   className={styles.Link}>
                    <div className={styles.Logo}>
                        <LinkedInLogo/>
                    </div>
                    <div className={styles.Text}>
                        {localizations.footerLinkedIn}
                    </div>
                </a>
            </div>
            <div className={styles.Row2}>
                <a href={process.env.REACT_APP_FACEBOOK_LINK}
                   target={'_blank'}
                   rel={'noopener noreferrer'}
                   className={styles.Link}>
                    <div className={styles.Logo}>
                        <FacebookLogo/>
                    </div>
                    <div className={styles.Text}>
                        {localizations.footerFacebook}
                    </div>
                </a>
            </div>
            <div className={styles.Row3}>
                <a href={process.env.REACT_APP_INSTAGRAM_LINK}
                   target={'_blank'}
                   rel={'noopener noreferrer'}
                   className={styles.Link}>
                    <div className={styles.Logo}>
                        <InstagramLogo/>
                    </div>
                    <div className={styles.Text}>
                        {localizations.footerInstagram}
                    </div>
                </a>
            </div>
            <div className={styles.Row4}>
                <a href={process.env.REACT_APP_TELEGRAM_LINK}
                   target={'_blank'}
                   rel={'noopener noreferrer'}
                   className={styles.Link}>
                    <div className={styles.Logo}>
                        <TelegramLogo/>
                    </div>
                    <div className={styles.Text}>
                        {localizations.footerTelegram}
                    </div>
                </a>
            </div>
            <div className={styles.Row5}>
                <a href={process.env.REACT_APP_GITHUB_LINK}
                   target={'_blank'}
                   rel={'noopener noreferrer'}
                   className={styles.Link}>
                    <div className={styles.Logo}>
                        <GitHubLogo/>
                    </div>
                    <div className={styles.Text}>
                        {localizations.footerGitHub}
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Footer;
