﻿/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  /*
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  */

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  mainSidebar: [
    'about',
    {
      type: 'category',
      label: '🎮 Play H1-Mod',
      collapsible: false,
      items: [
        'install',
        'update',
        'uninstall',
      ]
    },
    {
      type: 'category',
      label: '🛠 Support',
      collapsible: false,
      items: [
        'troubleshoot',
        'errors',
        'functions',
        'ingamename',
        'unlockall',
      ]
    },
    {
      type: 'category',
      label: '🔨 Dedicated Server',
      collapsible: false,
      items: [
        'install-server',
        'port-forwarding'
      ]
    },
    {
      type: 'category',
      label: '💻 Scripting',
      collapsible: false,
      items: [
        'scripting',
        'load-script',
        'script-syntax',
        'gsc-reference',
        'ui-scripting'
      ]
    },
    {
      type: 'category',
      label: '💣 Additional Features',
      collapsible: false,
      items: [
        'ranked',
        'antialiasing',
        'aimassist',
        'fullbright',
      ]
    },
  ],
};

module.exports = sidebars;
