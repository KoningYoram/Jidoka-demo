import { FC } from "react"
import { Props } from "./Loader.PropsState.interface";

export const Loader: FC<Props> = ({ text, animated }) => {
    return (
        <div>Loading...</div>
    )
};

export default Loader;
