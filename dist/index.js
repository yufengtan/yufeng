'use strict';

var _require = require('yufeng-decorates'),
    app = _require.app,
    requireDir = _require.requireDir;

requireDir(__dirname, 'controller');
app.listen(8088);