import PropTypes from 'prop-types';

/**
 * Render a button with an image
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
export default function SidebarButton({ logo }) {
	return (
		<button className="sidebar-button">
			<img src={logo} alt="" className="sidebar-button-logo" />
		</button>
	)
}

SidebarButton.propTypes = {
	/**
	 * Logo path
	 */
	logo: PropTypes.string.isRequired,
}