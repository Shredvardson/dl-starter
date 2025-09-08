module.exports = [
  80925,
  (a) => {
    'use strict';
    a.s(['execAsync', () => c]);
    var b = a.i(33405);
    let c = a.i(24361).promisify(b.exec);
  },
  5870,
  (a) => {
    'use strict';
    a.s(['getMachineId', () => e]);
    var b = a.i(5365),
      c = a.i(80925),
      d = a.i(84151);
    async function e() {
      let a = '%windir%\\System32\\REG.exe';
      'ia32' === b.arch &&
        'PROCESSOR_ARCHITEW6432' in b.env &&
        (a = '%windir%\\sysnative\\cmd.exe /c ' + a);
      try {
        let b = (
          await (0, c.execAsync)(
            `${a} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`
          )
        ).stdout.split('REG_SZ');
        if (2 === b.length) return b[1].trim();
      } catch (a) {
        d.diag.debug(`error reading machine id: ${a}`);
      }
    }
  },
];

//# sourceMappingURL=ef9f5_%40opentelemetry_resources_build_esm_detectors_platform_node_machine-id_05aa4e2b._.js.map
