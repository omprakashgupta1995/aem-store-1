import { loadScript } from '../../scripts/aem.js';
import { getConfigValue } from '../../scripts/configs.js';

(async () => {
  const widgetProd = 'https://livesearch-autocomplete.magento-ds.com/v0/LiveSearchAutocomplete.js';
  await loadScript(widgetProd);

  const storeDetails = {
    environmentId: await getConfigValue('commerce-environment-id'),
    environmentType: 'testing',
    apiKey: await getConfigValue('commerce-x-api-key'),
    websiteCode: await getConfigValue('commerce-website-code'),
    storeCode: await getConfigValue('commerce-store-code'),
    storeViewCode: await getConfigValue('commerce-store-view-code'),
    config: {
      pageSize: 8,
      perPageConfig: {
        pageSizeOptions: '12,24,36',
        defaultPageSizeOption: '24',
      },
      minQueryLength: '2',
      currencySymbol: '$',
      currencyRate: '1',
      displayOutOfStock: true,
      allowAllProducts: false,
    },
    context: {
      customerGroup: await getConfigValue('commerce-customer-group'),
    },
    route: ({ sku }) => `/products/missing-url-key/${sku}`, // TODO: We need urlKey as parameter as well!
    searchRoute: {
      route: '/search',
      query: 'q',
    },
  };

  await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (window.LiveSearchAutocomplete) {
        clearInterval(interval);
        resolve();
      }
    }, 200);
  });

  // eslint-disable-next-line no-new
  new window.LiveSearchAutocomplete(storeDetails);
})();
