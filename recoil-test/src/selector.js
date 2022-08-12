import { selector } from "recoil";
import { countState, inputState } from "./atoms";

const countStateSelector = selector({
    key: 'CounterState',

    get: ({ get }) => {
        const inputVal = get(inputState);
        const count = get(countState);

        return `추가된 카운트는 ${inputVal}이며, 현재 카운트는 ${count}입니다.`;
    },
});

export default countStateSelector;