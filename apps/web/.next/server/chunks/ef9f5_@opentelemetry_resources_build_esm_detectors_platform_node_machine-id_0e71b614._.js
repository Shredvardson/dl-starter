module.exports = [
  58812,
  (e) => {
    'use strict';
    e.s(['execAsync', () => r]);
    var i = e.i(33405);
    let r = e.i(24361).promisify(i.exec);
  },
  80424,
  (e) => {
    'use strict';
    e.s(['getMachineId', () => s]);
    var i = e.i(22734),
      r = e.i(58812),
      t = e.i(43170);
    async function s() {
      try {
        return (await i.promises.readFile('/etc/hostid', { encoding: 'utf8' })).trim();
      } catch (e) {
        t.diag.debug(`error reading machine id: ${e}`);
      }
      try {
        return (await (0, r.execAsync)('kenv -q smbios.system.uuid')).stdout.trim();
      } catch (e) {
        t.diag.debug(`error reading machine id: ${e}`);
      }
    }
  },
];

//# sourceMappingURL=ef9f5_%40opentelemetry_resources_build_esm_detectors_platform_node_machine-id_0e71b614._.js.map
