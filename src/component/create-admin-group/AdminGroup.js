import Layout from '../general/Layout';
import InputText from '../general/InputText';
import Button from '../general/Button';
import image from '../../images/image.png';

import classes from './AdminGroup.module.css';

import { MdArrowBack } from "react-icons/md";

const AdminGroup = (props) => {

    return (
        <Layout>
            <div className={classes.header}>
                <MdArrowBack 
                    size={26} 
                    style={{marginLeft: "15px", marginRight: "30px", cursor: "pointer"}}
                />
                <h3>Create Group</h3>
            </div>
            <div className={classes.avatar}>
                <img src={image} width="100%" height="100%"/>
            </div>
            <form>
                <InputText placeholder="Group name"/>
                <Button>CREATE GROUP</Button>
            </form>
        </Layout>
    );
};

export default AdminGroup;