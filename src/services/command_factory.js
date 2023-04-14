const MetadataCommand = require('./metadata_command');
const WMicCommand = require('./wmic_command');
const MetadataCommandProxy = require('./metadata_command_proxy');
const AdapterCommand = require('./adapter_command');

class CommandFactory {
    static getInstance(type, filePath, withHexadecimalId, onlyCommonFiled) {
        const map = CommandFactory.loadCommand(filePath, withHexadecimalId, onlyCommonFiled);
        return map.get(type);
    }

    static loadCommand(filePath, withHexadecimalId, onlyCommonFiled) {
        const map = new Map();
        map.set('exiftool', new MetadataCommand(filePath, withHexadecimalId, onlyCommonFiled));
        map.set('wmic', new WMicCommand(filePath, withHexadecimalId, onlyCommonFiled));
        map.set('proxy', new MetadataCommandProxy(filePath, withHexadecimalId, onlyCommonFiled));
        map.set('adapter', new AdapterCommand(filePath, withHexadecimalId, onlyCommonFiled));

        return map;
    }
}

module.exports = CommandFactory;
