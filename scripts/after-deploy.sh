#!/bin/bash
REPOSITORY=/home/ubuntu/CICD_test

cd $REPOSITORY

sudo npm ci

sudo npm start