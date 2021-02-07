import { FC } from "react";
import { css } from 'aphrodite';

import { Props } from './Portrait.PropsState.interface';
import Desktop from '../../../../Static/portret/desktop-xl.jpg';
import Mobile from '../../../../Static/portret/mobile-xl.jpg';

import responsiveImageStyle from "../../../../Shared/Styles/responsive-image.style";

const Portrait: FC<Props> = ({ }) => {
    return (
        <picture>
            <source srcSet={Mobile} media="(max-width:749px)" />
            <img src={Desktop} className={css(responsiveImageStyle)} />
        </picture>
    )
};

export default Portrait;