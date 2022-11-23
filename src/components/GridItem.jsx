import PropTypes from "prop-types";
export const GridItem = ({ id, title, url }) => {
  return (
    <div key={id} className="card">
      <h4 className="text-white font-weight-light">{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
};

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
