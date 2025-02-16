const { createContext } = require("react");

const apiContext = createContext();

export default function ApiContext({children}) {
    return (
        <apiContext.Provider>
            {children}
        </apiContext.Provider>
    )
}