const { toMatchImageSnapshot, configureToMatchImageSnapshot } = require('jest-image-snapshot')

const imageSnapshotConfig = {
  comparisonMethod: 'ssim',
  customDiffConfig: {
    ssim: 'fast'
  },
  failureThreshold: 0.001,
  failureThresholdType: 'percent',
  // apply blur to tolerate intermittent inaccuracy on snapshot
  blur: 2
}

configureToMatchImageSnapshot(imageSnapshotConfig);

expect.extend({ toMatchImageSnapshot });
