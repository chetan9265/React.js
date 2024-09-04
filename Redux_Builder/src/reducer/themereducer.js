
const Intialstate={
  Theme:"Light"
}

export const reducer = (state=Intialstate, action) => {
  switch (action.type) {
      case 'LIGHT':
          return { ...state,Theme:action.payload };
      case 'DARK':
          return { ...state,Theme:action.payload };;
      default:
          return state;
  }
}