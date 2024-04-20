<h1 align="center"> AWS Quizz Website </h1> <br>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How to install](#build-process)




<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

[![Build Status](https://img.shields.io/travis/gitpoint/git-point.svg?style=flat-square)](https://travis-ci.org/gitpoint/git-point)
[![Coveralls](https://img.shields.io/coveralls/github/gitpoint/git-point.svg?style=flat-square)](https://coveralls.io/github/gitpoint/git-point)
[![All Contributors](https://img.shields.io/badge/all_contributors-73-orange.svg?style=flat-square)](./CONTRIBUTORS.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Gitter chat](https://img.shields.io/badge/chat-on_gitter-008080.svg?style=flat-square)](https://gitter.im/git-point)

Welcome to our AWS Quiz Website designed to help you learn and prepare for the AWS Certified Cloud Practitioner exam. Whether you're new to cloud computing or looking to validate your AWS knowledge, our platform is here to guide you through essential concepts and assess your understanding through interactive quizzes..
**Why AWS Certified Cloud Practitioner?**

Becoming an AWS Certified Cloud Practitioner is the first step towards building a successful career in cloud computing. This entry-level certification is designed for individuals with no prior AWS experience and provides a foundational understanding of AWS cloud services, architecture, security, and pricing models.


## Features

A few of the things you can do with the website:

**How Our Quiz Website Can Help**:
*Login and Logout Features: To personalize your learning experience, our platform allows you to create an account and log in. This feature enables you to track your progress, save quiz results, and revisit topics you want to focus on. When you're done studying, simply log out to secure your account.
*Interactive Quizzes: Our platform offers a variety of quizzes covering key topics such as AWS services, security, compute, and more. Each quiz is designed to test your knowledge and reinforce important concepts.
*Realistic Exam Simulation: Practice makes perfect! We provide quizzes that simulate the format and difficulty level of the AWS Certified Cloud Practitioner exam, helping you get comfortable with the exam environment.
*Instant Feedback: Receive instant feedback on your quiz answers, including explanations for correct and incorrect choices. This feedback is valuable for learning and improving your understanding of AWS concepts.
*Track Your Progress: Monitor your progress as you work through quizzes. Track your scores, identify areas for improvement, and focus on mastering the topics that matter most for the certification exam.


<p align="center">
  ![aws demo login](https://github.com/LeeThanh24/AWS_Quizz_Website/assets/94585743/99aece83-253e-4325-8ecd-d920e2d32fb6)
</p>

<p align="center">
  ![aws demo website](https://github.com/LeeThanh24/AWS_Quizz_Website/assets/94585743/3a85b170-fc54-40f4-b37a-a120b227466c)
</p>



## How to install

- Follow the [React Native Guide](https://facebook.github.io/react-native/docs/getting-started.html) for getting started building a project with native code. **A Mac is required if you wish to develop for iOS.**
- Clone or download the repo
- `yarn` to install dependencies
- `yarn run link` to link react-native dependencies
- `yarn start:ios` to start the packager and run the app in the iOS simulator (`yarn start:ios:logger` will boot the application with [redux-logger](<https://github.com/evgenyrodionov/redux-logger>))
- `yarn start:android` to start the packager and run the app in the the Android device/emulator (`yarn start:android:logger` will boot the application with [redux-logger](https://github.com/evgenyrodionov/redux-logger))

Please take a look at the [contributing guidelines](./CONTRIBUTING.md) for a detailed process on how to build your application as well as troubleshooting information.

**Development Keys**: The `CLIENT_ID` and `CLIENT_SECRET` in `api/index.js` are for development purposes and do not represent the actual application keys. Feel free to use them or use a new set of keys by creating an [OAuth application](https://github.com/settings/applications/new) of your own. Set the "Authorization callback URL" to `gitpoint://welcome`.
