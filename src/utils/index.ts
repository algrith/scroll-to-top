export const ScrollToTopErrors = {
	InvalidDisplay: (display: any) => {
		return `'display parameter must be a valid CSS display string. Supplied display: ${display}`;
	},
	ControllerNotFound: () => {
		return `Controller element not found.`;
	}
};