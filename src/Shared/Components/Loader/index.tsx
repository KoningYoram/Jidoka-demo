import { FC, Fragment } from "react"
import { Props } from "./Loader.PropsState.interface";

import './loader.scss';

export const Loader: FC<Props> = ({ text }) => {
    return (
        <Fragment>
            <div id="stage">
                <div className="loader dots"><div></div></div>
                {
                    text && <p className="loader text">{text}</p>
                }
            </div>
            
        </Fragment>
    )
};

export default Loader;
