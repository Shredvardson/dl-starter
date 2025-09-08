module.exports = [
  30666,
  (e) => {
    'use strict';
    e.s(['getMachineId', () => a]);
    var i = e.i(22734),
      r = e.i(43170);
    async function a() {
      for (let e of ['/etc/machine-id', '/var/lib/dbus/machine-id'])
        try {
          return (await i.promises.readFile(e, { encoding: 'utf8' })).trim();
        } catch (e) {
          r.diag.debug(`error reading machine id: ${e}`);
        }
    }
  },
];

//# sourceMappingURL=abc3c_build_esm_detectors_platform_node_machine-id_getMachineId-linux_c2a27506.js.map
