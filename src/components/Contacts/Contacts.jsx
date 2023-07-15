import css from './Contacts.module.css'
import PropTypes from "prop-types"
import Notification from "components/Notification/Notification";


const Contacts = ({contacts, searchContactFunc}) => {
    
    return (
        <>  
            <span className={css.label}>Find contacts by name</span>
            <input
                className={css.input}
                onChange={searchContactFunc}
            />
            {contacts.length !== 0 ?
                <ul className={css.contactsList}>
                {contacts.map(({ name, id, number }) => (
                    <li key={id}>{name}: {number}</li>
                ))}
                </ul>
                :
                <Notification message="No contacts added at all or none that meet the search criteria, sorry" />
            }
            
        </>

    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}

export default Contacts;

