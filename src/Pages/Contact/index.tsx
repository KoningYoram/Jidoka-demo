import { FC } from "react";
import { css, StyleSheet } from 'aphrodite';
import useTheme from "../../Shared/hooks/useTheme.hook";
import { Props } from "./Contact.PropsState.interface";

import Facebook from '../../Static/fb_100.png';
import Instagram from '../../Static/instagram.png';
import responsiveImageStyle from "../../Shared/Styles/responsive-image.style";
import { sizes } from "../../Shared/interfaces/theme.interfaces";

export const Contact: FC<Props> = ({ }) => {

    const theme = useTheme();

    const contactStyle = StyleSheet.create({
        contactContainer: {
            display: 'flex',
            flexDirection: 'row',
            '@media(max-width: 700px)' : {
                flexDirection: 'column'
            }
        },
        contactSections: {
            flex: '1',
            padding: '2rem'
        },
        contactSectionTitle: {
            fontSize: '3.2rem',
            marginBottom: '3rem'
        },
        contactSectionContent: {
            display: 'flex',
            flexDirection: 'row'
        },
        contactSectionContentItem: {
            flex: 1,
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: '50%',
            maxWidth: '50%',
            padding: '0 3rem'
        },
        responsiveImage: {
            width: '100%'
        },
        socialSubtitle: {
            fontSize: '2rem',
            padding: '1rem',
            textAlign: 'center'
        },
        mail: {
            fontSize: '5rem'
        }
    });

    return (
        <section className={css(contactStyle.contactContainer)}>
            <div className={css(contactStyle.contactSections)}>
                <p className={css(contactStyle.contactSectionTitle)}>Find me on</p>
                <div className={css(contactStyle.contactSectionContent)}>
                    <div className={css(contactStyle.contactSectionContentItem)}>
                        <a href="https://www.facebook.com/valeriesillustrations/" target="_new">
                            <img src={Facebook} className={css(responsiveImageStyle, contactStyle.responsiveImage)} alt="Logo facebook" />
                            <p className={css(contactStyle.socialSubtitle)}>Facebook</p>
                        </a>
                    </div>
                    <div className={css(contactStyle.contactSectionContentItem)}>
                        <a href="https://www.instagram.com/valeriesillustrations/" target="_new">
                            <img src={Instagram} className={css(responsiveImageStyle, contactStyle.responsiveImage)} alt="Logo instagram" />
                            <p className={css(contactStyle.socialSubtitle)}>Instagram</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={css(contactStyle.contactSections)}>
                <p className={css(contactStyle.contactSectionTitle)}>Or contact me via mail:</p>
                <div className={css(contactStyle.contactSectionContent)}>
                    <p className={css(contactStyle.mail)}>
                        Valerie [at] valerievandeneynden [dot] be
                    </p>
                    
                </div>
            </div>
        </section>
    )
};

export default Contact;
