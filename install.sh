#!/bin/bash

mkdir -p ./static/semantic/themes/default/
mkdir -p ./static/semantic/components/

cp -r \
   ./assets/semantic/themes/default/assets/ \
   ./static/semantic/themes/default/

cp -r \
   ./assets/semantic/semantic.min.js \
   ./static/semantic/

