import React, {useContext, useEffect, useMemo, useReducer} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

const AuthContext = React.createContext();

const AUTHENTICATED = 'AUTHENTICATED';
const ACCESS_TOKEN_KEY = 'access_token';

// Create a wrapper function for communicating with the API
const registerUser = () =>
  fetch('http://localhost:8085/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname: 'Alexandre',
      lastname: 'RIERA',
      email: 'alexandre@alexandre.fr',
      phone_number: '0625362374',
      password: 'Alexandre',
      confirm_password: 'Alexandre',
    }),
  }).then(response => response.json())
  .then(console.log('Alexandre a bien été créé ! : la reponse est : '+response));

const currentUser = token =>
  fetch('https://run.mocky.io/v3/5910a865-8ebf-4fab-b27f-70f96551c5d4', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(result => result.json());

// The app container, should handle the state of a user being authenticated or not
export const AuthContainer = props => {
  const [authState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        // Handle the AUTHENTICATED action and set the state to be authenticated
        case AUTHENTICATED:
          return {
            ...state,
            authenticated: true,
          };
        default:
          throw new Error(`${action.type} is not a valid action type`);
      }
    },
    {
      authenticated: false,
      initialized: false,
    },
  );

  // Memorize this facade since it shouldn't be recreated every render
  const facade = useMemo(
    () => ({
      register: async () => {
        try {
          const result = await registerUser();

          console.log(`result`, result);

          await EncryptedStorage.setItem(ACCESS_TOKEN_KEY, result.access_token);

          dispatch({type: AUTHENTICATED});
        } catch (error) {
          console.error(error);
        }
      },

      // First we're trying to fetch a token from encrypted storage here
      // Then we try to get the user associated with that token and resume the session
      resume: async () => {
        try {
          const token = await EncryptedStorage.getItem(ACCESS_TOKEN_KEY);

          console.log(`token`, token);

          // When no token is found, don't try to fetch the user
          if (!token) {
            return;
          }

          await currentUser(token);

          dispatch({type: AUTHENTICATED});
        } catch (error) {
          console.error(error);
        }
      },
    }),
    [],
  );

  // This will trigger when the app is mounted for the first time
  useEffect(() => {
    facade.resume();
  });

  // This uses a render prop to pass the authState to the containers children
  return (
    <AuthContext.Provider value={facade}>
      {props.children(authState)}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);