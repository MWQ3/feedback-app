import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Header({ text, bgColor, txtColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: txtColor,
        textDecoration:'none'
    }
  return (
    <header style={headerStyles}>
        <div className="container">
        <Link to="/" style={headerStyles}>
            <h2>{text}</h2>
            </Link>
        </div>
    </header>

  )
}

Header.defaultProps = {
    text: 'UI FeedBack',
    bgColor: 'rgba(0,0,0,0.4)',
    txtColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    txtColor: PropTypes.string
}

export default Header