// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Foundations of Physical AI',
      collapsed: false,
      items: [
        'physical-ai',
        'software-vs-physical-ai',
      ],
    },

    {
      type: 'category',
      label: 'Humanoid Robotics',
      collapsed: false,
      items: [
        'humanoid-robots',
        'robot-anatomy',
      ],
    },

    {
      type: 'category',
      label: 'AI Inside Robots',
      collapsed: false,
      items: [
        'ai-agents-in-robots',
      ],
    },

    {
      type: 'category',
      label: 'Impact & Future',
      collapsed: false,
      items: [
        'future-of-work',
      ],
    },
  ],
};

export default sidebars;
