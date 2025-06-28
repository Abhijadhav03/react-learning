import { useState } from "react";
const User = ({name}) => {
    const [count, setcount] = useState(1);
    const [count2] = useState(0);
    return (
        <div className="user-test">
            {/* <button onClick={() => {
                setcount(count+1);
                        }}>count increase</button>
            <h1>Count = {count}</h1>
            <h1>Name: {name}</h1>
            <h2>Hello JS</h2>
            <h4>contact : @abhijadhav06</h4> */}
        </div>
    );
};

export default User;
