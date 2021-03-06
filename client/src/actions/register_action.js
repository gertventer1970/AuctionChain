import axios from 'axios';
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://0c2e7d60.ngrok.io/'

const headers = {
    'Accept': 'application/json'
};

export function register(username , password , fname , lname  ){
		return function(dispatch){
			fetch(api + 'register', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include',
	   	    body: JSON.stringify({
	   	    			"class": "org.cmpe272.evergreen.auction.Member",
						  "balance": 5000,
						  "email": username,
						  "firstName": fname,
						  "lastName": lname ,
						  "password" : password
	   	    })

	  		}).then(function (response) {
			      response.json().then(res => {
			      dispatch({ type : 'REGISTERED_FAIL' , payload : res})
				})
																		        
	   		})
	        .catch(error => {
	        	var res = {
	        		registered : false ,
	        		registeredError : "Internal Server error "
	        	}
	        	dispatch({ type : 'REGISTERED_FAIL' , payload : res})
	        })
		}
}



export function setBackRegisteredSuccess(){
	return({
		type : 'SET_BACK_REGISTER',
		payload : {user : '' , registerSuccessful : false}
	})
}



export function login(username , password ){
		return function(dispatch){
			fetch(api + 'login', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include',
	   	    body: JSON.stringify({username: username, password: password})

	  		}).then(function (response) {
			        
			      response.json().then(res => {
			      	
			      	dispatch({ type : 'CASE_LOGIN' , payload : res})
				})
																		        
	   		})
	        .catch(error => {
	            dispatch({ type : 'LOGIN_ERROR' , payload : 'Internal Server Error'})
	            
	        })
		}
	
}




export function setBackLoginSuccess(){
	return({
		type : 'SET_BACK_LOGIN',
		payload : {user : '' , loggedIn : null}
	})
}

export function checkIfAlreadyLoggedIn( ){
	
		return function(dispatch){
			fetch(api + 'checkIfAlreadyLoggedIn', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include'
	  		}).then(response => {
			        
			        response.json().then(res => {
			        	if(res.loggedIn === true){
			        		dispatch({ type : 'USER_ALREADY_LOGGED_IN_SUCCESS' , payload : res})
			        	}
			      		
					})
	   		})
	        .catch(error => {
	            console.log("This is error");
	            
	        })
		}
}





export function logout( ){
	
		return function(dispatch){
			fetch(api + 'logout', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include'
	  		}).then(response => {
			        
			        response.json().then(res => {
			        	console.log(res);
			      		dispatch({ type : 'USER_LOGGED_OUT' , payload : res})
					})
	   		})
	        .catch(error => {
	            console.log("This is error");
	            
	        })
		}
	
		
	

}