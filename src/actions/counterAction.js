export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const EXPEND = "EXPEND";

export const addCount = () => {
  return {
    type: INCREMENT
  };
};

export const substractCount = () => {
  return {
    type: DECREMENT
  };
};

export const expendNode = name => {
  return {
    type: EXPEND,
    name: name
  };
};
