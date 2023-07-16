import css from './ContactList.module.css'

import ContactItem from 'components/ContactItem/ContactItem';


const ContactList = ({contacts}) => {
    
    return (
        <>  
            <ul className={css.contactsList}>
                <ContactItem contacts={contacts} />
            </ul>
        </>
    )
}


export default ContactList;

