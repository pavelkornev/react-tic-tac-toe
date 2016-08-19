import 'babel-polyfill';
import express from 'express';
import { statSync } from 'fs';

import defaultLayout from './layouts/Default';
import configureStore from './store/configureStore';

const app = express();
const port = process.argv[2]; // FIXME: move to ENV or somewhere else

app.use(express.static(__dirname + '/../build/assets'));

app.use((req, res) => {
  const store = configureStore();

  // TODO: вынести из каждого запроса наверх
  let buildFile;
  try {
    buildFile = statSync(__dirname + '/../build/assets/core.js');
  } catch (e) {
    res.status(500).send('Please build app before running!');
    return;
  }

  const buildVersion = (new Date(buildFile.mtime)).getTime();

  res.status(200).send(
    defaultLayout(
      JSON.stringify(store.getState()),
      buildVersion
    )
  );
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎 Open browser in browser - http://127.0.0.1:%s/", port);
  }
});
