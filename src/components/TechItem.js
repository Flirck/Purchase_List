import React from 'react';
import PropTypes from 'prop-types';

import { FaMinusCircle } from 'react-icons/fa';
import { RemoveButton, DivList } from '../styles/styles';

function TechItem({tech, onDelete}) {
  return (
    <li>
      {tech}
      <RemoveButton onClick={onDelete} type="button" ><FaMinusCircle  /></RemoveButton>
    </li>   
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;