import css from './ContactItem.module.css'
import PropTypes from "prop-types"

const ContactItem = ({ contacts }) => {
    
    return (
        contacts.map(({ name, id, number }) => (
                    <li className={css.contactItem} key={id}>{name}: {number}</li>
                ))
    ) 
}

ContactItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}

export default ContactItem;