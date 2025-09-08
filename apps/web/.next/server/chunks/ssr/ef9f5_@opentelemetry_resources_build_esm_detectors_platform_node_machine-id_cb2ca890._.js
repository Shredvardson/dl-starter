module.exports = [
  80925,
  (a) => {
    'use strict';
    a.s(['execAsync', () => c]);
    var b = a.i(33405);
    let c = a.i(24361).promisify(b.exec);
  },
  70707,
  (a) => {
    'use strict';
    a.s(['getMachineId', () => d]);
    var b = a.i(80925),
      c = a.i(84151);
    async function d() {
      try {
        let a = (await (0, b.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout
          .split('\n')
          .find((a) => a.includes('IOPlatformUUID'));
        if (!a) return;
        let c = a.split('" = "');
        if (2 === c.length) return c[1].slice(0, -1);
      } catch (a) {
        c.diag.debug(`error reading machine id: ${a}`);
      }
    }
  },
];

//# sourceMappingURL=ef9f5_%40opentelemetry_resources_build_esm_detectors_platform_node_machine-id_cb2ca890._.js.map
