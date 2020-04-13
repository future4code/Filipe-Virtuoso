import React from 'react'
import * as S from './styled'
import PropTypes from 'prop-types'

const Navbar = ({ title, icon }) => {
  return (
    <div>
      <S.NavWrapper>
        <S.Logo>
          <i class={icon}></i> {title}
        </S.Logo>
      </S.NavWrapper>
    </div>
  )
}

Navbar.defaultProps = {
  icon: "fas fa-th-list",
  title: "TODO App"
}

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Navbar;