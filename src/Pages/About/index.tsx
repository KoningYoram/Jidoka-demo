import React, { FC } from "react"
import { css, StyleSheet } from 'aphrodite';
import useTheme from "../../Shared/hooks/useTheme.hook";
import { Props } from "./About.PropsState.interface";
import Portrait from "./Components/Portrait/portrait.component";

export const About: FC<Props> = ({ }) => {

    const theme = useTheme();

    const aboutStyle = StyleSheet.create({
        aboutWrapper: {
            display: "flex",
            flexDirection: "row",
            width: 'auto',
            margin: 'auto'
        },
        main: {
            order: 2,
            width: '66%',
            margin: '0 2rem',
            fontSize: '1.6rem',
        },
        p: {
            marginBottom: '2rem'
        },
        aside: {
            order: 1,
            maxWidth: '250px',
            margin: '0 2rem'
        }
    });

    return (
        <section className={css(aboutStyle.aboutWrapper)}>
            <main className={css(aboutStyle.main)}>
                <p className={css(aboutStyle.p)}> 
                    Hi! My name is Valérie Van Den Eynden and I am an illustrator from Belgium. I specialize in handdrawn and digital illustrations used for editorial purpose, logos or visual communication.
                </p>
                <p className={css(aboutStyle.p)}>
                    My work can be described as colorful and heartfelt. Feel free to contact me, when you have questions or commissioned work: valerie@valerievandeneynden.be or have a look at <a href="https://www.instagram.com/valeriesillustrations/" target="_new">my instagram (@valeriesillustrations)</a> or <a href="https://www.facebook.com/valeriesillustrations/" target="_new">Facebook page (Valérie Van Den Eynden Illustratie)</a>.
                </p>
                <hr className={css(aboutStyle.p)} />
                <p className={css(aboutStyle.p)}>
                    Valérie groeide op in een klein dorpje op het platteland genaamd Halle. Van kleins af aan was ze reeds enorm gefacineerd door kunst en tekenen. Ze wist dan ook meteen wat ze later wou worden. <b>Illustrator</b>! <br />Valérie studeerde begin september 2018 af als <b>Masterstudent Illustratie en Grafisch ontwerp</b> aan Sint Lucas School of Arts Antwerp. Tijdens en na haar opleiding kreeg ze de kans om voor het taboeloos <b>online magazine Charlie en LGBTI magazine ZiZo</b> te illustreren waar ze haar blik op een veranderende wereld heeft kunnen verruimen en toepassen in haar werk.
                </p>
                <p className={css(aboutStyle.p)}>
                    Valérie laat zich inspireren door artiesten zoals <b>Michael Dudok de Wit</b> en <b>Sabien Clement</b>. Anderen beschrijven haar werk als <b>kleurrijk</b> en <b>intuïtief met veel emotie</b>. Ze houdt er van zich te uiten in verschillende stijlen waarbij ze zowel digitale beelden als traditionele materialen tracht te combineren. Dit brengt haar soms tot een onconventionele vorm van illustreren waarbij ze een vernieuwde blik op de verhaalvertelling probeert te creëren.
                </p>
            </main>
            <aside className={css(aboutStyle.aside)}>
                <Portrait />
            </aside>
        </section>
    )
};

export default About;
