import css from './ContactList.module.css'

import ContactItem from 'components/ContactItem/ContactItem';


const ContactList = ({contacts, deleteContactFunc}) => {
    
    return (
        <>  
            <ul className={css.contactsList}>
                <ContactItem
                    contacts={contacts}
                    deleteContactFunc={deleteContactFunc}
                />
            </ul>
        </>
    )
}


export default ContactList;

