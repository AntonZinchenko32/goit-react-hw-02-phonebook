import css from './Filter.module.css'

const Filter = ({ searchContactFunc }) => {
    return (
        <>
            <span className={css.label}>Find contacts by name</span>
                <input
                    className={css.input}
                    onChange={searchContactFunc}
                />
        </>
    )
}

export default Filter;