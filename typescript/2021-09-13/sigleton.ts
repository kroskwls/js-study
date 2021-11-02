class AppState {
	counter = 0;
	private static instanceRef: AppState;
	private constructor() { }
	static getInstance(): AppState {
		if (AppState.instanceRef === undefined) {
			AppState.instanceRef = new AppState();
		}

		return AppState.instanceRef;
	}
}
// 생성자의 접근자가 private이기 때문에 오류 발생
// const appState = new AppState();

const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();

appState1.counter++;
appState1.counter++;
console.log(`appState1: ${appState1.counter}, appState2: ${appState2.counter}`);

appState2.counter++;
appState2.counter++;
console.log(`appState1: ${appState1.counter}, appState2: ${appState2.counter}`);