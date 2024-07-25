export default class formatDatas {
    constructor(obj) {
		/* Sometimes todayScore doesn't exist but exists in the score property, 
        so we assign a new property todayScore. */
		if (obj['score']) { 
            obj['todayScore'] = obj['score']; 
            delete obj.score; 
        }
        
		return obj;
	}
}