import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchFormWrapper,
  SearchWrapper,
  SearchIconToggle,
  Form,
  CloseIcon,
} from './styles';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    };
    this._onToggleSearchMenu = this._onToggleSearchMenu.bind(this);
  }

  _onToggleSearchMenu() {
    this.setState(prevState => ({
      isToggle: !prevState.isToggle,
    }));
  }

  render() {
    const { isToggle } = this.state;
    const { children, onSubmit } = this.props;
    return (
      <SearchFormWrapper>
        <SearchIconToggle onClick={this._onToggleSearchMenu} />
        <SearchWrapper isToggle={isToggle}>
          <Form onSubmit={onSubmit}>
            {children}
            <CloseIcon onClick={this._onToggleSearchMenu} />
          </Form>
        </SearchWrapper>
      </SearchFormWrapper>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SearchForm;
