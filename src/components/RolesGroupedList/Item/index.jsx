// styled components
import {Wrapper, Block} from './style';

// components
import Avatar from '@ui/Avatar';
import ShapeButton from '@ui/ShapeButton';
import ActionButton from '@ui/ActionButton';
import Reminder from '@ui/Reminder';
import Progress from '@ui/Progress';
import CustomRating from '@ui/CustomRating';
import {motion, AnimatePresence} from 'framer-motion';

// utils
import {fadePresence} from '@constants/framer';
import PropTypes from 'prop-types';

// TODO: Optimizar / reducir el componente (por ahora se creó de la forma más rápida siguiendo el template)

const Item = ({ data }) => {
    const {id, roleName, description, isActive } = data;

    const Common = () => {

        // DISCUSS: Decidir si vale la pena también incluir un icono por rol (avatar)
        return (
            <Block>
                {/* <Avatar avatar={avatar} alt={`${firstName} ${lastName}`} online={online}/> */}
                <div className="main">
                    <span className="name">{ roleName }</span>
                    <span className="description">
                        { description }
                    </span>
                </div>
            </Block>
        )
    }

    // const DoctorInfo = () => {
    //     return (
    //         <div className="overview">
    //             <div className="rating">
    //                 <span>Doctor rating</span>
    //                 <CustomRating value={data.rating}/>
    //             </div>
    //             <div className="booked">
    //                 <span>Booked appointments</span>
    //                 <Progress value={data.booked}/>
    //             </div>
    //         </div>
    //     )
    // }

    const RoleInfo = () => {
        return (
            <div className='overview'>
                TODO: Agregar información importante del rol
            </div>
        )
    }

    // TODO: Revisar el classname booking para saber si hay que cambiarlo
    const Layout = () => {
        return (
            <>
                <Common/>
                <RoleInfo />
                <button className="booking">Editar rol</button>
            </>
        )
        // switch (type) {
        //     default:
        //     case 'doctor':
        //         return (
        //             <>
        //                 <Common type={type}/>
        //                 <DoctorInfo />
        //                 <button className="booking">Make an appointment</button>
        //             </>
        //         )
        //     case 'staff':
        //         return (
        //             <>
        //                 <Common type={type}/>
        //                 <DoctorInfo />
        //                 <div className="contacts">
        //                     <ShapeButton icon="comment-text" shape="round" label="Messages"/>
        //                     <ShapeButton icon="dots" shape="round" label="Menu"/>
        //                 </div>
        //             </>
        //         )
        //     case 'patient':
        //         return (
        //             <>
        //                 <Common type={type}/>
        //                 {
        //                     data.reminder ? <Reminder reminder={data.reminder}/> : null
        //                 }
        //                 <Block className="actions">
        //                     <div className="wrapper">
        //                         <ActionButton />
        //                     </div>
        //                     <ShapeButton icon="comment-text" label="Message" shape="round"
        //                                  hasNotification={data.message}/>
        //                     <ShapeButton icon="phone" label="Call" shape="round"/>
        //                 </Block>
        //             </>
        //         )
        // }
    }

    // TODO: estilos: la clase Doctor se asigna para tener los estilos fáciles, cambiar
    return (
        <AnimatePresence>
            <Wrapper className="Doctor" as={motion.li} {...fadePresence}>
                <Layout/>
            </Wrapper>
        </AnimatePresence>
    )
}

Item.propTypes = {
    data: PropTypes.any.isRequired
}

export default Item;
