import { db,Auth } from "../../config/Firebase";
import { CHECK_USER } from "../reducers/TodoType";

export const LOGIN = "Login";
export const LOGOUT = "LOGOUT";


export const doLogin = (Email,Password) => async (dispatch) => {
  try {
    // firebase login
    const user = await Auth.signInWithEmailAndPassword(Email,Password);
    console.log("user", user.uid);
    dispatch({
      type: LOGIN,
      payload: user,
    });
  } catch (error) {
      alert(error)
    console.log("error", error);
  }
};



export const doSignup = (Name, Email,Password) => async (dispatch) => {
  try {
    // firebase login
    const user = await Auth.createUserWithEmailAndPassword(Email,Password);
    console.log("asasasa",user.user.uid)
    console.log("asasasa",user.user.email)
    console.log("asasasa",user)
    db.collection("User").add({
      name:Name,
      email:Email,  
      uid: user.user.uid
    
    })
    alert("You Register")
    dispatch({
      type: LOGIN,
      payload: user,
    });
  } catch (error) {
      alert(error);
  }
};



export const doLogout = () =>  (dispatch) => {
    try {
      // firebase login
      const res = Auth.signOut();
      console.log("user", res);
      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    }
  };

  export const doCheckUser = (user) => async (dispatch) => {
    try {
     
      dispatch({
        type: CHECK_USER,
        payload: user,
      });
    } catch (error) {
        alert(error)
      console.log("error", error);
    }
  };