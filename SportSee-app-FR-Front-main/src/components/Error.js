/**
 * Render a div with the text 'PAGE 404' inside of it.
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
const Error = () => {
	return (
		<div className="error-noPage">
			File not found
			<br />
			404
		</div>
	)
}

export default Error;