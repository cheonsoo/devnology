const INCREMENT_COUNTER: string = "INCREMENT_COUNTER";
const DECREMENT_COUNTER: string = "DECREMENT_COUNTER";

interface IncrementAction {
  type: typeof INCREMENT_COUNTER;
}

interface DecrementAction {
  type: typeof DECREMENT_COUNTER;
}

interface InitialState {
  number: number;
}

const initialState = {
    number : 0
}

export const increase = (): IncrementAction => ({ type: INCREMENT_COUNTER });
export const decrease = (): DecrementAction => ({ type: DECREMENT_COUNTER });

type Action = IncrementAction | DecrementAction;
export const counter = (prevState = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { number: prevState.number + 1 };
    case DECREMENT_COUNTER:
      return { number: prevState.number - 1 };
		default:
      return prevState;
  }
};
