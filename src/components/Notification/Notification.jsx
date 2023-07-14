import css from './Notification.module.css'
import PropTypes from "prop-types"

 const Notification = ({message}) => (
    
    <h2 className={css.notification}>{message}</h2>
 )

Notification.propTypes = {
    message: PropTypes.string.isRequired
}


export default Notification;