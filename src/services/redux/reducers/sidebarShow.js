const initialState = {
  isOn: true,
};

export const changeState = (state = initialState, { type, ...rest }:any) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};
