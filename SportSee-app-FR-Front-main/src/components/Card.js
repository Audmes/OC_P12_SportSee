import PropTypes from 'prop-types';

/**
 * Render a div (card) containing an image and text
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function Card({ userKeyData, unit, subtitle, className, logo }) {
	return (
		<div className="card ">
			<div className={'card-icon-wrapper ' + className}>
				<img src={logo} alt="" className="card-icon center" />
			</div>
			<div className="card-data-wrapper">
				<p className="card-title">
					{userKeyData.toLocaleString('en-US')}
					{unit}
				</p>
				<p className="card-subtitle">{subtitle}</p>
			</div>
		</div>
	)
}

Card.propTypes = {
	/**
	 * Data number to be displayed in the card
	 */
	userKeyData: PropTypes.number.isRequired,
	/**
	 * Unit of the data
	 */
	unit: PropTypes.string.isRequired,
	/**
	 * Subtitle of the card
	 */
	subtitle: PropTypes.string.isRequired,
	/**
	 * Class name of the card
	 */
	className: PropTypes.string,
	/**
	 * Logo path of the card
	 */
	logo: PropTypes.string.isRequired,
}

export default Card;