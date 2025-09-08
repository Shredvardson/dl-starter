module.exports = [
  58812,
  (e) => {
    'use strict';
    e.s(['execAsync', () => t]);
    var i = e.i(33405);
    let t = e.i(24361).promisify(i.exec);
  },
  52266,
  (e) => {
    'use strict';
    e.s(['getMachineId', () => r]);
    var i = e.i(58812),
      t = e.i(43170);
    async function r() {
      try {
        let e = (await (0, i.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout
          .split('\n')
          .find((e) => e.includes('IOPlatformUUID'));
        if (!e) return;
        let t = e.split('" = "');
        if (2 === t.length) return t[1].slice(0, -1);
      } catch (e) {
        t.diag.debug(`error reading machine id: ${e}`);
      }
    }
  },
];

//# sourceMappingURL=ef9f5_%40opentelemetry_resources_build_esm_detectors_platform_node_machine-id_4ab45ca3._.js.map
