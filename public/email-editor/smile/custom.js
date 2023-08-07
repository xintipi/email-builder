// eslint-disable-next-line no-undef
unlayer.registerTool({
  name: 'my_abcxyz_tool',
  label: 'My ABC XYZ',
  icon: 'fa-smile',
  supportedDisplayModes: ['web', 'email'],
  options: {},
  values: {},
  renderer: {
    // eslint-disable-next-line no-undef
    Viewer: unlayer.createViewer({
      render(values) {
        return '<div>I am a smile tool.</div>';
      },
    }),
    exporters: {
      web: function (values) {
        return '<div>I am a smile tool.</div>';
      },
      email: function (values) {
        return '<div>I am a smile tool.</div>';
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});