const zabbixService = require('../services/zabbix.service');

exports.importFile = async (req, res) => {
  const reponse = await zabbixService.importar(req.files);
  res.send(reponse);
};
