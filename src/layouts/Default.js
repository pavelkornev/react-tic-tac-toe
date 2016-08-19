export default (reduxState, buildVersion) => (`
  <!DOCTYPE html>
  <html id="nojs">
  <head>
    <script>document.documentElement.id = 'js';</script>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>React Tic-Tac-Toe</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"/>
    <link rel="stylesheet" href="/styles.css"/>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" charset="utf-8">
      window.__INITIAL_STATE__ = ${reduxState};
    </script>
    <script src="/core.js?${buildVersion}"></script>
  </body>
  </html>
`)