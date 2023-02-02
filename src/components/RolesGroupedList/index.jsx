// styling
import styled from 'styled-components/macro';
import {flex} from '@styles/vars';

// components
import Item from '@components/RolesGroupedList/Item';

// utils
import PropTypes from 'prop-types';

const List = styled.ul`
  ${flex.col};
  gap: 20px;
  margin: 20px;
`

const RolesGroupedList = ({arr, deps}) => {
    // TODO: Ajustar filtros de lista de roles
    // const {search, category} = deps ? deps : {search: '', category: ''};
    return <List>{arr.map((item, i) => <Item key={`${item.id}-${item.roleName}-${item.isActive}`} data={item} />)}</List>
}

// TODO: Ajustar propTypes de lista de roles (probablemente no necesario).
RolesGroupedList.propTypes = {
    arr: PropTypes.array.isRequired
}

export default RolesGroupedList;