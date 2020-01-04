module.exports = app => {
  const zabbixController = require('../controllers/zabbix.controller');

  app.post('/upload/zabbix', zabbixController.importFile);
};
