module.exports = [
  17556,
  (a) => {
    'use strict';
    a.s(['getMachineId', () => d]);
    var b = a.i(22734),
      c = a.i(84151);
    async function d() {
      for (let a of ['/etc/machine-id', '/var/lib/dbus/machine-id'])
        try {
          return (await b.promises.readFile(a, { encoding: 'utf8' })).trim();
        } catch (a) {
          c.diag.debug(`error reading machine id: ${a}`);
        }
    }
  },
];

//# sourceMappingURL=abc3c_build_esm_detectors_platform_node_machine-id_getMachineId-linux_223c5e3b.js.map
