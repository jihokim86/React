// App.js
import "./App.css"
import { RecoilRoot } from "recoil"
import Counter from "./Counter";

function App() {
    return (
        <RecoilRoot>
            <Counter />
        </RecoilRoot>
    )
}

export default App;