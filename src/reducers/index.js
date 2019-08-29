export default function counterReducer(
  state = {
    count: 0,
    welcomeList: [
      {
        name: "Nick",
        isTeacher: true
      },
      {
        name: "Tom",
        isTeacher: false
      },
      {
        name: "Tim",
        isTeacher: false
      }
    ]
  },
  action
) {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "EXPEND":
      return {
        ...state,
        welcomeList: state.welcomeList.concat({
          name: action.name,
          isTeacher: false
        })
      };
    default:
      return state;
  }
}
