const mongoose = require('mongoose');

const ZabbixSchema = mongoose.Schema(
  {
    severidade: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Zabbix', ZabbixSchema);
