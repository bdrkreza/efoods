interface ISidebar {
  sidebarShow: boolean;
}

const initialState: ISidebar = {
  sidebarShow: true,
};

export const changeState = (state = initialState, { type, ...rest }: any) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};
