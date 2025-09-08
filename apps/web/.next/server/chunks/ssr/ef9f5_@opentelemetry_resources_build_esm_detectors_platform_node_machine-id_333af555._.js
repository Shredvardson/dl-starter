module.exports = [
  80925,
  (a) => {
    'use strict';
    a.s(['execAsync', () => c]);
    var b = a.i(33405);
    let c = a.i(24361).promisify(b.exec);
  },
  33316,
  (a) => {
    'use strict';
    a.s(['getMachineId', () => e]);
    var b = a.i(22734),
      c = a.i(80925),
      d = a.i(84151);
    async function e() {
      try {
        return (await b.promises.readFile('/etc/hostid', { encoding: 'utf8' })).trim();
      } catch (a) {
        d.diag.debug(`error reading machine id: ${a}`);
      }
      try {
        return (await (0, c.execAsync)('kenv -q smbios.system.uuid')).stdout.trim();
      } catch (a) {
        d.diag.debug(`error reading machine id: ${a}`);
      }
    }
  },
];

//# sourceMappingURL=ef9f5_%40opentelemetry_resources_build_esm_detectors_platform_node_machine-id_333af555._.js.map
