if (document.querySelector('.proj__tab-outer')) {
  const tabBtn = document.querySelectorAll('.proj__tab-btn'),
    tabContent = document.querySelectorAll('.proj__tab-content');

  tabBtn.forEach(onTabBtnClick);

  function onTabBtnClick(item) {
    item.addEventListener('click', () => {
      const currentBtn = item,
        tabId = currentBtn.getAttribute('data-proj-tab'),
        currentTabContent = document.querySelector(tabId);


      if (!currentBtn.classList.contains('acitve')) {
        tabBtn.forEach((item) => {
          item.classList.remove('active');
        });
        tabContent.forEach((item) => {
          item.classList.remove('active');
        });


        currentBtn.classList.add('active');
        currentTabContent.classList.add('active');
      }
    });
  }

  document.querySelector('.proj__tab-btn').click();
}
