const nameReducer = (state = 'stranger', action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return action.text;
    case 'CLEAR_NAME':
      return '';
    default:
      return state;
  }
}

export default nameReducer;