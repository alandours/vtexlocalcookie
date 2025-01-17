const browser = chrome || browser;
const logs = true;

const reload = (response) => {
	const { reload, url, message, storeId } = response || {};

	if (logs && message)
		console.log(message, `(storeId: ${storeId})`);

	if (reload && url)
		window.location.href = url;
};

const { origin } = window.location;
browser.runtime.sendMessage({ origin }, reload);