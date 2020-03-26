import React, { Component } from 'react';
import * as S from './styled';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  getSearchInput = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    let searchForm;
    switch (this.props.page) {
      case 1:
        searchForm = (
          <S.SearchWrapper>
            <S.SearchInput
              value={this.state.search}
              onChange={this.getSearchInput}
              placeholder="Pesquise pelo nome da playlist"
            ></S.SearchInput>
            <S.SearchButton
              onClick={() => {
                this.props.getPlaylistById(this.state.search);
                this.setState({ search: '' });
              }}
            >
              <i className="fas fa-search"></i>
            </S.SearchButton>
          </S.SearchWrapper>
        );
        break;
      default:
        searchForm = null;
    }
    return (
      <S.NavWrapper>
        <S.Logo onClick={this.props.goToHome}>
          <i className="fas fa-music animated infinite pulse"></i> Spotif4
        </S.Logo>
        {searchForm}
        <S.MenuWrapper>
          <S.Item onClick={this.props.goToCreatePage}>
            <S.CustomBG>Criar playlist</S.CustomBG>{' '}
          </S.Item>
          <S.Item>
            <S.Link
              href="https://documenter.getpostman.com/view/4233568/SVtWvmod?version=latest"
              target="_blank"
            >
              API
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link href="https://twitter.com/lfvirtuoso" target="_blank">
              @lfvirtuoso
            </S.Link>
          </S.Item>
        </S.MenuWrapper>
      </S.NavWrapper>
    );
  }
}

export default Navbar;
