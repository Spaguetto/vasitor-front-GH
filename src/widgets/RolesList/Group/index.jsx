// components
import GroupSeparator from '@ui/GroupSeparator';
import RolesGroupedList from '@components/RolesGroupedList';

// helpers
import {activeOptions} from '@constants/options';

export default function Group({arr, deleteModalHandler, variant, editModalHandler, editModalData, ...props}) {
    // get unique departments list
    // FIXME: Optimizar/reducir
    const deps = [true, false];

    // filter by department
    const arrByDep = dep => arr.filter(item => item.isActive === dep);

    // TODO: Se removieron los filtros, añadir posteriormente...
    return (
        <>
            {
                deps.map(dep => {
                    const label = activeOptions.find(item => item.value === dep).label;
                    return (
                        <div key={dep}>
                            <GroupSeparator text={label}/>
                            <RolesGroupedList arr={arrByDep(dep)} deleteModalHandler={deleteModalHandler} editModalHandler={editModalHandler} editModalData={editModalData}/>
                        </div>
                    )
                })
            }
        </>
    )
}