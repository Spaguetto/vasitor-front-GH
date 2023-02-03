// styled components
import {Wrapper, Block} from './style';

// components
import ShapeButton from '@ui/ShapeButton';
import {motion, AnimatePresence} from 'framer-motion';

// utils
import {fadePresence} from '@constants/framer';
import PropTypes from 'prop-types';

// TODO: Optimizar / reducir el componente (por ahora se creó de la forma más rápida siguiendo el template)


// TODO: Revisar el classname Doctor para saber si hay que cambiarlo

const Item = ({ data, deleteModalHandler, editModalHandler, editModalData }) => {
    const {id, roleName, description, isActive } = data;

    const Common = () => {

        // DISCUSS: Decidir si vale la pena también incluir un icono por rol (avatar)
        return (
            <Block>
                <div className="main">
                    <span className="name">{ roleName }</span>
                    <span className="description">
                        { description }
                    </span>
                </div>
            </Block>
        )
    }

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
                <ShapeButton icon="trash-solid" label="Delete" shape="round" handler={deleteModalHandler}/>
                <button className="booking" onClick={() => editModalHandler(data)}>Editar rol</button>
            </>
        )
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
