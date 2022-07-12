// src/App.js
import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";


function App() {
  let randomContact = contacts[Math.floor(Math.random()*contacts.length)];//para hacer la iteracion 3(redondea,haceunrandom y multiplica por el largo del array)
  let fiveContacts = contacts.slice(0,5)//da los primeros 5 valores del array
                               //fiveContacts xa 1a iteracion//randomContact xa la 3a iteracion  
  const [contactsArr, setContactsArr] = useState(fiveContacts,randomContact);
  //iteracion-2-metodo-1 Forma de Burro(como yo). Usando ternarios es mas facil.
  // const renderOscar = (contact) => {
    //   if (contact.wonOscar) {
      //     return '🏆';                              
      //   } 
      // };
      // const renderEmmy = (contact) => {
        //   if (contact.wonEmmy) {
          //     return '🏆';
          //   } 
          // };
          
          //iteración 3
          const addRandomContact = () => {
            if (contactsArr.includes(randomContact)) {
              randomContact = contactsArr[Math.floor(Math.random() * contactsArr.length)];
            }
            setContactsArr([...contactsArr,randomContact ]) 
         //iteración3
  };
  
  return <div className="App">
  <button onClick={ () => addRandomContact() } className="btn-random">
    Add random
  </button>
    <table>
      <thead>
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
        </tr>
      </thead>
      
      <tbody>
      {contactsArr.map((thisContact) => {
          return (         
        <tr>
          <td><img src={thisContact.pictureUrl} alt=""></img> </td>
          <td>{thisContact.name}</td>
          <td>{thisContact.popularity}</td>
          {/* iteracion-2-metodo-1 usando la funcion de arriba */}
          {/* <td>{renderOscar(thisContact)}</td>
          <td>{renderEmmy(thisContact)}</td> */}
          <td>{thisContact.wonOscar ?  '🏆' : ' '}</td>     
                                                        {/* iteracion-2-metodo-2(mas facil) Usando ternarios */}
          <td>{thisContact.wonEmmy ?  '🏆' : ' '}</td>       
        </tr>
           
          );
        })
      }
      </tbody>
    </table>
  </div>;
}
export default App;

