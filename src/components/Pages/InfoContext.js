// // NOT USED
// import React, { useState, createContext } from 'react';

// export const InfoContext = createContext();

// export const InfoProvider = props => {
//   const [selectedEmail, setSelectedEmail] = useState("");
//   const [selectedFirstName, setSelectedFirstName] = useState("");
//   const [selectedLastName, setSelectedLastName] = useState("");

//   const [userInfo, setUserInfo] = useState({
//     email: selectedEmail,
//     firstName: selectedFirstName,
//     lastName: selectedLastName
//   })

//   return (
//     <InfoProvider>
//       {props.children}
//     </InfoProvider>
//   );
// }