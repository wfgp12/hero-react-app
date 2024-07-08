import { useReducer } from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';
import { types } from '../types/types';

const initialState = {
    logged: false
}

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);

    const login = (name = "") => {
        const action = {
            type: types.login,
            payload: {
                id: 1151667,
                name
            }
        }

        dispatch(action)
    }
    return (
        <AuthContext.Provider value={{
            authState,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};