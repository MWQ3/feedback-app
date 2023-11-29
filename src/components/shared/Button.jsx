function Button({ children, type, version, active }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={active}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'submit',
    version: 'primary',
    active: false,
}

export default Button