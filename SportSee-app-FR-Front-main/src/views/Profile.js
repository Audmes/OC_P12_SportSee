import { useParams } from 'react-router-dom';

import { useFetch } from '../utils/useFetch';
import Card from '../components/Card';
import ChartsCard from '../components/ChartsCard';
// import ChartActivity from '../components/ChartActivity';
// import ChartAverageSessions from '../components/ChartAverageSessions';
// import ChartGoal from '../components/ChartGoal';
// import ChartPerformance from '../components/ChartPerformance';

import energy from '../assets/images/energy.svg';
import chicken from '../assets/images/chicken.svg';
import apple from '../assets/images/apple.svg';
import cheeseburger from '../assets/images/cheeseburger.svg';

/**
 * Render Profile page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
function Profile() {
	document.title = 'Profile - SportSee';

	const { userId } = useParams();
	/* Fetch the data from API or mocked data */
	const user = useFetch(
		`https://sportsee.abcoding.fr/user/${userId}`,
		userId,
		window.location.origin + '/SportSee/mocked-data/user-main-data.json'
	);
	const activity = useFetch(
		`https://sportsee.abcoding.fr/user/${userId}/activity`,
		userId,
		window.location.origin + '/SportSee/mocked-data/user-activity.json'
	);
	const averageSessions = useFetch(
		`https://sportsee.abcoding.fr/user/${userId}/average-sessions`,
		userId,
		window.location.origin +
			'/SportSee/mocked-data/user-average-sessions.json'
	);
	const performance = useFetch(
		`https://sportsee.abcoding.fr/user/${userId}/performance`,
		userId,
		window.location.origin + '/SportSee/mocked-data/user-performance.json'
	);

	/**
	 * Function to return on dataObject with the data from the API if available, or the mocked data if not.
	 * @param {Object} dataObject - Object that will contain the data .
	 * @param {Object} apiData - Data from the API.
	 * @returns The dataObject is returned.
	 */
	const formatData = (dataObject, apiData) => {
		if (apiData.apiData) {
			dataObject = apiData.apiData
			return dataObject
		} else if (apiData.mockedData) {
			dataObject = apiData.mockedData
			return dataObject
		}
	}

	/* Init the dataObject and format the data */
	let userData = {};
	userData = formatData(userData, user);
	let activityData = {};
	activityData = formatData(activityData, activity);
	let averageSessionsData = {};
	averageSessionsData = formatData(averageSessionsData, averageSessions);
	let performanceData = {};
	performanceData = formatData(performanceData, performance);

	/* If the data is loading, display a loading message to the user */
	if (
		user.isLoading ||
		activity.isLoading ||
		averageSessions.isLoading ||
		performance.isLoading
	) {
		return (
			<section className="profile-wrapper">
				<h2 className="center">Chargement...</h2>
			</section>
		)
	}

	/* If the fetches on the API and the mocked data returns errors, display a error message to the user */
	if (
		(user.errorAPI && user.errorMocked) ||
		(activity.errorAPI && activity.errorMocked) ||
		(averageSessions.errorAPI && averageSessions.errorMocked) ||
		(performance.errorAPI && performance.errorMocked)
	) {
		return (
			<section className="profile-wrapper">
				<h2 className="center">Une erreur est survenue !</h2>
			</section>
		)
	}

	return (
		<section className="profile-wrapper">
			{userData && (
				<div className="profile">
					<h2 className="profile-title">
						Bonjour{' '}
						<span className="profile-firstName">
							{userData.userInfos.firstName}
						</span>
					</h2>
					<p className="profile-subtitle">
						Félicitation ! Vous avez explosé vos objectifs hier 👏
					</p>

					<div className="dashboard">
						<div className="dashboard-charts-wrapper">
							
						</div>
						<div className="dashboard-aside">
							<Card
								userKeyData={userData.keyData.calorieCount}
								unit="kCal"
								subtitle="Calories"
								className="calorie"
								logo={energy}
							/>
							<Card
								userKeyData={userData.keyData.proteinCount}
								unit="g"
								subtitle="Proteines"
								className="protein"
								logo={chicken}
							/>
							<Card
								userKeyData={userData.keyData.carbohydrateCount}
								unit="g"
								subtitle="Glucides"
								className="carbohydrate"
								logo={apple}
							/>
							<Card
								userKeyData={userData.keyData.lipidCount}
								unit="g"
								subtitle="Lipides"
								className="lipid"
								logo={cheeseburger}
							/>
						</div>
					</div>
					{/* <div className="dashboard">
						<div className="dashboard-charts-wrapper">
							<div className="activity-charts">
								{activityData && (
									<ChartActivity
										data={activityData.sessions}
									/>
								)}
							</div>
							<div className="small-card-wrapper">
								{averageSessionsData && (
									<ChartsCard
										className="average-sessions"
										content={
											<ChartAverageSessions
												data={
													averageSessionsData.sessions
												}
											/>
										}
									/>
								)}

								{performanceData && (
									<ChartsCard
										className="performance"
										content={
											<ChartPerformance
												data={performanceData}
											/>
										}
									/>
								)}
								{userData && (
									<ChartsCard
										className="score"
										content={<ChartGoal data={userData} />}
									/>
								)}
							</div>
						</div>

						<div className="dashboard-aside">
							<Card
								userKeyData={userData.keyData.calorieCount}
								unit="kCal"
								subtitle="Calories"
								className="calorie"
								logo={energy}
							/>
							<Card
								userKeyData={userData.keyData.proteinCount}
								unit="g"
								subtitle="Proteines"
								className="protein"
								logo={chicken}
							/>
							<Card
								userKeyData={userData.keyData.carbohydrateCount}
								unit="g"
								subtitle="Glucides"
								className="carbohydrate"
								logo={apple}
							/>
							<Card
								userKeyData={userData.keyData.lipidCount}
								unit="g"
								subtitle="Lipides"
								className="lipid"
								logo={cheeseburger}
							/>
						</div>
					</div> */}
				</div>
			)}
		</section>
	)
}

export default Profile;