#!/usr/bin/env bash

if [[ "${BRANCH}" == "main" ]]
then
   DOCKER_TAG="latest"
else
   DOCKER_TAG="next"
fi


docker manifest create "sebbo2002/pyatv-mqtt-bridge:${VERSION}" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-x86_64" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-arm64" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-aarch64" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-amd64" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-i386"

docker manifest create "sebbo2002/pyatv-mqtt-bridge:${DOCKER_TAG}" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-x86_64" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-arm64" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-aarch64" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-amd64" \
    "sebbo2002/pyatv-mqtt-bridge:${VERSION}-i386"

docker manifest annotate --arch "amd64" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${DOCKER_TAG}" --variant "x86_64" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-x86_64"
docker manifest annotate --arch "arm64" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${DOCKER_TAG}" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-arm64"
docker manifest annotate --arch "arm64" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${DOCKER_TAG}" --variant "aarch64" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-aarch64"
docker manifest annotate --arch "amd64" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${DOCKER_TAG}" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-amd64"
docker manifest annotate --arch "386" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${DOCKER_TAG}" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-i386"

docker manifest annotate --arch "amd64" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${VERSION}" --variant "x86_64" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-x86_64"
docker manifest annotate --arch "arm64" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${VERSION}" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-arm64"
docker manifest annotate --arch "arm64" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${VERSION}" --variant "aarch64" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-aarch64"
docker manifest annotate --arch "amd64" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${VERSION}" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-amd64"
docker manifest annotate --arch "386" --os "linux" "sebbo2002/pyatv-mqtt-bridge:${VERSION}" "sebbo2002/pyatv-mqtt-bridge:${VERSION}-i386"

docker manifest push -p "sebbo2002/pyatv-mqtt-bridge:${VERSION}"
docker manifest push -p "sebbo2002/pyatv-mqtt-bridge:${DOCKER_TAG}"
