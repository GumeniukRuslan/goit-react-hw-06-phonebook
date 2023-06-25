import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  if (!contacts.length) {
    return <p>No matches</p>
  }
  return(
    <ul>
      {contacts.map(contact => <li id={contact.id} key={contact.id}>{`${contact.name}: ${contact.number}`} <button onClick={deleteContact} type="button">Delete</button></li>)}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired
} 