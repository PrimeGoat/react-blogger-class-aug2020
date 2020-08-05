function searchIt(term) {
	return function(item) {
		return item.subject.toLowerCase().includes(term.toLowerCase());
	}
}

export default searchIt;
