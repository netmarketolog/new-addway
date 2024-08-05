import breadcrumbs from '../breadcrumbs.json';

export default function getBreadcrumbs() {
  const currentUrl = window.location.pathname;

  const locationArray = breadcrumbs[currentUrl];

  if (!locationArray) return;

  const breadcrumbWrapper = document.querySelector('.breadcrumb>ul');

  const markup = locationArray
    .map(it => {
      return `<li key="${it.path}"><a href="${it.path}">${it.title}</a></li>`;
    })
    .join('');

  breadcrumbWrapper.innerHTML = markup;
}
