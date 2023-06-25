import PropTypes from 'prop-types';

export const Filter = ({ filterValue }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input onChange={filterValue} id="filter" type="text" />
    </>
 
  )
}

Filter.propTypes = {
  filterValue: PropTypes.func.isRequired
} 