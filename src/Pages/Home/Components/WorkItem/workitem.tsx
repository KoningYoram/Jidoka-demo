import { FC } from "react";
import { css, StyleSheet } from 'aphrodite';

import { Props } from "./WorkItem.PropsState.interface";
import { Link } from "@reach/router";
import responsiveImageStyle from "../../../../Shared/Styles/responsive-image.style";

const WorkItemComponent: FC<Props> = ({ item }) => {

    const ItemStyle = StyleSheet.create({
        itemContainer: {
            position: 'relative',
            minHeight: '1px',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            marginBottom: '3rem',
            width: '25%',
            float: 'left',
            '@media(max-width: 768px)': {
                width: '33%'
            },
            '@media(max-width: 468px)': {
                width: '50%'
            },
            ' > p': {
                fontSize: '2rem'
            }
        },
        p: {
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
        },
        textOverlay: {
            height: '100%',
            top: 0,
            width: 'calc(100% - 3rem)',
            left: '1.5rem',
            zIndex: 300,
            backgroundColor: 'rgba(120, 120, 120, 0.8)',
            color: '#F3F3F3',
            position: 'absolute',
            padding: '1.2rem',
            display: 'block',
            fontSize: '1.2rem',
            overflow: 'auto',
            ':hover': {
            }
        }
    });

    return (
        <Link to={`/detail/${ item.id }`}>
            <div className={css(ItemStyle.itemContainer)}>
                <div className={css(ItemStyle.textOverlay)}>
                    <p className={css(ItemStyle.p)}>
                        { item.name }
                    </p>
                    { item.description }
                </div>
                <img
                    src={ item.primary }
                    className={css(responsiveImageStyle)}
                    alt={`Headerimage for project '${ item.name }'`}
                />
            </div>
        </Link>
    )
};

export default WorkItemComponent;
