import React from "react";
import Error from "../components/Error";

/**
 * Render Community page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
function NoPage() {
	document.title = '404 - SportSee'

	return (
		<section className="noPage">
			<Error />
		</section>
	)
}

export default NoPage;