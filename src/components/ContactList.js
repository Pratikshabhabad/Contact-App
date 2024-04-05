import React from "react";
import CardContact from "./contactCard";

const ContactList =(props) =>{

    console.log(props);
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };

 
    const renderContactList=props.contact?props.contact.map((contact)=>{
        return (
          <CardContact key={contact.id} contact={contact} clickHandler={deleteContactHandler}></CardContact>
        )

    }):null;
    return (
        <div className="main">
            <h2>Contact List</h2>
        <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};

export default ContactList;