import css from './Form.module.css'
import PropTypes from "prop-types"

const Form = () => {
    
    const { form, inputStyled } = css;
    
    return (
        <div className={form}>
            <span>Name</span>
            <input
                className={inputStyled}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
/>          <button>Add contact</button>
        </div>
    )
}



export default Form;
