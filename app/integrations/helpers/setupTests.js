const { configureToMatchImageSnapshot } = require('jest-image-snapshot')

const imageSnapshotConfig = {
  comparisonMethod: 'ssim',
  customDiffConfig: {
    ssim: 'fast'
  },
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
  // apply blur to tolerate intermittent inaccuracy on snapshot
  blur: 1
}

const toMatchImageSnapshot = configureToMatchImageSnapshot(imageSnapshotConfig);

expect.extend({ toMatchImageSnapshot });
