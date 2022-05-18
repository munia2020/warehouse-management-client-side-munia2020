// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';

// const AddedItems = () => {
//     const [user] = useAuthState(auth);
//     console.log(user.email);
//     const [items, setItems] = useState([]);
//     console.log(items)
//     useEffect(()=>{
//         fetch(`http://localhost:5000/inventory/${user?.email}`)
//         .then(res=>res.json())
//         .then(data => console.log(data))
//     },[user.email]);
//     return (
//         <div>
//             <h2>my items: {items.length}</h2>
//         </div>
//     );
// };

// export default AddedItems;