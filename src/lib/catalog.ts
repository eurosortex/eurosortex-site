document.querySelectorAll<HTMLElement>('[data-interactive-catalog]').forEach((catalog) => {
  const filters = catalog.querySelectorAll<HTMLAnchorElement>('[data-local-filter]');
  const cards = catalog.querySelectorAll<HTMLElement>('.card[data-cat]');
  const count = catalog.querySelector<HTMLElement>('[data-catalog-count]');
  const categoryLink = catalog.querySelector<HTMLAnchorElement>('[data-category-link]');

  filters.forEach((filter) => {
    filter.setAttribute('role', 'button');
    filter.setAttribute('aria-pressed', String(filter.dataset.localFilter === 'all'));
    filter.removeAttribute('aria-current');
    filter.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        filter.click();
      }
    });
    filter.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const category = filter.dataset.localFilter;
      let visible = 0;
      cards.forEach((card) => {
        card.hidden = category !== 'all' && card.dataset.cat !== category;
        if (!card.hidden) visible++;
      });
      filters.forEach((item) => {
        item.classList.toggle('is-active', item === filter);
        item.setAttribute('aria-pressed', String(item === filter));
      });
      if (count) count.textContent = `${catalog.dataset.countLabel} ${visible} ${catalog.dataset.countOf} ${cards.length}`;
      if (categoryLink) {
        categoryLink.hidden = category === 'all';
        categoryLink.href = filter.href;
        categoryLink.textContent = `${catalog.dataset.categoryLabel}: ${filter.dataset.analyticsFilterLabel} ↗`;
      }
    });
  });
});
