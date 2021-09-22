<<<<<<< HEAD

import {LOGIN,LOGOUT} from "../actions/AuthActions";
import { CHECK_USER } from "./TodoType";
// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
  isUserLoggedIn : false,
  user: null,
 }
 
 
 function AuthReducer(state=initialState, action) {
     switch (action.type) {

         case LOGIN:{
        // if user login than what?
             return {
                 ...state,
                isUserLoggedIn:  true,
                user: action.payload
             };
         }

         case LOGOUT:{
            // if user login than what?
                 return {
                     ...state,
                    isUserLoggedIn:  false,
                    user:null
                 };
             }
                
             
                case  CHECK_USER:{
                // if user login than what?
                     return {
                         ...state,
                        isUserLoggedIn:  true,
                        user: action.payload
                     };
                 }
             
     
         default:
         return state;
     }
 }
 
=======

import {LOGIN,LOGOUT} from "../actions/AuthActions";
import { CHECK_USER } from "./TodoType";
// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
  isUserLoggedIn : false,
  user: [],
 }
 
 
 function AuthReducer(state=initialState, action) {
     switch (action.type) {

         case LOGIN:{
        // if user login than what?
             return {
                 ...state,
                isUserLoggedIn:  true,
                user: action.payload
             };
         }

         case LOGOUT:{
            // if user login than what?
                 return {
                     ...state,
                    isUserLoggedIn:  false,
                    user:null
                 };
             }
                
             
                case  CHECK_USER:{
                // if user login than what?
                     return {
                         ...state,
                        isUserLoggedIn:  true,
                        user: action.payload
                        
                     };
                 }
             
     
         default:
         return state;
     }
 }
 
>>>>>>> 57c09d2bd206795c9ca4eb902ace6176da83b3e6
 export default AuthReducer;