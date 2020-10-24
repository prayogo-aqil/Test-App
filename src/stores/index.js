import React from 'react';
// import { create } from 'mobx-persist';
// import localForage from 'localforage';

import AccountStore from './AccountStore';

// const hydrate = create({ storage: window.localStorage });
// const hydrate = create({ storage: localForage });

const stores = {
  accountStore: new AccountStore(),
};

// hydrate('accountStore', stores.accountStore);

const storesContext = React.createContext(stores);

export default storesContext;
