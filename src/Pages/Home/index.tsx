import { FC, useEffect, useState } from "react";
import { WorkItem } from "../../Shared/interfaces/workitem.interface";
import { Props, State } from "./Home.PropsState.interface";

import RequestService from '../../Services/request.service';
import WorkItemComponent from "./Components/WorkItem/workitem";

const Home: FC<Props> = ({ }) => {

    const [items, setItems] = useState<State['items']>([]);

    useEffect(() => {
        RequestService.getWork()
        .then((collection: WorkItem[]) => {
            setItems(collection)
        })
    });

    return (
        <>
            { items && items.map((item: WorkItem, index: number) => <WorkItemComponent item={item} key={index} />)} 
        </>
    );
}

export default Home;
