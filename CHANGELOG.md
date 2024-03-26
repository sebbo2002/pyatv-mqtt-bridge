## [7.0.5](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v7.0.4...v7.0.5) (2024-03-26)

## [7.0.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v7.0.3...v7.0.4) (2024-03-02)

## [7.0.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v7.0.2...v7.0.3) (2024-02-04)

## [7.0.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v7.0.1...v7.0.2) (2023-12-30)


### Bug Fixes

* Fix Docker container ([8c340ae](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/8c340ae7623673bc875897fd5d1a303b83d2cd49)), closes [#301](https://github.com/sebbo2002/pyatv-mqtt-bridge/issues/301)

## [7.0.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v7.0.0...v7.0.1) (2023-12-16)

# [7.0.0](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.3...v7.0.0) (2023-11-23)


### Build System

* **Docker:** Update pyatv in Docker container to latest version ([2f79b2f](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/2f79b2fdea88704032eb40eb3672dd588c9f3cc2))


### Features

* Log pyatv output of push_updates ([618adc6](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/618adc6051b70789493da0932466a33ac04fc034))


### BREAKING CHANGES

* **Docker:** This removes the Docker Image for ARMv7, as they are not provided anymore by pyatv since v0.14.4 (Details: https://github.com/postlund/pyatv/commit/b0991698a3eca10ee12e654bbe1f436326872316)

## [6.0.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.2...v6.0.3) (2023-10-25)


### Reverts

* Revert "ci: Run tests with node.js v18, v20 and v21" ([405853b](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/405853bbd7fc55eb224ff657af7dab26f9482d88))

## [6.0.3-develop.7](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.3-develop.6...v6.0.3-develop.7) (2023-10-18)


### Reverts

* Revert "ci: Run tests with node.js v18, v20 and v21" ([1b245a5](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/1b245a58587bc6871e8b1633beff1f1bca05970f))

## [6.0.3-develop.6](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.3-develop.5...v6.0.3-develop.6) (2023-10-18)

## [6.0.3-develop.5](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.3-develop.4...v6.0.3-develop.5) (2023-10-16)

## [6.0.3-develop.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.3-develop.3...v6.0.3-develop.4) (2023-10-02)

## [6.0.3-develop.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.3-develop.2...v6.0.3-develop.3) (2023-09-27)

## [6.0.3-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.3-develop.1...v6.0.3-develop.2) (2023-09-26)

## [6.0.3-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.2...v6.0.3-develop.1) (2023-09-23)

## [6.0.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.1...v6.0.2) (2023-09-18)

## [6.0.2-develop.6](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.2-develop.5...v6.0.2-develop.6) (2023-09-15)

## [6.0.2-develop.5](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.2-develop.4...v6.0.2-develop.5) (2023-09-01)

## [6.0.2-develop.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.2-develop.3...v6.0.2-develop.4) (2023-09-01)

## [6.0.2-develop.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.2-develop.2...v6.0.2-develop.3) (2023-08-24)

## [6.0.2-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.2-develop.1...v6.0.2-develop.2) (2023-08-23)


### Reverts

* Revert "ci: Downgrade is-semantic-release till it's fixed" ([91c2ab5](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/91c2ab59d0559a060c11d07973382c465dd3345d))

## [6.0.2-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.1...v6.0.2-develop.1) (2023-07-18)

## [6.0.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.0...v6.0.1) (2023-07-11)

## [6.0.1-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v6.0.0...v6.0.1-develop.1) (2023-06-22)

# [6.0.0](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v5.1.0...v6.0.0) (2023-06-14)


### Build System

* Deprecate node.js v14 / v17 ([7a2de45](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/7a2de45c12f19a1ec441b3a004f4aa935efc197c))


### BREAKING CHANGES

* The node.js versions v14 and v17 are no longer maintained and are therefore no longer supported. See https://nodejs.dev/en/about/releases/ for more details on node.js release cycles.

# [6.0.0-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v5.1.1-develop.1...v6.0.0-develop.1) (2023-06-14)


### Build System

* Deprecate node.js v14 / v17 ([7a2de45](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/7a2de45c12f19a1ec441b3a004f4aa935efc197c))


### BREAKING CHANGES

* The node.js versions v14 and v17 are no longer maintained and are therefore no longer supported. See https://nodejs.dev/en/about/releases/ for more details on node.js release cycles.

## [5.1.1-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v5.1.0...v5.1.1-develop.1) (2023-05-26)

# [5.1.0](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v5.0.0...v5.1.0) (2023-05-02)


### Features

* Launch Apps ([2c58c35](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/2c58c35b16cefb7895d1baac49c7c84b33db11e4)), closes [#223](https://github.com/sebbo2002/pyatv-mqtt-bridge/issues/223)

# [5.1.0-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v5.1.0-develop.1...v5.1.0-develop.2) (2023-04-29)

# [5.1.0-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v5.0.0...v5.1.0-develop.1) (2023-03-31)


### Features

* Launch Apps ([2c58c35](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/2c58c35b16cefb7895d1baac49c7c84b33db11e4)), closes [#223](https://github.com/sebbo2002/pyatv-mqtt-bridge/issues/223)

# [5.0.0](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.2...v5.0.0) (2023-03-31)


### Build System

* Deprecate node.js 12 ([426588b](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/426588b4bb7bde2924bbc92006ca839e960872e1))


### BREAKING CHANGES

* From now on, only node.js ^14.8.0 || >=16.0.0 are supported

# [5.0.0-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v5.0.0-develop.1...v5.0.0-develop.2) (2023-03-31)

# [5.0.0-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.3-develop.5...v5.0.0-develop.1) (2023-02-12)


### Build System

* Deprecate node.js 12 ([426588b](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/426588b4bb7bde2924bbc92006ca839e960872e1))


### BREAKING CHANGES

* From now on, only node.js ^14.8.0 || >=16.0.0 are supported

## [4.0.3-develop.5](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.3-develop.4...v4.0.3-develop.5) (2023-01-01)

## [4.0.3-develop.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.3-develop.3...v4.0.3-develop.4) (2022-12-07)

## [4.0.3-develop.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.3-develop.2...v4.0.3-develop.3) (2022-12-04)

## [4.0.3-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.3-develop.1...v4.0.3-develop.2) (2022-11-20)

## [4.0.3-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.2...v4.0.3-develop.1) (2022-11-17)

## [4.0.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.1...v4.0.2) (2022-10-25)

## [4.0.2-develop.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.2-develop.3...v4.0.2-develop.4) (2022-10-25)

## [4.0.2-develop.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.2-develop.2...v4.0.2-develop.3) (2022-10-14)

## [4.0.2-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.2-develop.1...v4.0.2-develop.2) (2022-10-14)

## [4.0.2-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.1...v4.0.2-develop.1) (2022-10-14)

## [4.0.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.0...v4.0.1) (2022-10-09)

## [4.0.1-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.0...v4.0.1-develop.1) (2022-10-08)

# [4.0.0](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.4...v4.0.0) (2022-07-25)


### Build System

* Native ESM support ([7b86a4f](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/7b86a4f1187c387a3a5792e1fb72d822b04e3631))


### BREAKING CHANGES

* Only Support for node.js ^12.20.0 || >=14.13.1

# [4.0.0-develop.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.0-develop.2...v4.0.0-develop.3) (2022-07-25)

# [4.0.0-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v4.0.0-develop.1...v4.0.0-develop.2) (2022-07-25)

# [4.0.0-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.5-develop.5...v4.0.0-develop.1) (2022-07-25)


### Build System

* Native ESM support ([7b86a4f](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/7b86a4f1187c387a3a5792e1fb72d822b04e3631))


### BREAKING CHANGES

* Only Support for node.js ^12.20.0 || >=14.13.1

## [3.1.5-develop.5](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.5-develop.4...v3.1.5-develop.5) (2022-07-16)

## [3.1.5-develop.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.5-develop.3...v3.1.5-develop.4) (2022-07-16)

## [3.1.5-develop.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.5-develop.2...v3.1.5-develop.3) (2022-06-22)

## [3.1.5-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.5-develop.1...v3.1.5-develop.2) (2022-06-14)

## [3.1.5-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.4...v3.1.5-develop.1) (2022-06-07)

## [3.1.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.3...v3.1.4) (2022-05-20)


### Reverts

* Revert "ci: Remove docker setup" ([655068b](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/655068b3b9c6139181ae87421db5f8144fae3e18))

## [3.1.4-develop.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.4-develop.3...v3.1.4-develop.4) (2022-05-20)


### Reverts

* Revert "ci: Remove GH_TOKEN and use GITHUB_TOKEN" ([b5c2eb6](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/b5c2eb66170b38bda1e49ad5bb5cf02bd13eb8e4))

## [3.1.4-develop.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.4-develop.2...v3.1.4-develop.3) (2022-05-16)

## [3.1.4-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.4-develop.1...v3.1.4-develop.2) (2022-05-03)

## [3.1.4-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.3...v3.1.4-develop.1) (2022-05-01)

## [3.1.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.2...v3.1.3) (2022-04-25)

## [3.1.3-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.3-develop.1...v3.1.3-develop.2) (2022-04-25)

## [3.1.3-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.2...v3.1.3-develop.1) (2022-04-25)

## [3.1.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.1...v3.1.2) (2022-03-31)

## [3.1.2-develop.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.2-develop.3...v3.1.2-develop.4) (2022-03-31)

## [3.1.2-develop.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.2-develop.2...v3.1.2-develop.3) (2022-03-31)

## [3.1.2-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.2-develop.1...v3.1.2-develop.2) (2022-03-01)

## [3.1.2-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.1...v3.1.2-develop.1) (2022-01-21)

## [3.1.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.0...v3.1.1) (2021-12-13)


### Bug Fixes

* **CI:** Fix DockerHub container release ([01b7534](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/01b753406d1f1ef24a949c7d7b946d99b779d013))
* **CI:** Fix DockerHub container release ([bd44aa9](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/bd44aa9e3a7c7ae0c842a6c281030183f87362af))

## [3.1.1-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.1-develop.1...v3.1.1-develop.2) (2021-12-05)


### Bug Fixes

* **CI:** Fix DockerHub container release ([01b7534](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/01b753406d1f1ef24a949c7d7b946d99b779d013))

## [3.1.1-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.0...v3.1.1-develop.1) (2021-12-05)


### Bug Fixes

* **CI:** Fix DockerHub container release ([bd44aa9](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/bd44aa9e3a7c7ae0c842a6c281030183f87362af))

# [3.1.0](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.0.0...v3.1.0) (2021-10-22)


### Bug Fixes

* **Dockerfile:** Fix `unable to find user node` ([709cb5e](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/709cb5eb17630f973344b95de1763bd3ffec6109)), closes [#99](https://github.com/sebbo2002/pyatv-mqtt-bridge/issues/99)


### Features

* **Dockerfile:** Use offical pyatv docker image as base image ([b60ba38](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/b60ba38c7aef3724fea4a4d6ac759352d1fb28b7))

# [3.1.0-develop.5](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.0-develop.4...v3.1.0-develop.5) (2021-10-10)


### Bug Fixes

* **Dockerfile:** Fix `unable to find user node` ([709cb5e](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/709cb5eb17630f973344b95de1763bd3ffec6109)), closes [#99](https://github.com/sebbo2002/pyatv-mqtt-bridge/issues/99)

# [3.1.0-develop.4](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.0-develop.3...v3.1.0-develop.4) (2021-10-10)

# [3.1.0-develop.3](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.0-develop.2...v3.1.0-develop.3) (2021-10-10)

# [3.1.0-develop.2](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.1.0-develop.1...v3.1.0-develop.2) (2021-10-09)

# [3.1.0-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.0.1-develop.1...v3.1.0-develop.1) (2021-10-09)


### Features

* **Dockerfile:** Use offical pyatv docker image as base image ([b60ba38](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/b60ba38c7aef3724fea4a4d6ac759352d1fb28b7))

## [3.0.1-develop.1](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v3.0.0...v3.0.1-develop.1) (2021-09-01)

# [3.0.0](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v2.2.0...v3.0.0) (2021-07-31)


### chore

* Remove node.js 10 Support ([2b910c0](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/2b910c09bc8a41085fc4472159494d8738d5521e))


### BREAKING CHANGES

* Removed support for node.js v10

# [2.0.0-develop.22](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v2.0.0-develop.21...v2.0.0-develop.22) (2021-07-29)

# [2.0.0-develop.21](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v2.0.0-develop.20...v2.0.0-develop.21) (2021-06-11)


### chore

* Remove node.js 10 Support ([2b910c0](https://github.com/sebbo2002/pyatv-mqtt-bridge/commit/2b910c09bc8a41085fc4472159494d8738d5521e))


### BREAKING CHANGES

* Removed support for node.js v10

# [2.0.0-develop.20](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v2.0.0-develop.19...v2.0.0-develop.20) (2021-05-22)

# [2.0.0-develop.19](https://github.com/sebbo2002/pyatv-mqtt-bridge/compare/v2.0.0-develop.18...v2.0.0-develop.19) (2021-05-22)
