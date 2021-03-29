const activeTab = (event, tabId) => {
	const tabs = document.querySelectorAll(`.tab-item`);
	const tabBtns = document.querySelectorAll(`.tab-btn`);
	tabs.forEach((tab) => {
		tab.classList.remove("active");
	});
	tabBtns.forEach((tab) => {
		tab.classList.remove("active");
	});

	event.currentTarget.className += " active";
	document.getElementById(tabId).classList.add("active");
};

(() => {
	document.getElementById("scrollToTop").addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
})();
