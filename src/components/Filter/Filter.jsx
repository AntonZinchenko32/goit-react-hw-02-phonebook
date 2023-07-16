import css from './Filter.module.css'
import { nanoid } from "nanoid"

const Filter = ({ searchContactFunc }) => {

    const filterInputId = nanoid();

    return (
        <>
            <label htmlFor={filterInputId} className={css.label}>Find contacts by name</label>
            <input
                id={filterInputId}
                className={css.input}
                onChange={searchContactFunc}
            />
        </>
    )
}

export default Filter;