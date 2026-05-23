
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo_app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/demo_app/A1",
    "route": "/demo_app"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/A1"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/A2"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/A3"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/A4"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/A5"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 673, hash: 'c29991a450ce237576e815387b3b72f5065db2b6fb14e071af42b35c77df5b89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: 'dd632dd36707b146f0c92abd16b237fa3774d106af33fc888749c4c0c430ad9d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'A2/index.html': {size: 23811, hash: '73b6b33016e841462b1381a651dca4016c8c839419e82286ebe7bf5a93fb6ef0', text: () => import('./assets-chunks/A2_index_html.mjs').then(m => m.default)},
    'A4/index.html': {size: 40040, hash: '939cb88f0facab50c469cc3e32aae97e46c00c2b80b9d620de01ce906099a44f', text: () => import('./assets-chunks/A4_index_html.mjs').then(m => m.default)},
    'A1/index.html': {size: 29824, hash: '59e12a13185105079d6132834dcabe467904c54a66a3dbddded8298d5aaa91cb', text: () => import('./assets-chunks/A1_index_html.mjs').then(m => m.default)},
    'A3/index.html': {size: 38140, hash: '6c2eb29433334babafb256bbd446f73b8162afb7a65bfd1c4b0d6d52105d85f1', text: () => import('./assets-chunks/A3_index_html.mjs').then(m => m.default)},
    'A5/index.html': {size: 22040, hash: '0ab702aeff0f784eb8ebf4dca68522e5b467d0e6eb5a50cc86ca59742cd8af51', text: () => import('./assets-chunks/A5_index_html.mjs').then(m => m.default)},
    'styles-3DDID2XO.css': {size: 148, hash: '8NJEpuXm3G4', text: () => import('./assets-chunks/styles-3DDID2XO_css.mjs').then(m => m.default)}
  },
};
