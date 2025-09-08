module.exports = [
  58812,
  (e) => {
    'use strict';
    e.s(['execAsync', () => t]);
    var i = e.i(33405);
    let t = e.i(24361).promisify(i.exec);
  },
  75201,
  (e) => {
    'use strict';
    e.s(['getMachineId', () => c]);
    var i = e.i(5365),
      t = e.i(58812),
      r = e.i(43170);
    async function c() {
      let e = '%windir%\\System32\\REG.exe';
      'ia32' === i.arch &&
        'PROCESSOR_ARCHITEW6432' in i.env &&
        (e = '%windir%\\sysnative\\cmd.exe /c ' + e);
      try {
        let i = (
          await (0, t.execAsync)(
            `${e} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`
          )
        ).stdout.split('REG_SZ');
        if (2 === i.length) return i[1].trim();
      } catch (e) {
        r.diag.debug(`error reading machine id: ${e}`);
      }
    }
  },
];

//# sourceMappingURL=ef9f5_%40opentelemetry_resources_build_esm_detectors_platform_node_machine-id_f021ff1a._.js.map
