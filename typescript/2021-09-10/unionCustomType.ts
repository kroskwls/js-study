// 액션 타입과 페이로드가 있는 클래스
export class SearchAction {
	actinoType = 'SEARCH';
	constructor(readonly padload: { searchQuery: string }) { }
}

export class SearchSuccessAction {
	actionType = 'SEARCH_SUCCESS';
	constructor(readonly padload: { searchResult: string[] }) { }
}

// 액션 타입만 있는 클래스
export class SearchFailedAction {
	actionType = 'SEARCH_FAILED';
}

// 유니온 타입 선언
export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction;
