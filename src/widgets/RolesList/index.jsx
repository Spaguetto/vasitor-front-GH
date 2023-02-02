// styling
import styled from 'styled-components/macro';
import {flex, breakpoints} from '@styles/vars';

// styled components
import {Header} from '@components/Widget/style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import CustomSelect from '@ui/Select';
import GenderNav from '@components/GenderNav';
import SearchBar from '@ui/SearchBar';
import Group from './Group';
import NoDataPlaceholder from '@components/NoDataPlaceholder';

// utils
import {depsOptions} from '@constants/options';
import {useState} from 'react';

// hooks
import useGenderFilter from '@hooks/useGenderFilter';

// data placeholder
import {roles} from '@db/roles';

export const ListHeader = styled(Header)`
  padding: 24px 0 20px;

  .wrapper {
    padding: 0 24px;
    ${flex.col};
    gap: 20px;
  }

  .wrapper, form {
    flex-grow: 1;
    width: 100%;
  }

  ${breakpoints.tablet} {
    .wrapper {
      flex-direction: row;
      ${flex.between};

      .gender {
        width: 300px;
      }
    }
  }
`;

const RolesList = ({variant}) => {
    const [category, setCategory] = useState(depsOptions[0]);
    const [search, setSearch] = useState('');
    const {gender, setGender} = useGenderFilter();

    // const filteredStaff = staff.filter(item => {
    //     const name = `${item.firstName} ${item.lastName}`;
    //     const depsNames = item.department.map(dep => dep.label).join(' ');
    //     const depsIDs = item.department.map(dep => dep.id).join(' ');
    //     const queryMatch = name.toLowerCase().includes(search.toLowerCase()) || depsNames.toLowerCase().includes(search.toLowerCase());
    //     const categoryMatch = category.value === 'all' || depsIDs.toLowerCase().includes(category.value.toLowerCase());
    //     const genderMatch = gender.value === 'all' || item.gender === gender.value

    //     return queryMatch && categoryMatch && genderMatch;
    // })

    // TODO: Acomodar el filtro que actualmente es por genero a por estado "activo" o "inactivo"
    // TODO: Acomodar el CustomSelect también
    // DISCUSS: hay algunas otras cosas importantes que deba tener el customselect?
    // DISCUSS: como configurar el buscador? por palabras de coincidencia?

    // TODO: (General) personalizar la barra de increase contrast, light scheme, RTL y font size
    return (
        <Widget name="RolesList">
            <ListHeader>
                <div className="wrapper">
                    <CustomSelect options={depsOptions} variant="minimal" value={category} changeHandler={setCategory}/>
                    <GenderNav state={gender} handler={setGender}/>
                </div>
                <SearchBar placeholder="Search a doctor or medical department" handler={setSearch} value={search}/>
            </ListHeader>
            <WidgetBody style={{padding: 0}}>
                {
                    roles.length !== 0 ?
                        <Group arr={roles} />
                        :
                        <NoDataPlaceholder/>
                }
            </WidgetBody>
        </Widget>
    )
}

export default RolesList;