import { createContext } from 'react';
import all_product from '../components/assets/all_product'

export const LandingContext = createContext(null)

const LandingContextProvider = (props) => {
    const contextValue = {all_product};
    return (
        <LandingContext.Provider value={contextValue}>
            {props.children}
        </LandingContext.Provider>
    )
}

export default LandingContextProvider;