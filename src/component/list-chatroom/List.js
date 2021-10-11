import Layout from '../general/Layout';
import GroupItem from './GroupItem';

import classes from './List.module.css';

import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

function List(){

    return(
        <Layout>
            <div className={classes.header}>
                <div className={classes.title}>
                    <h2>Title</h2>
                    <BsThreeDotsVertical size={20} style={{cursor: "pointer"}}/>
                </div>
                <p>GROUP</p>
            </div>
            <div className={classes.body}>
                <GroupItem name="Group của Admin 2"/>
                <GroupItem name="Group của Admin 2"/>
                <GroupItem name="Hello"/>
                <GroupItem name="Tester"/>
                <GroupItem name="Group của Admin 345"/>
                <GroupItem name="Group của Admin 345"/>
                <GroupItem name="Group của Admin 345"/>
                <GroupItem name="Admin Group Test Offical"/>
                <div className={classes.iconEdit}>
                    <MdEdit/>
                </div>
            </div>
        </Layout>
    );
};

export default List;