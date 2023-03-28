/**
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
  docs: [
    'overview',
    { type: 'html', value: 'State 🚥', className: 'custom-sidebar-category' },
    { type: 'doc', id: 'use-toggle', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-count-down', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-first-mount', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-previous', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-previous-distinct', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-update-effect', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-isomorphic-layout-effect', className: 'custom-sidebar-sub-item' },
    { type: 'html', value: 'Event 🗓', className: 'custom-sidebar-category' },
    { type: 'doc', id: 'use-intersection', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-in-view', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-window-event', className: 'custom-sidebar-sub-item' },
    { type: 'html', value: 'Optimization 🚀', className: 'custom-sidebar-category' },
    { type: 'doc', id: 'use-debounce', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-debounce-fn', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-throttle', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-throttle-fn', className: 'custom-sidebar-sub-item' },
    { type: 'html', value: 'Storage 🗄', className: 'custom-sidebar-category' },
    { type: 'doc', id: 'use-local-storage', className: 'custom-sidebar-sub-item' },
    { type: 'doc', id: 'use-session-storage', className: 'custom-sidebar-sub-item' },
  ],
};

module.exports = sidebars;
