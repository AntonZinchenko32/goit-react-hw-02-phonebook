import css from './Section.module.css'
import PropTypes from "prop-types"

const Section = ({title}) => {
    return <h2 className={css.section}>{title}</h2>
}

Section.propTypes = {
    title: PropTypes.string.isRequired
}

export default Section;