const {
	app,
	requireDir
} = require('yufeng-decorates');
requireDir(__dirname, 'controller');
app.listen(8088);