import React from 'react';

class ChangeText extends React.Component {
  render() {
    const { item, handleChange } = this.props;
    return(
      <input 
        autoFocus 
        className='change_input' 
        type="text" 
        defaultValue={item.value}
        onChange={(e) =>  handleChange(e)}
      />
    )
  }
}

export default ChangeText;