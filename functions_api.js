//1. GETUSER, TAKES ONE USERNAME AND RETURN IT IF EXISTS.
// const users =["Yesy", "Rox", "Fer", "Bruno"];
// function sendReponse(code, body = null) {
//   const response = {
//     code,
//     body,
//   };

//   switch (code) {
//     case 200:
//       response.msg = "Ok";
//       break;
//     case 400:
//       response.msg = "Endpoint not valid";
//       break;
//     case 404:
//       response.msg = "Not found";
//       break;
//     case 500:
//       response.msg = "Internal Server Error";
//       break;
//     default:
//       response.msg = "Unknown status code";
//   }

//   return response;
// }
//   function getUser(userName){
//     try {
//       if (!userName) {
//         return sendReponse(400);
//       }
//       const userIndex = users.indexOf(userName);
//       if (userIndex >= 0) {
//         const user = users.at(userIndex);
//         return sendReponse(200, user);
//       }
//       return sendReponse(404);
//     } catch (error) {
//       return sendReponse(500, error);
//     }
//   };
//   console.log(getUser("Bruno"));
//   console.log(getUser("Bruni"));

// ---------------------------------------------------------------------------------------------------

//2. GETUSERS, RETURN ALL EXISTING USERS
// const users =["Yesy", "Rox", "Fer", "Bruno"];
// function sendReponse(code, body = null) {
//   const response = {
//     code,
//     body,
//   };

//   switch (code) {
//     case 200:
//       response.msg = "Ok";
//       break;
//     case 400:
//       response.msg = "Endpoint not valid";
//       break;
//     case 404:
//       response.msg = "Not found";
//       break;
//     case 500:
//       response.msg = "Internal Server Error";
//       break;
//     default:
//       response.msg = "Unknown status code";
//   }
//   return response;
// }
//   function getUser(){
//     if (users.length>0){
//         console.log(users)
//         return sendReponse(200)
//     } 
//     console.log(users)
//     return sendReponse (404)
// }
//   console.log(getUser(users));

//--------------------------------------------------------------------------------------------------------

//3. ADDUSER, ADDS A NEW USER TO THE USERS ARRAY AND RETURN THE USER CREATED, ALL USERS IN NEW ARRAY AND THE USER CREATED
// const users =["Yesy", "Rox", "Fer", "Bruno"];
// function sendReponse(code, body = null) {
//   const response = {
//     code,
//     body,
//   };

//   switch (code) {
//     case 200:
//       response.msg = "Ok";
//       break;
//     case 400:
//       response.msg = "Endpoint not valid";
//       break;
//     case 404:
//       response.msg = "Not found";
//       break;
//     case 500:
//       response.msg = "Internal Server Error";
//       break;
//     default:
//       response.msg = "Unknown status code";
//   }

//   return response;
// }
// function addUser(userName){
//     if (users.includes(userName)){
//         return sendReponse(400);
//     } 
//     users.push(userName);
//     console.log(users);
//     return sendReponse(200, userName);
// }

//   console.log(addUser("Bruno"));
//   console.log(addUser("Mafer"));

//---------------------------------------------------------------------------------------------------------------------

//4. REMOVEUSERBYINDEX, TAKES AN INDEX AND, IF FOUND, REMOVES THE ELEMENT FROM THE ARRAY, IT RETURNS THE DELETED ELEMENT AND THE NEW ARRAY.
// const users = ["Yesy", "Rox", "Fer", "Bruno"];
// function sendReponse(code, body = null) {
//     const response = {
//         code,
//         body,
//     };

//     switch (code) {
//         case 200:
//             response.msg = "Ok";
//             break;
//         case 400:
//             response.msg = "Endpoint not valid";
//             break;
//         case 404:
//             response.msg = "Not found";
//             break;
//         case 500:
//             response.msg = "Internal Server Error";
//             break;
//         default:
//             response.msg = "Unknown status code";
//     }

//     return response;
// }
// function removeUserByIndex(index) {

//     if (index<=users.length) {
//         console.log(users.at(index))
//         users.splice(index, 1)
//         console.log(users)
//         return sendReponse(200);
//     }
//     return sendReponse (404);
// }
// console.log(removeUserByIndex(1));
// console.log(removeUserByIndex(5));

//-------------------------------------------------------------------------------------------------------
//5. REMOVELASTUSER, REMOVES THE LAST ELEMENT FROM THE ARRAY, IT RETURNS THE DELETED ELEMENT AND THE NEW ARRAY.
// const users = ["Yesy", "Rox", "Fer", "Bruno"];
// function sendReponse(code, body = null) {
//     const response = {
//         code,
//         body,
//     };
//     switch (code) {
//         case 200:
//             response.msg = "Ok";
//             break;
//         case 400:
//             response.msg = "Endpoint not valid";
//             break;
//         case 404:
//             response.msg = "Not found";
//             break;
//         case 500:
//             response.msg = "Internal Server Error";
//             break;
//         default:
//             response.msg = "Unknown status code";
//     }
//     return response;
// }
// function removeLastUser() {
//     if(users.length>0){
//         console.log(users.pop());
//         console.log(users)
//         return sendReponse(200)
//     }
//     return sendReponse(404);
// }
// console.log(removeLastUser());

//------------------------------------------------------------------------------------------------------------------------