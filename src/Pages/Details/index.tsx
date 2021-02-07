import React, { FC, Fragment, useEffect, useState } from "react";
import { css, StyleSheet } from 'aphrodite';
import { useNavigate, useParams } from '@reach/router';

import { Props } from "./Details.PropsState.interfaces";
import { WorkItem } from "../../Shared/interfaces/workitem.interface";

import RequestService from "../../Services/request.service";

export const Details: FC<Props> = ({ }) => {

    const [item, setItem] = useState<WorkItem | null>(null);
    const params = useParams();
    const itemStyle = StyleSheet.create({
        title: {
            fontSize: '3.6rem'
        },
        subtitle: {
            fontSize: '2rem'
        },
        imageContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            marginTop: '2rem'
        },
        imageTile: {
            height: '22rem',
            width: 'auto',
            minWidth: '22rem',
            margin: '1rem 1rem 0 0',
            flexGrow: 1
        },
        bgContainer: {
            height: '100%',
            width: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transitionProperty: 'filter',
            transitionDuration: '0.2s',
            transitionTimingFunction: 'ease-in',
            ':hover': {
                filter: 'grayscale(50%)'
            }
        }
    });

    useEffect(() => {
        getWork();
    })

    const getWork = async (): Promise<void> => {
        const item = await RequestService.getWorkById(params.id);
        setItem(item ?? null);
    };

    getWork();

    return ( 
        <section>
            {
                item && 
                    <Fragment>
                        <h1 className={css(itemStyle.title)}>{item.name}</h1>
                        <p className={css(itemStyle.subtitle)}>{item.description}</p>
                        <div className={css(itemStyle.imageContainer)}>
                        {
                            item.images.map((source: string, index: number) => {
                                return <div className={css(itemStyle.imageTile)} key={index}>
                                    <div className={css(itemStyle.bgContainer)} style={{ backgroundImage: `url(${source})` }}>
                                    </div>
                                </div>
                            })
                        }
                        </div>
                    </Fragment>
                    
            }
        </section>
    )
};

export default Details;
